import { writeFile } from "node:fs/promises";
import { ensureParentDir, projectPath, routes, withNextServer } from "./enterprise-v4-lib.mjs";

const results = [];

await withNextServer(async (baseUrl) => {
  for (const route of routes) {
    const url = `${baseUrl}${route.path}`;
    const startedAt = Date.now();
    let status = 0;
    let ok = false;
    let title = "";
    let h1 = "";
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
      error,
    });
  }
});

const report = {
  generatedAt: new Date().toISOString(),
  results,
};

const reportPath = projectPath("docs", "dev-checkpoints", "enterprise-v4-route-smoke.json");
await ensureParentDir(reportPath);
await writeFile(reportPath, JSON.stringify(report, null, 2));

const failures = results.filter((result) => !result.ok || !result.title || !result.h1);
if (failures.length > 0) {
  console.error("Route smoke check failed:");
  for (const failure of failures) {
    console.error(`- ${failure.route}: status=${failure.status} title=${Boolean(failure.title)} h1=${Boolean(failure.h1)} ${failure.error}`);
  }
  process.exit(1);
}

console.log(`Route smoke check passed (${results.length} routes).`);
