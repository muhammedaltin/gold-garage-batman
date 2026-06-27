import { spawn } from "node:child_process";
import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const BASE_URL = process.env.BASE_URL || "/";
const routes = [
  { route: "/", file: "index.html" },
  { route: "/Batman-ppf-kaplama.html", file: "Batman-ppf-kaplama.html" },
  { route: "/Batman-boyasiz-gocuk-duzeltme.html", file: "Batman-boyasiz-gocuk-duzeltme.html" },
  { route: "/sitemap/xml", file: "sitemap.xml" },
];
const outputDir = path.resolve(rootDir, "dist", "static");
const clientDir = path.resolve(rootDir, "dist", "client");
const ssrBundlePath = path.resolve(
  rootDir,
  "node_modules",
  ".nitro",
  "vite",
  "services",
  "ssr",
  "index.js",
);

function runViteBuild(): Promise<void> {
  return new Promise((resolve, reject) => {
    const child = spawn("bun", ["x", "vite", "build"], {
      cwd: rootDir,
      stdio: "inherit",
      env: { ...process.env, BASE_URL },
    });

    child.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`vite build exited with code ${code}`));
      }
    });

    child.on("error", reject);
  });
}

async function buildStatic() {
  // 1. Clean previous output
  await rm(outputDir, { recursive: true, force: true });

  // 2. Run vite build (TanStack Start + Lovable config) to produce client assets and SSR bundle
  await runViteBuild();

  // 3. Copy client assets (images, JS, CSS, fonts) to the static output folder
  await mkdir(outputDir, { recursive: true });
  await cp(clientDir, outputDir, { recursive: true, force: true });

  // 4. Prerender each route using the generated SSR bundle
  const handler = (await import(ssrBundlePath)).default;

  for (const { route, file } of routes) {
    const url = new URL(route, "http://localhost");
    url.pathname = path.join(BASE_URL, route.replace(/^\//, ""));

    const request = new Request(url.toString());
    const response = await handler.fetch(request, {}, {});

    if (!response.ok) {
      throw new Error(`Failed to render ${route}: ${response.status} ${response.statusText}`);
    }

    const body = await response.text();

    const filePath = path.join(outputDir, file);
    await writeFile(filePath, body, "utf-8");
    console.log(`✓ Prerendered ${route} -> ${filePath}`);
  }

  console.log(`\nStatic site generated in ${outputDir}`);
}

buildStatic().catch((error) => {
  console.error(error);
  process.exit(1);
});
