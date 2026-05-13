import { readdir, readFile, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { projectPath } from "./enterprise-v4-lib.mjs";

const checks = [];

async function file(path) {
  return readFile(new URL(`../${path}`, import.meta.url), "utf8");
}

function assert(condition, message) {
  checks.push({ ok: Boolean(condition), message });
}

const globals = await file("app/globals.css");
const homepage = await file("app/page.tsx");
const header = await file("components/layout/Header.tsx");
const mobileNav = await file("components/layout/MobileNav.tsx");
const footer = await file("components/layout/Footer.tsx");
const brand = await file("public/brand/warsol-wordmark.svg");
const packageJson = await file("package.json");

const criticalSource = [
  ["app/globals.css", globals],
  ["components/layout/Header.tsx", header],
  ["components/layout/MobileNav.tsx", mobileNav],
  ["components/layout/Footer.tsx", footer],
  ["public/brand/warsol-wordmark.svg", brand],
];

const darkTokens = [
  "#05070a",
  "#05070A",
  "#0B0F",
  "#111827",
  "bg-[#05070A]",
  "bg-black",
  "bg-zinc",
  "bg-neutral",
  "bg-slate-9",
  "from-black",
  "to-black",
  "slate-950",
  "zinc-950",
  "neutral-950",
  "text-white",
  "graphite",
  "neon",
  "dark glass",
];

assert(globals.includes("--bg: #ffffff") || globals.includes("--bg: #FFFFFF"), "global background token is white");
assert(globals.includes("--brand-navy"), "light brand navy token exists");
assert(homepage.includes("LightPremiumHero"), "homepage uses light premium hero");
assert(homepage.includes("MaterialSystems"), "homepage uses material systems section");
assert(homepage.includes("ProcessFlowVisual"), "homepage uses material pipeline visual");
assert(homepage.includes("RdEvidenceRail"), "homepage uses R&D evidence rail");
assert(homepage.includes("ApplicationMatrix"), "homepage uses application matrix");
assert(homepage.includes("TechnicalInquiryCta"), "homepage uses technical inquiry CTA");
assert(!brand.includes('fill="#05070A"') && !brand.includes('fill="#05070a"'), "brand mark is not on a black rectangle");
assert(packageJson.includes("capture:enterprise-v4"), "enterprise v4 capture script is registered");
assert(packageJson.includes("check:content-quality"), "content quality guard is registered");
assert(packageJson.includes("check:contact-flow"), "contact flow guard is registered");

for (const [path, source] of criticalSource) {
  for (const token of darkTokens) {
    assert(!source.includes(token), `${path} does not contain dark token ${token}`);
  }
}

async function walk(dir, files = []) {
  if (!existsSync(dir)) return files;
  for (const entry of await readdir(dir)) {
    const fullPath = path.join(dir, entry);
    const info = await stat(fullPath);
    if (info.isDirectory()) {
      if (["node_modules", ".next"].includes(entry)) continue;
      await walk(fullPath, files);
    } else if (/\.(ts|tsx|css|svg)$/.test(entry)) {
      files.push(fullPath);
    }
  }
  return files;
}

const broadFiles = [];
for (const root of ["app", "components", "content", "public"]) {
  await walk(projectPath(root), broadFiles);
}

for (const fullPath of broadFiles) {
  const relativePath = path.relative(projectPath(), fullPath).replaceAll("\\", "/");
  const source = await readFile(fullPath, "utf8");
  for (const token of darkTokens) {
    assert(!source.includes(token), `${relativePath} does not contain dark token ${token}`);
  }
}

const failed = checks.filter((check) => !check.ok);

if (failed.length > 0) {
  console.error("White theme guard failed:");
  for (const failure of failed) {
    console.error(`- ${failure.message}`);
  }
  process.exit(1);
}

console.log(`White theme guard passed (${checks.length} checks).`);
