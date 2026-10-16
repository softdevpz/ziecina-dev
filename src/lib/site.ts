import { en } from "@/content/en";
import { pl } from "@/content/pl";
import type { Dictionary } from "@/content/types";

export const locales = ["en", "pl"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

const dictionaries: Record<Locale, Dictionary> = { en, pl };

export const hasLocale = (value: string): value is Locale => (locales as readonly string[]).includes(value);
export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];
export const otherLocale = (locale: Locale): Locale => (locale === "en" ? "pl" : "en");

export const site = {
  url: "https://ziecina.dev",
  email: "piotr@ziecina.dev",
  github: "https://github.com/softdevpz",
  linkedin: "https://www.linkedin.com/in/piotr-ziecina",
  sourceRepo: "https://github.com/softdevpz/ziecina-dev",
  cv: "/cv/Piotr-Ziecina-CV.pdf",
  stajnia: "https://stajnialauden.pl",
  buildBudgetDemo: "https://build-budget-app-web.vercel.app",
  buildBudgetRepo: "https://github.com/softdevpz/build-budget-app",
} as const;

/** Site-relative paths, with the trailing slash the static export uses. */
export const paths = {
  home: (locale: Locale) => `/${locale}/`,
  stajnia: (locale: Locale) => `/${locale}/projects/stajnia-lauden/`,
};
