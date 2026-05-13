import { writeFile } from "node:fs/promises";
import { ensureParentDir, projectPath, withChrome, withNextServer } from "./v5-lib.mjs";

const report = {
  generatedAt: new Date().toISOString(),
  route: "/contact",
  emptySubmit: null,
  validSubmit: null,
  consoleErrors: [],
};

await withNextServer(async (baseUrl) => {
  await withChrome(async ({ openPage }) => {
    const cdp = await openPage(`${baseUrl}/contact?product=adhesion-systems&application=building-envelope`);
    await cdp.send("Page.enable");
    await cdp.send("Runtime.enable");
    await cdp.on("Runtime.consoleAPICalled", (params) => {
      if (params.type === "error") {
        report.consoleErrors.push(params.args.map((arg) => arg.value ?? arg.description ?? "").join(" "));
      }
    });

    await new Promise((resolve) => cdp.on("Page.loadEventFired", resolve));
    for (let attempt = 0; attempt < 80; attempt += 1) {
      const formReady = await cdp.send("Runtime.evaluate", {
        returnByValue: true,
        expression: `Boolean(document.querySelector("form"))`,
      });
      if (formReady.result.value) break;
      await new Promise((resolve) => setTimeout(resolve, 100));
    }

    const emptySubmit = await cdp.send("Runtime.evaluate", {
      returnByValue: true,
      awaitPromise: true,
      expression: `(async () => {
        const form = document.querySelector("form");
        form?.requestSubmit();
        await new Promise((resolve) => setTimeout(resolve, 180));
        const errors = Array.from(document.querySelectorAll("[data-field-error]")).map((node) => node.textContent.trim());
        return {
          formFound: Boolean(form),
          errorCount: errors.length,
          errors,
          hasBackendBlockedCopy: /실제 이메일을 전송하지 않는|CRM|API/.test(document.body.textContent || ""),
          hasCopyButton: /Copy summary/.test(document.body.textContent || ""),
          hasPrintButton: /Print summary/.test(document.body.textContent || "")
        };
      })()`,
    });
    report.emptySubmit = emptySubmit.result.value;

    const validSubmit = await cdp.send("Runtime.evaluate", {
      returnByValue: true,
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

        const fieldResults = {
          category: setField("category", "제품 적용 상담"),
          product: setField("product", "adhesion-systems"),
          application: setField("application", "building-envelope"),
          name: setField("name", "홍길동"),
          organization: setField("organization", "테스트산업"),
          email: setField("email", "test@example.com"),
          phone: setField("phone", "010-0000-0000"),
          substrate: setField("substrate", "콘크리트 / PET 필름"),
          environment: setField("environment", "외부 노출, 고습, 여름 시공"),
          requiredProperty: setField("requiredProperty", "내수성, 초기 점착, 박리 안정성"),
          quantityTimeline: setField("quantityTimeline", "소량 샘플 필요"),
          sampleStage: setField("sampleStage", "샘플 검토"),
          message: setField("message", "방수 시트 적용 조건과 샘플 상담 가능 여부를 확인하고 싶습니다.")
        };

        const form = document.querySelector("form");
        form?.requestSubmit();
        await new Promise((resolve) => setTimeout(resolve, 220));
        const summary = document.querySelector("[data-inquiry-summary]")?.textContent || "";
        const missing = Object.entries(fieldResults).filter(([, ok]) => !ok).map(([name]) => name);

        return {
          missing,
          summaryLength: summary.length,
          includesProduct: summary.includes("산업용 점·접착 시스템"),
          includesApplication: summary.includes("건축 외피"),
          includesQuantity: summary.includes("소량 샘플 필요"),
          includesBackendBlockedCopy: /실제 이메일을 전송하지 않는|전송 상태/.test(document.body.textContent || ""),
          hasCopyButton: /Copy summary/.test(document.body.textContent || ""),
          hasPrintButton: /Print summary/.test(document.body.textContent || ""),
          fakeSentSuccess: /sent successfully|전송되었습니다/i.test(document.body.textContent || "")
        };
      })()`,
    });
    report.validSubmit = validSubmit.result.value;
  });
});

const reportPath = projectPath("docs", "dev-checkpoints", "v5-contact-flow.json");
await ensureParentDir(reportPath);
await writeFile(reportPath, JSON.stringify(report, null, 2));

const failures = [];
if (!report.emptySubmit?.formFound) failures.push("contact form was not found");
if ((report.emptySubmit?.errorCount ?? 0) < 9) failures.push("empty submit did not produce the expected required-field errors");
if (!report.emptySubmit?.hasBackendBlockedCopy) failures.push("backend blocked copy is missing");
if (!report.emptySubmit?.hasCopyButton || !report.emptySubmit?.hasPrintButton) failures.push("copy/print controls are missing");
if ((report.validSubmit?.missing ?? []).length > 0) failures.push(`missing required fields: ${report.validSubmit.missing.join(", ")}`);
if ((report.validSubmit?.summaryLength ?? 0) < 450) failures.push("generated inquiry summary is too short");
if (!report.validSubmit?.includesProduct) failures.push("summary does not include selected product");
if (!report.validSubmit?.includesApplication) failures.push("summary does not include selected application");
if (!report.validSubmit?.includesQuantity) failures.push("summary does not include quantity/sample/timeline");
if (!report.validSubmit?.includesBackendBlockedCopy) failures.push("backend blocked copy disappeared after valid submit");
if (report.validSubmit?.fakeSentSuccess) failures.push("contact flow contains fake send-success language");
if (report.consoleErrors.length > 0) failures.push(`console errors observed: ${report.consoleErrors.join(" | ")}`);

if (failures.length > 0) {
  console.error("v5 contact flow check failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("v5 contact flow check passed.");
