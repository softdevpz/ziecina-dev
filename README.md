# ziecina.dev

Source of my portfolio site, **[ziecina.dev](https://ziecina.dev)**: who I am, what I've built, and how to reach me. Available in English and Polish.

## Stack

- **Next.js 16** (App Router), exported as a fully static site (`output: "export"`)
- **React 19**, **TypeScript**, **Tailwind CSS v4**
- Hosted on **Cloudflare Workers** as static assets (`wrangler.jsonc`, no server code)

## How it works

- **Two languages, one layout.** Every page lives under `src/app/[lang]/` and is pre-rendered for `/en/` and `/pl/`. The copy is in `src/content/en.ts` and `pl.ts`, both typed by `src/content/types.ts`, so a missing translation fails the build.
- **Language on first visit.** A static host can't read `Accept-Language`, so `/` uses a tiny inline script to send Polish browsers to `/pl/` and everyone else to `/en/`.
- **Dark mode without a flash.** An inline script in `<head>` applies the saved theme before the first paint. Colours are CSS variables mapped to Tailwind tokens, so components never branch on the theme.
- **SEO basics.** Canonical URLs, `hreflang` alternates and Open Graph tags are generated per page and language.
- **No tracking, no cookies, no client-side data fetching.** Only the theme toggle, copy-to-clipboard and one easter egg run in the browser.

## Running it

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # static site in out/
npm run preview   # serve out/ on http://127.0.0.1:4173
npm run lint
npm run cf:dev    # build and serve on the Cloudflare runtime locally
```

## Structure

```
src/
  app/
    [lang]/                       root layout, home page, projects/stajnia-lauden/
    (root)/page.tsx               "/" → /en/ or /pl/
    global-not-found.tsx          404 page
    globals.css                   design tokens + Tailwind theme
  components/                     header, footer, theme toggle, home and case-study sections
  content/                        en.ts, pl.ts, types.ts
  lib/                            site config, metadata, fonts
design/                           the HTML mockup the site was built from
```

## Contact

piotr@ziecina.dev · [LinkedIn](https://www.linkedin.com/in/piotr-ziecina) · [GitHub](https://github.com/softdevpz)
