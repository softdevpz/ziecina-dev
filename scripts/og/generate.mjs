// Renders scripts/og/template.html to public/og/en.png and pl.png (1200×630) with headless Chrome.
// Usage: npm run og        (set CHROME_PATH if Chrome isn't in the default macOS location)
import { execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "../..");
const chrome = process.env.CHROME_PATH ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const template = pathToFileURL(join(here, "template.html")).href;
const outDir = join(root, "public/og");
mkdirSync(outDir, { recursive: true });

for (const lang of ["en", "pl"]) {
  const profile = mkdtempSync(join(tmpdir(), "og-chrome-"));
  try {
    execFileSync(chrome, [
      "--headless=new",
      "--disable-gpu",
      "--hide-scrollbars",
      "--allow-file-access-from-files",
      `--user-data-dir=${profile}`,
      "--window-size=1200,630",
      "--virtual-time-budget=6000",
      `--screenshot=${join(outDir, `${lang}.png`)}`,
      `${template}?lang=${lang}`,
    ], { stdio: "ignore" });
  } finally {
    rmSync(profile, { recursive: true, force: true });
  }
  console.log(`public/og/${lang}.png`);
}
