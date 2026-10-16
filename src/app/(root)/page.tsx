import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Piotr Zięcina — Full Stack Developer",
  alternates: { canonical: "/en/", languages: { en: "/en/", pl: "/pl/", "x-default": "/en/" } },
  robots: { index: false, follow: true },
};

// A static site has no server to read Accept-Language, so the browser picks:
// Polish browsers go to /pl/, everyone else to /en/.
const redirect = `try{var l=(navigator.languages&&navigator.languages[0])||navigator.language||"";location.replace(/^pl\\b/i.test(l)?"/pl/":"/en/")}catch(e){location.replace("/en/")}`;

export default function RootPage() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: redirect }} />
      <noscript>
        <meta httpEquiv="refresh" content="0; url=/en/" />
      </noscript>
      <main className="wrap py-20">
        <p>
          <Link href="/en/" className="underline">
            English
          </Link>{" "}
          ·{" "}
          <Link href="/pl/" className="underline">
            Polski
          </Link>
        </p>
      </main>
    </>
  );
}
