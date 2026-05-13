import { spawn } from "node:child_process";
import { mkdir, rm, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { createServer } from "node:net";
import path from "node:path";
import { tmpdir } from "node:os";
import { fileURLToPath } from "node:url";

const outputDir = new URL("../docs/dev-checkpoints/screenshots/white-theme-v3/", import.meta.url);
const outputPath = fileURLToPath(outputDir);
const targetUrl = process.env.WARSOL_CAPTURE_URL ?? "http://localhost:3000/";

const viewports = [
  { name: "mobile-360", width: 360, height: 1200 },
  { name: "mobile-390", width: 390, height: 1200 },
  { name: "mobile-430", width: 430, height: 1200 },
  { name: "tablet-768", width: 768, height: 1200 },
  { name: "desktop-1440", width: 1440, height: 1100 },
  { name: "large-1920", width: 1920, height: 1200 },
];

function chromePath() {
  const candidates = [
    process.env.CHROME_PATH,
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  ].filter(Boolean);

  const found = candidates.find((candidate) => existsSync(candidate));
  if (!found) throw new Error("Chrome or Edge executable was not found.");
  return found;
}

function freePort() {
  return new Promise((resolve, reject) => {
    const server = createServer();
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      const port = typeof address === "object" && address ? address.port : null;
      server.close(() => (port ? resolve(port) : reject(new Error("No port assigned."))));
    });
    server.on("error", reject);
  });
}

async function waitForJson(url, attempts = 80) {
  for (let attempt = 0; attempt < attempts; attempt += 1) {
    try {
      const response = await fetch(url);
      if (response.ok) return response.json();
    } catch {
      // Chrome is still booting.
    }
    await new Promise((resolve) => setTimeout(resolve, 150));
  }
  throw new Error(`Timed out waiting for ${url}`);
}

function connectCdp(webSocketDebuggerUrl) {
  const ws = new WebSocket(webSocketDebuggerUrl);
  let id = 0;
  const pending = new Map();
  const listeners = new Map();

  ws.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    if (message.id && pending.has(message.id)) {
      const { resolve, reject } = pending.get(message.id);
      pending.delete(message.id);
      if (message.error) reject(new Error(message.error.message));
      else resolve(message.result);
      return;
    }

    const callbacks = listeners.get(message.method);
    if (callbacks) callbacks.forEach((callback) => callback(message.params));
  });

  const ready = new Promise((resolve, reject) => {
    ws.addEventListener("open", resolve, { once: true });
    ws.addEventListener("error", reject, { once: true });
  });

  const send = async (method, params = {}) => {
    await ready;
    const messageId = ++id;
    ws.send(JSON.stringify({ id: messageId, method, params }));
    return new Promise((resolve, reject) => {
      pending.set(messageId, { resolve, reject });
    });
  };

  const on = async (method, callback) => {
    await ready;
    const callbacks = listeners.get(method) ?? [];
    callbacks.push(callback);
    listeners.set(method, callbacks);
  };

  return { send, on, close: () => ws.close() };
}

async function captureViewport(cdp, viewport, consoleErrors) {
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

  const load = new Promise((resolve) => {
    cdp.on("Page.loadEventFired", resolve);
  });
  await cdp.send("Page.navigate", { url: targetUrl });
  await load;
  await new Promise((resolve) => setTimeout(resolve, 900));

  const metrics = await cdp.send("Runtime.evaluate", {
    returnByValue: true,
    expression: `(() => {
      const hero = document.querySelector("section");
      const h1 = document.querySelector("h1");
      const logo = document.querySelector('[aria-label="WARSOL provisional brand mark"]');
      const cta = Array.from(document.querySelectorAll("a,button")).find((node) => /기술 문의하기/.test(node.textContent || ""));
      return {
        title: document.title,
        h1: h1 ? h1.textContent.trim() : "",
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        bodyHeight: document.documentElement.scrollHeight,
        horizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
        heroBackground: hero ? getComputedStyle(hero).backgroundColor : "",
        logoVisible: !!logo && logo.getBoundingClientRect().width > 0,
        ctaVisible: !!cta && cta.getBoundingClientRect().height > 0,
        h1Clipped: h1 ? h1.getBoundingClientRect().right > document.documentElement.clientWidth + 1 : true
      };
    })()`,
  });

  const screenshot = await cdp.send("Page.captureScreenshot", {
    format: "png",
    captureBeyondViewport: false,
  });
  const screenshotPath = path.join(outputPath, `home-${viewport.name}-after.png`);
  await writeFile(screenshotPath, Buffer.from(screenshot.data, "base64"));

  return {
    viewport: viewport.name,
    width: viewport.width,
    height: viewport.height,
    screenshot: screenshotPath,
    consoleErrors: consoleErrors.splice(0),
    ...metrics.result.value,
  };
}

await mkdir(outputPath, { recursive: true });

const port = await freePort();
const profileDir = path.join(tmpdir(), `warsol-chrome-${Date.now()}`);
const chrome = spawn(chromePath(), [
  "--headless=new",
  "--disable-gpu",
  "--hide-scrollbars",
  "--no-first-run",
  "--no-default-browser-check",
  `--remote-debugging-port=${port}`,
  `--user-data-dir=${profileDir}`,
  "about:blank",
]);

let cdp;
try {
  const version = await waitForJson(`http://127.0.0.1:${port}/json/version`);
  cdp = connectCdp(version.webSocketDebuggerUrl);
  await cdp.send("Target.setDiscoverTargets", { discover: true });
  const target = await fetch(`http://127.0.0.1:${port}/json/new?${encodeURIComponent(targetUrl)}`, {
    method: "PUT",
  }).then((response) => response.json());
  cdp.close();

  cdp = connectCdp(target.webSocketDebuggerUrl);
  const consoleErrors = [];
  await cdp.send("Page.enable");
  await cdp.send("Runtime.enable");
  await cdp.send("Log.enable");
  await cdp.on("Runtime.consoleAPICalled", (params) => {
    if (params.type === "error") {
      consoleErrors.push(params.args.map((arg) => arg.value ?? arg.description ?? "").join(" "));
    }
  });
  await cdp.on("Log.entryAdded", (params) => {
    if (params.entry?.level === "error") consoleErrors.push(params.entry.text);
  });

  const results = [];
  for (const viewport of viewports) {
    results.push(await captureViewport(cdp, viewport, consoleErrors));
  }

  const report = {
    generatedAt: new Date().toISOString(),
    targetUrl,
    results,
  };
  await writeFile(new URL("../docs/dev-checkpoints/screenshots/white-theme-v3/visual-qa.json", import.meta.url), JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
} finally {
  if (cdp) cdp.close();
  chrome.kill();
  await new Promise((resolve) => setTimeout(resolve, 400));
  await rm(profileDir, { recursive: true, force: true }).catch(() => {});
}
