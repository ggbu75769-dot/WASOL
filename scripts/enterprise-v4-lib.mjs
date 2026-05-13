import { spawn, spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdir, rm } from "node:fs/promises";
import { createServer } from "node:net";
import path from "node:path";
import { tmpdir } from "node:os";
import { fileURLToPath } from "node:url";

export const repoRoot = fileURLToPath(new URL("../", import.meta.url));

export const routes = [
  { name: "home", path: "/" },
  { name: "company", path: "/company" },
  { name: "technology", path: "/technology" },
  { name: "products", path: "/products" },
  { name: "rnd", path: "/rnd" },
  { name: "contact", path: "/contact" },
];

export const viewports = [
  { name: "mobile-360", width: 360, height: 1200 },
  { name: "mobile-390", width: 390, height: 1200 },
  { name: "tablet-768", width: 768, height: 1200 },
  { name: "desktop-1440", width: 1440, height: 1100 },
  { name: "large-1920", width: 1920, height: 1200 },
];

export function projectPath(...segments) {
  return path.join(repoRoot, ...segments);
}

export async function ensureParentDir(filePath) {
  await mkdir(path.dirname(filePath), { recursive: true });
}

export function chromePath() {
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

export function freePort() {
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

export async function waitForHttp(url, attempts = 100) {
  for (let attempt = 0; attempt < attempts; attempt += 1) {
    try {
      const response = await fetch(url);
      if (response.ok) return response;
    } catch {
      // Server is still booting.
    }
    await new Promise((resolve) => setTimeout(resolve, 180));
  }
  throw new Error(`Timed out waiting for ${url}`);
}

export async function withNextServer(callback) {
  if (process.env.WARSOL_TARGET_URL) {
    const baseUrl = process.env.WARSOL_TARGET_URL.replace(/\/$/, "");
    await waitForHttp(`${baseUrl}/`);
    return callback(baseUrl);
  }

  const port = await freePort();
  const command = process.platform === "win32" ? "cmd.exe" : "npm";
  const args =
    process.platform === "win32"
      ? ["/d", "/s", "/c", `npm run start -- -H 127.0.0.1 -p ${port}`]
      : ["run", "start", "--", "-H", "127.0.0.1", "-p", String(port)];
  const child = spawn(
    command,
    args,
    {
      cwd: repoRoot,
      stdio: ["ignore", "pipe", "pipe"],
      windowsHide: true,
    },
  );

  let output = "";
  child.stdout.on("data", (chunk) => {
    output += chunk.toString();
  });
  child.stderr.on("data", (chunk) => {
    output += chunk.toString();
  });

  const baseUrl = `http://127.0.0.1:${port}`;

  try {
    await waitForHttp(`${baseUrl}/`);
    return await callback(baseUrl);
  } catch (error) {
    error.message = `${error.message}\n\nnext start output:\n${output.slice(-4000)}`;
    throw error;
  } finally {
    killProcessTree(child);
    await new Promise((resolve) => setTimeout(resolve, 350));
  }
}

export async function waitForJson(url, attempts = 80) {
  for (let attempt = 0; attempt < attempts; attempt += 1) {
    try {
      const response = await fetch(url);
      if (response.ok) return response.json();
    } catch {
      // Browser is still booting.
    }
    await new Promise((resolve) => setTimeout(resolve, 150));
  }
  throw new Error(`Timed out waiting for ${url}`);
}

export function connectCdp(webSocketDebuggerUrl) {
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

export async function withChrome(callback) {
  const port = await freePort();
  const profileDir = path.join(tmpdir(), `warsol-enterprise-v4-chrome-${Date.now()}`);
  const chrome = spawn(chromePath(), [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    "--no-first-run",
    "--no-default-browser-check",
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${profileDir}`,
    "about:blank",
  ], { windowsHide: true });

  let browserCdp;
  let pageCdp;

  try {
    const version = await waitForJson(`http://127.0.0.1:${port}/json/version`);
    browserCdp = connectCdp(version.webSocketDebuggerUrl);
    return await callback({
      openPage: async (url) => {
        if (pageCdp) pageCdp.close();
        const target = await fetch(`http://127.0.0.1:${port}/json/new?${encodeURIComponent(url)}`, {
          method: "PUT",
        }).then((response) => response.json());
        pageCdp = connectCdp(target.webSocketDebuggerUrl);
        return pageCdp;
      },
    });
  } finally {
    if (pageCdp) pageCdp.close();
    if (browserCdp) browserCdp.close();
    killProcessTree(chrome);
    await new Promise((resolve) => setTimeout(resolve, 400));
    await rm(profileDir, { recursive: true, force: true }).catch(() => {});
  }
}

function killProcessTree(child) {
  if (!child.pid) return;
  if (process.platform === "win32") {
    spawnSync("taskkill", ["/PID", String(child.pid), "/T", "/F"], {
      stdio: "ignore",
      windowsHide: true,
    });
    return;
  }
  child.kill();
}
