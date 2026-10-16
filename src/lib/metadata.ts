import type { Metadata } from "next";
import { type Locale, locales, site } from "./site";

/** Canonical URL, hreflang alternates and Open Graph for one page in one language. */
export function pageMetadata({
  locale,
  path,
  title,
  description,
}: {
  locale: Locale;
  path: (l: Locale) => string;
  title: string;
  description: string;
}): Metadata {
  const languages = Object.fromEntries(locales.map((l) => [l, path(l)]));
  return {
    metadataBase: new URL(site.url),
    title,
    description,
    alternates: {
      canonical: path(locale),
      languages: { ...languages, "x-default": path("en") },
    },
    openGraph: {
      type: "website",
      url: path(locale),
      siteName: "ziecina.dev",
      title,
      description,
      locale: locale === "pl" ? "pl_PL" : "en_US",
      images: [{ url: "/images/og-avatar.jpg", width: 600, height: 600, alt: "Piotr Zięcina" }],
    },
    twitter: { card: "summary", title, description, images: ["/images/og-avatar.jpg"] },
    icons: { icon: "/icon.svg" },
  };
}
