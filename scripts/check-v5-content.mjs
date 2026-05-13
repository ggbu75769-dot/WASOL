import { readdir, readFile, stat, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { allRoutes, applicationRoutes, ensureParentDir, productRoutes, projectPath } from "./v5-lib.mjs";

const checks = [];

function assert(condition, message) {
  checks.push({ ok: Boolean(condition), message });
}

async function file(relativePath) {
  return readFile(projectPath(relativePath), "utf8");
}

const requiredFiles = [
  "content/company.ts",
  "content/technology.ts",
  "content/products.ts",
  "content/applications.ts",
  "content/patents.ts",
  "content/source-ledger.ts",
  "content/inquiry.ts",
  "content/routes.ts",
  "app/products/[slug]/page.tsx",
  "app/applications/[slug]/page.tsx",
  "app/resources/page.tsx",
  "app/privacy/page.tsx",
];

for (const requiredFile of requiredFiles) {
  assert(existsSync(projectPath(requiredFile)), `${requiredFile} exists`);
}

const products = await file("content/products.ts");
const applications = await file("content/applications.ts");
const contact = await file("components/forms/InquiryForm.tsx");
const sitemap = await file("app/sitemap.ts");
const resources = await file("app/resources/page.tsx");

for (const route of allRoutes) {
  assert(sitemap.includes("publicRoutes"), "sitemap is generated from public route registry");
  assert(route.path !== "/products" || productRoutes.length >= 5, "at least five product routes configured");
  assert(route.path !== "/applications" || applicationRoutes.length >= 4, "at least four application routes configured");
}

for (const route of productRoutes) assert(products.includes(route.path.split("/").pop()), `product content includes ${route.path}`);
for (const route of applicationRoutes) assert(applications.includes(route.path.split("/").pop()), `application content includes ${route.path}`);

assert(contact.includes("navigator.clipboard.writeText"), "contact supports copy-to-clipboard");
assert(contact.includes("window.print()"), "contact supports print summary");
assert(contact.includes("aria-invalid"), "contact fields expose aria-invalid");
assert(contact.includes("quantityTimeline"), "contact collects quantity/sample/timeline");
assert(resources.includes("Official Data Readiness"), "resources route explains official data readiness");
assert(products.includes("TDS pending"), "product content marks pending TDS state");

const forbiddenPatterns = [
  /Fortune\s*500/i,
  /ISO\s*9001/i,
  /certified customer/i,
  /download\s*TDS/i,
  /sent successfully/i,
  /전송되었습니다/,
  /고객사\s*:/,
];

async function walk(dir, files = []) {
  if (!existsSync(dir)) return files;
  for (const entry of await readdir(dir)) {
    const fullPath = path.join(dir, entry);
    const info = await stat(fullPath);
    if (info.isDirectory()) {
      if (["node_modules", ".next", ".git"].includes(entry)) continue;
      await walk(fullPath, files);
    } else if (/\.(ts|tsx|md)$/.test(entry)) {
      files.push(fullPath);
    }
  }
  return files;
}

const scannedFiles = [];
for (const root of ["app", "components", "content", "docs/v5"]) await walk(projectPath(root), scannedFiles);

for (const fullPath of scannedFiles) {
  const source = await readFile(fullPath, "utf8");
  const relativePath = path.relative(projectPath(), fullPath).replaceAll("\\", "/");
  for (const pattern of forbiddenPatterns) {
    if (relativePath === "content/source-ledger.ts" && String(pattern).includes("ISO")) continue;
    assert(!pattern.test(source), `${relativePath} avoids forbidden fake claim ${pattern}`);
  }
}

const report = { generatedAt: new Date().toISOString(), checks };
const reportPath = projectPath("docs", "dev-checkpoints", "v5-content-quality.json");
await ensureParentDir(reportPath);
await writeFile(reportPath, JSON.stringify(report, null, 2));

const failed = checks.filter((check) => !check.ok);
if (failed.length > 0) {
  console.error("v5 content guard failed:");
  for (const failure of failed) console.error(`- ${failure.message}`);
  process.exit(1);
}

console.log(`v5 content guard passed (${checks.length} checks).`);
