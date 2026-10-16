# ziecina.dev — personal portfolio site

Portfolio site for Piotr Zięcina (Full Stack Developer, job hunting), at https://ziecina.dev.
Planning started 2026-10-16 in a Claude Code session opened in the home folder (`~`),
session id `79ada3ba-86d6-4d63-98ed-a04536124c38`.

## Decisions made so far
- **Bilingual PL + EN**: EN at `/en` (default), PL at `/pl`, with a language switcher.
- **Stack:** Next.js (static export) + TypeScript + Tailwind CSS, matching the CV.
- **Hosting:** Cloudflare Pages (recommended; the domain's DNS is already on Cloudflare). Vercel is the fallback.
- **DNS:** add only records for `ziecina.dev` / `www`. NEVER touch MX/SPF/DKIM/DMARC, because piotr@ziecina.dev depends on them.
- **Sections:** hero → projects (case studies) → experience → skills → about → contact. No blog, no skill bars.
- **Stajnia Lauden** (~/Projects/stadnina-app): may be shown publicly, but the **owner must approve the content before publishing**. The repo is **private** (kept as a product), so never link to the code. Screenshots use demo data only.
  - Linking https://stajnialauden.pl is confirmed (2026-10-16).
  - Testimonial: lorem ipsum placeholder until the owner sends the real one.
  - Screenshots are approved (task board on tablet, ordering on phone, feed-room screen, billing). Piotr is first reviewing the layout of elements in the app; screenshots come after that.
- **Build Budget** is public: github.com/softdevpz/build-budget-app, demo at build-budget-app-web.vercel.app.
- **The site's repo is public** (it's a business card, not a product). The footer links to it. Never commit anything private to it (Stajnia Lauden code or real data).
- **Visual direction:** minimal and typographic, one accent colour: orange (inspired by Goku's gi; it isn't meant to read as anime). Light theme by default, with a dark-mode toggle (the user personally prefers dark, so polish it just as much).
- **Dragon Ball:** subtle nods only, never the main theme, and NO official artwork, logos or characters (copyright). Ideas for stage 3: an easter egg (Konami code or 7 clicks on the logo → "power level: over 9000" aura), a themed 404 page, one sentence about the hobby in About.
- The user makes all git commits themselves. Claude edits files and suggests a commit message.

## Files
- **Copy lives in `src/content/en.ts` and `pl.ts`** (typed by `src/content/types.ts`, so a missing translation fails the build). Edit text there. `content/*.md` is the archived v1 draft and is no longer kept in sync.
- `content/en.md`, `content/pl.md`: v1 copy draft (historical). v1 approved 2026-10-16. Remaining placeholders (testimonial, screenshots) are marked `[TODO: …]`. The phone number is NOT shown on the site; it's in the CV only.
- `assets/photo/`: `original.jpg` (main photo), `portrait-4x5.jpg` (hero), `avatar-square.jpg` (avatar/OG). `alt-mirrored.png` is too low-res, don't use it. `portrait-4x5-cutout.png` is the hero photo with the background removed (macOS Vision), shown on a warm-grey token background (`--photo-bg`) that changes with the theme.
- `design/mockup.src.html`: source of the mockup (with a `__PHOTO__` placeholder). `design/mockup.html` is the build with the photo inlined, published as https://claude.ai/artifact/7c57ZpuG3sgGEWSoRkPafn (private). Mockup v1, 2026-10-16: fonts Bricolage Grotesque + Instrument Sans + JetBrains Mono. Hero CTAs: View projects + email (Download CV lives only in the header).
- Links: github.com/softdevpz · linkedin.com/in/piotr-ziecina
- CV PDF: `~/Desktop/Piotr Ziecina CV.pdf` (the latest version may be elsewhere; ask the user).

## Code (stage 3, started 2026-10-16)
- **Next.js 16.4** (App Router, Turbopack) + React 19 + Tailwind v4 + TypeScript. This is newer than the model's training data: read `node_modules/next/dist/docs/` before using a Next API.
- `next.config.ts`: `output: "export"`, `trailingSlash`, `experimental.globalNotFound`, `turbopack.root` (a stray `~/package-lock.json` exists).
- Routes: `src/app/[lang]/` (root layout with `<html lang>`, home page, `projects/stajnia-lauden/`), `src/app/(root)/page.tsx` (`/` → JS redirect to /pl/ or /en/ by browser language), `src/app/global-not-found.tsx` (bilingual "Namek" 404).
- `src/lib/site.ts`: locales, links (email, GitHub, LinkedIn, CV path), paths. `src/lib/metadata.ts`: canonical + hreflang + OG.
- Design tokens are CSS variables in `src/app/globals.css`, mapped to Tailwind colours (`bg-bg`, `text-muted`, `text-accent`, `bg-accent-fill`…) and the type ladder (`text-hero/h2/h3/h4/lede`).
- Theme: inline `themeScript` in `<head>` (no flash) + `ThemeToggle` (localStorage `theme`).
- Easter egg `PowerLevel`: Konami code or 7 quick clicks on the logo → orange aura on the portrait + "Power level: over 9000!".
- Commands: `npm run dev`, `npm run build` (→ `out/`), `npm run preview` (serves `out/` on :4173), `npm run lint`.
- Public assets: `public/images/portrait.png` (cutout), `og-avatar.jpg`, `icon.svg`, `public/cv/Piotr-Ziecina-CV.pdf` (copied from the Desktop; confirm it's the latest).
- Open TODOs in code: `site.sourceRepo` should point to the site's own GitHub repo once it exists; real testimonial; screenshots (device mocks are placeholders); the portrait PNG is 450 KB (optimise in stage 5).

## Plan
0. Decisions ✅ · 1. Copy ✅ (v1 approved) · 2. Visual mockup ✅ (further changes happen in code) · 3. Implementation (v1 built, builds clean) ·
4. Deploy + DNS · 5. SEO/OG/Lighthouse/analytics · 6. Link the site from the CV, LinkedIn and GitHub profile
