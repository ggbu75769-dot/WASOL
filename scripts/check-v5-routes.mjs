import { writeFile } from "node:fs/promises";
import { allRoutes, ensureParentDir, projectPath, withNextServer } from "./v5-lib.mjs";

const results = [];

await withNextServer(async (baseUrl) => {
  const sitemap = await fetch(`${baseUrl}/sitemap.xml`).then((response) => response.text());
  for (const route of allRoutes) {
    const url = `${baseUrl}${route.path}`;
    const startedAt = Date.now();
    let status = 0;
    let ok = false;
    let title = "";
    let h1 = "";
    let inSitemap = sitemap.includes(route.path === "/" ? "https://www.warsolchem.co.kr/" : route.path);
    let error = "";

    try {
      const response = await fetch(url);
      status = response.status;
      ok = response.ok;
      const html = await response.text();
      title = html.match(/<title>(.*?)<\/title>/i)?.[1] ?? "";
      h1 = html.match(/<h1[^>]*>(.*?)<\/h1>/is)?.[1]?.replace(/<[^>]+>/g, "").trim() ?? "";
    } catch (caught) {
      error = caught instanceof Error ? caught.message : String(caught);
    }

    results.push({
      route: route.path,
      url,
      status,
      ok,
      durationMs: Date.now() - startedAt,
      title,
      h1,
      inSitemap,
      error,
    });
  }
});

const report = { generatedAt: new Date().toISOString(), expectedRouteCount: allRoutes.length, results };
const reportPath = projectPath("docs", "dev-checkpoints", "v5-route-smoke.json");
await ensureParentDir(reportPath);
await writeFile(reportPath, JSON.stringify(report, null, 2));

const failures = results.filter((result) => !result.ok || !result.title || !result.h1 || !result.inSitemap);
if (results.length < 15 || failures.length > 0) {
  console.error("v5 route smoke failed:");
  console.error(`Checked ${results.length} routes.`);
  for (const failure of failures) {
    console.error(`- ${failure.route}: status=${failure.status} title=${Boolean(failure.title)} h1=${Boolean(failure.h1)} sitemap=${failure.inSitemap} ${failure.error}`);
  }
  process.exit(1);
}

console.log(`v5 route smoke passed (${results.length} routes).`);
