import { mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import {
  ensureParentDir,
  finalDetailViewports,
  mainRoutes,
  productRoutes,
  applicationRoutes,
  projectPath,
  safeFileName,
  viewports,
  withChrome,
  withNextServer,
} from "./v5-lib.mjs";

const round = process.argv[2] ?? "final";
if (!["baseline", "mid", "final"].includes(round)) {
  throw new Error(`Unknown v5 capture round: ${round}`);
}

const rootOutput = projectPath("docs", "dev-checkpoints", "screenshots", "white-enterprise-v5");
const outputPath = path.join(rootOutput, round);
await mkdir(outputPath, { recursive: true });
if (round === "final") await mkdir(path.join(rootOutput, "form-states"), { recursive: true });

const capturePlan = round === "final"
  ? [
      ...mainRoutes.flatMap((route) => viewports.map((viewport) => ({ route, viewport, folder: outputPath }))),
      ...[...productRoutes, ...applicationRoutes].flatMap((route) =>
        finalDetailViewports.map((viewport) => ({ route, viewport, folder: outputPath })),
      ),
    ]
  : mainRoutes.flatMap((route) => viewports.map((viewport) => ({ route, viewport, folder: outputPath })));

const results = [];

await withNextServer(async (baseUrl) => {
  await withChrome(async ({ openPage }) => {
    const cdp = await openPage(`${baseUrl}/`);
    await cdp.send("Page.enable");
    await cdp.send("Runtime.enable");
    await cdp.send("Log.enable");

    const consoleErrors = [];
    await cdp.on("Runtime.consoleAPICalled", (params) => {
      if (params.type === "error") {
        consoleErrors.push(params.args.map((arg) => arg.value ?? arg.description ?? "").join(" "));
      }
    });
    await cdp.on("Log.entryAdded", (params) => {
      if (params.entry?.level === "error") consoleErrors.push(params.entry.text);
    });

    for (const item of capturePlan) {
      await setViewport(cdp, item.viewport);
      await navigate(cdp, `${baseUrl}${item.route.path}`);
      const metrics = await pageMetrics(cdp);
      const screenshotPath = path.join(item.folder, safeFileName(item.route.name, item.viewport.name));
      const screenshot = await cdp.send("Page.captureScreenshot", {
        format: "png",
        captureBeyondViewport: false,
      });
      await writeFile(screenshotPath, Buffer.from(screenshot.data, "base64"));

      results.push({
        round,
        route: item.route.path,
        viewport: item.viewport.name,
        width: item.viewport.width,
        height: item.viewport.height,
        screenshot: screenshotPath,
        consoleErrors: consoleErrors.splice(0),
        linkedIssueIds: [],
        ...metrics,
      });
    }

    if (round === "final") {
      await captureContactStates(cdp, baseUrl, consoleErrors, results);
    }
  });
});

const roundReport = {
  generatedAt: new Date().toISOString(),
  round,
  screenshotCount: results.length,
  results,
};

const roundReportPath = path.join(outputPath, "visual-qa.json");
await writeFile(roundReportPath, JSON.stringify(roundReport, null, 2));

const aggregatePath = path.join(rootOutput, "visual-qa.json");
const aggregate = existsSync(aggregatePath)
  ? JSON.parse(await readFile(aggregatePath, "utf8"))
  : { generatedAt: null, rounds: {} };
aggregate.generatedAt = new Date().toISOString();
aggregate.rounds[round] = roundReport;
await ensureParentDir(aggregatePath);
await writeFile(aggregatePath, JSON.stringify(aggregate, null, 2));

const failures = results.filter(
  (result) =>
    result.horizontalOverflow ||
    result.h1Clipped ||
    result.consoleErrors.length > 0 ||
    !result.h1 ||
    result.darkThemeLeftover,
);

if (failures.length > 0) {
  console.error(`v5 ${round} capture found issues:`);
  console.error(`Captured ${results.length} state artifacts.`);
  for (const failure of failures) {
    console.error(`- ${failure.route} ${failure.viewport}: overflow=${failure.horizontalOverflow} h1Clipped=${failure.h1Clipped} dark=${failure.darkThemeLeftover} consoleErrors=${failure.consoleErrors.length}`);
  }
  process.exit(1);
}

console.log(`v5 ${round} capture passed (${results.length} state artifacts).`);

async function setViewport(cdp, viewport) {
  await cdp.send("Emulation.setDeviceMetricsOverride", {
    width: viewport.width,
    height: viewport.height,
    deviceScaleFactor: 1,
    mobile: viewport.width < 768,
  });
  await cdp.send("Emulation.setUserAgentOverride", {
    userAgent:
      viewport.width < 768
        ? "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"
        : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125 Safari/537.36",
  });
}

async function navigate(cdp, url) {
  const load = new Promise((resolve) => cdp.on("Page.loadEventFired", resolve));
  await cdp.send("Page.navigate", { url });
  await load;
  await new Promise((resolve) => setTimeout(resolve, 650));
}

async function pageMetrics(cdp) {
  const metrics = await cdp.send("Runtime.evaluate", {
    returnByValue: true,
    expression: `(() => {
      const h1 = document.querySelector("h1");
      const bodyText = document.body.textContent || "";
      const h1Box = h1 ? h1.getBoundingClientRect() : null;
      const titleClipped =
        h1Box ? h1Box.left < -1 || h1Box.right > document.documentElement.clientWidth + 1 || h1Box.height < 24 : true;
      const darkThemeLeftover =
        bodyText.includes("sent successfully") ||
        Boolean(document.querySelector(".bg-black,.from-black,.to-black"));
      return {
        title: document.title,
        h1: h1 ? h1.textContent.trim() : "",
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        bodyHeight: document.documentElement.scrollHeight,
        horizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
        h1Clipped: titleClipped,
        heroTitleClipping: titleClipped ? "clipped-or-missing" : "ok",
        darkThemeLeftover,
        notes: []
      };
    })()`,
  });
  return metrics.result.value;
}

async function captureContactStates(cdp, baseUrl, consoleErrors, results) {
  const viewport = { name: "desktop-1440", width: 1440, height: 1100 };
  await setViewport(cdp, viewport);
  await navigate(cdp, `${baseUrl}/contact?product=adhesion-systems&application=building-envelope`);

  await cdp.send("Runtime.evaluate", {
    awaitPromise: true,
    expression: `(async () => {
      document.querySelector("form")?.requestSubmit();
      await new Promise((resolve) => setTimeout(resolve, 200));
    })()`,
  });
  await captureFormState(cdp, consoleErrors, results, "contact-invalid");

  await cdp.send("Runtime.evaluate", {
    awaitPromise: true,
    expression: `(async () => {
      const setField = (name, value) => {
        const field = document.querySelector('[name="' + name + '"]');
        if (!field) return false;
        const prototype =
          field instanceof HTMLTextAreaElement
            ? HTMLTextAreaElement.prototype
            : field instanceof HTMLSelectElement
              ? HTMLSelectElement.prototype
              : HTMLInputElement.prototype;
        const setter = Object.getOwnPropertyDescriptor(prototype, "value")?.set;
        setter?.call(field, value);
        field.dispatchEvent(new Event("input", { bubbles: true }));
        field.dispatchEvent(new Event("change", { bubbles: true }));
        return true;
      };
      setField("category", "제품 적용 상담");
      setField("product", "adhesion-systems");
      setField("application", "building-envelope");
      setField("name", "홍길동");
      setField("organization", "테스트산업");
      setField("email", "test@example.com");
      setField("phone", "010-0000-0000");
      setField("substrate", "콘크리트 / PET 필름");
      setField("environment", "외부 노출, 고습, 여름 시공");
      setField("requiredProperty", "내수성, 초기 점착, 박리 안정성");
      setField("quantityTimeline", "소량 샘플 필요");
      setField("sampleStage", "샘플 검토");
      setField("message", "방수 시트 적용 조건과 샘플 상담 가능 여부를 확인하고 싶습니다.");
      document.querySelector("form")?.requestSubmit();
      await new Promise((resolve) => setTimeout(resolve, 240));
    })()`,
  });
  await captureFormState(cdp, consoleErrors, results, "contact-valid-summary");
}

async function captureFormState(cdp, consoleErrors, results, name) {
  const folder = projectPath("docs", "dev-checkpoints", "screenshots", "white-enterprise-v5", "form-states");
  const screenshotPath = path.join(folder, `${name}.png`);
  const metrics = await pageMetrics(cdp);
  const screenshot = await cdp.send("Page.captureScreenshot", {
    format: "png",
    captureBeyondViewport: false,
  });
  await writeFile(screenshotPath, Buffer.from(screenshot.data, "base64"));
  results.push({
    round: "final",
    route: "/contact",
    viewport: name,
    width: 1440,
    height: 1100,
    screenshot: screenshotPath,
    consoleErrors: consoleErrors.splice(0),
    linkedIssueIds: ["V5-026", "V5-027", "V5-028", "V5-030"],
    ...metrics,
  });
}
