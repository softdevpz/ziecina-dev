import type { Dictionary } from "@/content/types";
import { type Locale, paths, site } from "@/lib/site";

/** schema.org Person data, so search engines can link the site to the profiles. */
export function PersonJsonLd({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Piotr Zięcina",
    jobTitle: dict.hero.role,
    description: dict.meta.description,
    url: `${site.url}${paths.home(locale)}`,
    image: `${site.url}/images/og-avatar.jpg`,
    email: `mailto:${site.email}`,
    address: { "@type": "PostalAddress", addressLocality: "Wrocław", addressCountry: "PL" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "Wrocław University of Science and Technology" },
    knowsLanguage: ["pl", "en"],
    knowsAbout: ["React", "Next.js", "Vue.js", "TypeScript", "Node.js", "NestJS", "PostgreSQL", "MySQL", "AWS", "Docker"],
    sameAs: [site.github, site.linkedin],
  };
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here: all values are our own constants.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
