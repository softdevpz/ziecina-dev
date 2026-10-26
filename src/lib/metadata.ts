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
    authors: [{ name: "Piotr Zięcina", url: site.url }],
    // LinkedIn's Post Inspector reads the publish date from this tag.
    other: { publish_date: site.launched },
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
      images: [{ url: `/og/${locale}.png`, width: 1200, height: 630, alt: "Piotr Zięcina — Full Stack Developer" }],
    },
    twitter: { card: "summary_large_image", title, description, images: [`/og/${locale}.png`] },
    icons: { icon: "/icon.svg", apple: "/apple-touch-icon.png" },
  };
}
