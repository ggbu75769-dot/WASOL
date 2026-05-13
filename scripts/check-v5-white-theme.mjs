import { readdir, readFile, stat, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { ensureParentDir, projectPath } from "./v5-lib.mjs";

const checks = [];
function assert(condition, message) {
  checks.push({ ok: Boolean(condition), message });
}

const globals = await readFile(projectPath("app/globals.css"), "utf8");
const footer = await readFile(projectPath("components/layout/Footer.tsx"), "utf8");
const visuals = await readFile(projectPath("components/visuals/V5EnterpriseVisuals.tsx"), "utf8");

assert(globals.includes("--bg: #ffffff"), "global background token remains white");
assert(globals.includes("@media print"), "print style exists");
assert(!footer.includes("bg-[var(--brand-navy)]"), "footer is not a dark navy identity block");
assert(visuals.includes("ProductComparisonVisual"), "product comparison visual exists");
assert(visuals.includes("OfficialDataReadinessVisual"), "official data readiness visual exists");
assert(visuals.includes("TechnicalVariableMapVisual"), "technical variable visual exists");

const forbiddenDarkIdentityTokens = [
  "#05070A",
  "#05070a",
  "bg-black",
  "from-black",
  "to-black",
  "slate-950",
  "zinc-950",
  "neutral-950",
  "dark glass",
  "neon",
];

async function walk(dir, files = []) {
  if (!existsSync(dir)) return files;
  for (const entry of await readdir(dir)) {
    const fullPath = path.join(dir, entry);
    const info = await stat(fullPath);
    if (info.isDirectory()) {
      if (["node_modules", ".next", ".git"].includes(entry)) continue;
      await walk(fullPath, files);
    } else if (/\.(ts|tsx|css|svg)$/.test(entry)) {
      files.push(fullPath);
    }
  }
  return files;
}

const files = [];
for (const root of ["app", "components", "content", "public"]) await walk(projectPath(root), files);

for (const fullPath of files) {
  const source = await readFile(fullPath, "utf8");
  const relativePath = path.relative(projectPath(), fullPath).replaceAll("\\", "/");
  for (const token of forbiddenDarkIdentityTokens) {
    assert(!source.includes(token), `${relativePath} does not contain dark identity token ${token}`);
  }
}

const reportPath = projectPath("docs", "dev-checkpoints", "v5-white-theme.json");
await ensureParentDir(reportPath);
await writeFile(reportPath, JSON.stringify({ generatedAt: new Date().toISOString(), checks }, null, 2));

const failed = checks.filter((check) => !check.ok);
if (failed.length > 0) {
  console.error("v5 white theme guard failed:");
  for (const failure of failed) console.error(`- ${failure.message}`);
  process.exit(1);
}

console.log(`v5 white theme guard passed (${checks.length} checks).`);
