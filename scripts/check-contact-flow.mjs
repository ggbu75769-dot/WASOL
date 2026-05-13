import { writeFile } from "node:fs/promises";
import { ensureParentDir, projectPath, withChrome, withNextServer } from "./enterprise-v4-lib.mjs";

const report = {
  generatedAt: new Date().toISOString(),
  route: "/contact",
  emptySubmit: null,
  validSubmit: null,
  consoleErrors: [],
};

await withNextServer(async (baseUrl) => {
  await withChrome(async ({ openPage }) => {
    const cdp = await openPage(`${baseUrl}/contact`);
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
        await new Promise((resolve) => setTimeout(resolve, 160));
        const errors = Array.from(document.querySelectorAll("[data-field-error]")).map((node) => node.textContent.trim());
        return {
          formFound: Boolean(form),
          errorCount: errors.length,
          errors,
          hasBackendBlockedCopy: /백엔드|CRM|실제 전송/.test(document.body.textContent || "")
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

        const requiredFieldNames = [
          "category",
          "name",
          "organization",
          "email",
          "application",
          "substrate",
          "environment",
          "requiredProperty",
          "message"
        ];

        const fieldResults = {
          category: setField("category", "제품 적용 상담"),
          name: setField("name", "홍길동"),
          organization: setField("organization", "테스트산업"),
          email: setField("email", "test@example.com"),
          phone: setField("phone", "010-0000-0000"),
          product: setField("product", "산업용 점·접착제"),
          application: setField("application", "건축 방수 시트"),
          substrate: setField("substrate", "콘크리트 / PET 필름"),
          environment: setField("environment", "습도 높음, 외부 시공"),
          requiredProperty: setField("requiredProperty", "내수성, 점착 유지력"),
          sampleStage: setField("sampleStage", "샘플 검토"),
          message: setField("message", "내수성과 방수성이 필요한 시트 접착 조건 검토가 필요합니다.")
        };

        const form = document.querySelector("form");
        form?.requestSubmit();
        await new Promise((resolve) => setTimeout(resolve, 180));
        const summary = document.querySelector("[data-inquiry-summary]")?.textContent || "";
        const missing = requiredFieldNames.filter((name) => !fieldResults[name]);

        return {
          missing,
          summaryLength: summary.length,
          includesCategory: summary.includes("제품 적용 상담"),
          includesApplication: summary.includes("건축 방수 시트"),
          includesBackendBlockedCopy: /실제 전송|백엔드|CRM/.test(document.body.textContent || ""),
          fakeSentSuccess: /전송되었습니다|sent successfully/i.test(document.body.textContent || "")
        };
      })()`,
    });
    report.validSubmit = validSubmit.result.value;
  });
});

const reportPath = projectPath("docs", "dev-checkpoints", "enterprise-v4-contact-flow.json");
await ensureParentDir(reportPath);
await writeFile(reportPath, JSON.stringify(report, null, 2));

const failures = [];
if (!report.emptySubmit?.formFound) failures.push("contact form was not found");
if ((report.emptySubmit?.errorCount ?? 0) < 7) failures.push("empty submit did not produce the expected required-field errors");
if (!report.emptySubmit?.hasBackendBlockedCopy) failures.push("backend blocked copy is missing");
if ((report.validSubmit?.missing ?? []).length > 0) failures.push(`missing required fields: ${report.validSubmit.missing.join(", ")}`);
if ((report.validSubmit?.summaryLength ?? 0) < 220) failures.push("generated inquiry summary is too short");
if (!report.validSubmit?.includesCategory) failures.push("summary does not include inquiry category");
if (!report.validSubmit?.includesApplication) failures.push("summary does not include application context");
if (!report.validSubmit?.includesBackendBlockedCopy) failures.push("backend blocked copy disappeared after valid submit");
if (report.validSubmit?.fakeSentSuccess) failures.push("contact flow contains fake send-success language");
if (report.consoleErrors.length > 0) failures.push(`console errors observed: ${report.consoleErrors.join(" | ")}`);

if (failures.length > 0) {
  console.error("Contact flow check failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("Contact flow check passed.");
