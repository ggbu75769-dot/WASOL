import { readdir, readFile, stat, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { ensureParentDir, projectPath } from "./enterprise-v4-lib.mjs";

const requiredFiles = [
  "content/company.ts",
  "content/technology.ts",
  "content/products.ts",
  "content/patents.ts",
  "content/applications.ts",
  "content/source-ledger.ts",
  "docs/content-source-ledger.md",
  "docs/official-data-needed.md",
];

const scanRoots = ["app", "components", "content", "docs"];
const allowedExtensions = new Set([".ts", ".tsx", ".md", ".mjs", ".css", ".svg"]);
const forbiddenPatterns = [
  { pattern: /lorem ipsum|coming soon|dummy content|sample customer|trusted by/i, label: "placeholder or fabricated customer language" },
  { pattern: /Fortune\s*500|No\.?\s*1|market leader|industry[- ]leading/i, label: "unsupported superlative claim" },
  { pattern: /revenue|매출\s*\d|고객사\s*[:：]/i, label: "unsupported revenue/customer claim" },
  { pattern: /\uFFFD|二쇱|뚯|怨듦|쒗|뱁뿀|癲|熬|利|濡\?/, label: "mojibake or broken Korean text" },
];

const certificationPattern = /\bISO\b|certified|인증/iu;
const certificationAllowedFiles = new Set([
  "content/source-ledger.ts",
  "docs/content-source-ledger.md",
  "docs/official-data-needed.md",
  "docs/white-enterprise-v4-starting-audit.md",
  "docs/white-enterprise-v4-site-blueprint.md",
  "docs/white-enterprise-v4-report.md",
  "docs/dev-report.md",
  "docs/visual-quality-audit.md",
]);

async function walk(dir, files = []) {
  if (!existsSync(dir)) return files;
  for (const entry of await readdir(dir)) {
    const fullPath = path.join(dir, entry);
    const info = await stat(fullPath);
    if (info.isDirectory()) {
      if (["node_modules", ".next", "screenshots"].includes(entry)) continue;
      await walk(fullPath, files);
    } else if (allowedExtensions.has(path.extname(entry))) {
      files.push(fullPath);
    }
  }
  return files;
}

const failures = [];

for (const relativePath of requiredFiles) {
  if (!existsSync(projectPath(relativePath))) {
    failures.push({ file: relativePath, issue: "required v4 content artifact is missing" });
  }
}

const files = [];
for (const root of scanRoots) {
  await walk(projectPath(root), files);
}

for (const fullPath of files) {
  const relativePath = path.relative(projectPath(), fullPath).replaceAll("\\", "/");
  const text = await readFile(fullPath, "utf8");

  for (const { pattern, label } of forbiddenPatterns) {
    if (pattern.test(text)) {
      if (relativePath.startsWith("docs/") && label.startsWith("unsupported")) continue;
      failures.push({ file: relativePath, issue: label });
    }
  }

  const certificationIsSafeContext =
    /확인|공식|미확인|제외|보류|pending|unverified|자료|제공|확정|not used|excluded|without official/i.test(text);
  if (certificationPattern.test(text) && !certificationAllowedFiles.has(relativePath) && !certificationIsSafeContext) {
    failures.push({ file: relativePath, issue: "certification claim outside approved ledger/pending-data context" });
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  requiredFiles,
  scannedFiles: files.length,
  failures,
};

const reportPath = projectPath("docs", "dev-checkpoints", "enterprise-v4-content-quality.json");
await ensureParentDir(reportPath);
await writeFile(reportPath, JSON.stringify(report, null, 2));

if (failures.length > 0) {
  console.error("Content quality guard failed:");
  for (const failure of failures) {
    console.error(`- ${failure.file}: ${failure.issue}`);
  }
  process.exit(1);
}

console.log(`Content quality guard passed (${files.length} files scanned).`);
