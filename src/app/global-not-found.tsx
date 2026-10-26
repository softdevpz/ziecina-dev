import Link from "next/link";
import type { Metadata } from "next";
import { NamekExplosion } from "@/components/NamekExplosion";
import { themeScript } from "@/components/ThemeToggle";
import { fontVariables } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "404 — ziecina.dev",
  robots: { index: false },
};

// Shown for any unknown URL. Bilingual, because we can't know the visitor's language here.
export default function GlobalNotFound() {
  return (
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <main className="wrap grid min-h-[80vh] content-center items-center gap-10 py-16 min-[900px]:grid-cols-[minmax(0,1fr)_360px]">
          <div className="justify-self-center min-[900px]:order-last">
            <NamekExplosion />
          </div>
          <div className="grid gap-6">
            <span className="eyebrow text-accent">Error 404</span>
            <h1 className="text-hero font-extrabold tracking-[-0.035em]">This page was wiped out like Planet Namek.</h1>
            <p className="max-w-[52ch] text-lede text-muted" lang="pl">
              Ta strona zniknęła jak planeta Namek.
            </p>
            <div className="mt-2 flex flex-wrap gap-2.5">
              {/* "/" sends the visitor to /en/ or /pl/ based on the browser language. */}
              <Link href="/" className="btn btn-primary">
                Homepage · <span lang="pl">Strona główna</span> <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
