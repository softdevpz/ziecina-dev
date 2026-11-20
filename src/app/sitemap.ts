import type { MetadataRoute } from "next";
import { locales, paths, site } from "@/lib/site";

// Pre-rendered to out/sitemap.xml. Each page lists its other-language version;
// the business pages exist in Polish only.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: paths.home, priority: 1 },
    { path: paths.stajnia, priority: 0.8 },
    { path: paths.buildBudget, priority: 0.8 },
  ];
  const translated: MetadataRoute.Sitemap = pages.flatMap(({ path, priority }) =>
    locales.map((locale) => ({
      url: `${site.url}${path(locale)}`,
      changeFrequency: "monthly" as const,
      priority,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, `${site.url}${path(l)}`])),
      },
    })),
  );
  const business: MetadataRoute.Sitemap = [
    { url: `${site.url}${paths.forBusiness}`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}${paths.forProduction}`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}${paths.forPartners}`, changeFrequency: "monthly", priority: 0.5 },
  ];
  return [...translated, ...business];
}
