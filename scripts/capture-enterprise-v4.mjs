import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import {
  ensureParentDir,
  projectPath,
  routes,
  viewports,
  withChrome,
  withNextServer,
} from "./enterprise-v4-lib.mjs";

const outputPath = projectPath("docs", "dev-checkpoints", "screenshots", "white-enterprise-v4");
await mkdir(outputPath, { recursive: true });

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

    for (const route of routes) {
      for (const viewport of viewports) {
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

        const load = new Promise((resolve) => cdp.on("Page.loadEventFired", resolve));
        await cdp.send("Page.navigate", { url: `${baseUrl}${route.path}` });
        await load;
        await new Promise((resolve) => setTimeout(resolve, 650));

        const metrics = await cdp.send("Runtime.evaluate", {
          returnByValue: true,
          expression: `(() => {
            const h1 = document.querySelector("h1");
            const hero = document.querySelector("section");
            const bodyText = document.body.textContent || "";
            const h1Box = h1 ? h1.getBoundingClientRect() : null;
            const sectionCount = document.querySelectorAll("main section").length;
            const emptyMajorSections = Array.from(document.querySelectorAll("main section")).filter((section) => {
              const text = section.textContent.trim();
              return section.getBoundingClientRect().height > 140 && text.length < 24;
            }).length;
            const titleClipped =
              h1Box ? h1Box.left < -1 || h1Box.right > document.documentElement.clientWidth + 1 || h1Box.height < 24 : true;
            return {
              title: document.title,
              h1: h1 ? h1.textContent.trim() : "",
              scrollWidth: document.documentElement.scrollWidth,
              clientWidth: document.documentElement.clientWidth,
              bodyHeight: document.documentElement.scrollHeight,
              horizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
              heroBackground: hero ? getComputedStyle(hero).backgroundColor : "",
              h1Clipped: titleClipped,
              emptyMajorSections,
              sectionCount,
              fakeBackendClaim: /전송되었습니다|sent successfully/i.test(bodyText),
              notes: []
            };
          })()`,
        });

        const screenshot = await cdp.send("Page.captureScreenshot", {
          format: "png",
          captureBeyondViewport: false,
        });
        const screenshotPath = path.join(outputPath, `${route.name}-${viewport.name}.png`);
        await writeFile(screenshotPath, Buffer.from(screenshot.data, "base64"));

        results.push({
          route: route.path,
          viewport: viewport.name,
          width: viewport.width,
          height: viewport.height,
          screenshot: screenshotPath,
          consoleErrors: consoleErrors.splice(0),
          ...metrics.result.value,
        });
      }
    }
  });
});

const report = {
  generatedAt: new Date().toISOString(),
  routes,
  viewports,
  results,
};

const reportPath = path.join(outputPath, "visual-qa.json");
await ensureParentDir(reportPath);
await writeFile(reportPath, JSON.stringify(report, null, 2));

const failures = results.filter(
  (result) =>
    result.horizontalOverflow ||
    result.h1Clipped ||
    result.emptyMajorSections > 0 ||
    result.fakeBackendClaim ||
    result.consoleErrors.length > 0 ||
    !result.h1,
);

if (results.length !== routes.length * viewports.length || failures.length > 0) {
  console.error("Enterprise v4 visual capture found issues:");
  console.error(`Captured ${results.length}/${routes.length * viewports.length} screenshots.`);
  for (const failure of failures) {
    console.error(`- ${failure.route} ${failure.viewport}: overflow=${failure.horizontalOverflow} h1Clipped=${failure.h1Clipped} empty=${failure.emptyMajorSections} consoleErrors=${failure.consoleErrors.length}`);
  }
  process.exit(1);
}

console.log(`Enterprise v4 visual capture passed (${results.length} screenshots).`);
