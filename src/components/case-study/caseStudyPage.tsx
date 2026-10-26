import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { CaseStudySlug } from "@/content/types";
import { pageMetadata } from "@/lib/metadata";
import { getDictionary, hasLocale, paths } from "@/lib/site";
import { Header } from "../Header";
import { CaseStudyView } from "./CaseStudyView";

type Params = { params: Promise<{ lang: string }> };

/** Metadata and page component for one case study route under app/[lang]/projects/. */
export function caseStudyRoute(slug: CaseStudySlug) {
  const path = (locale: "en" | "pl") => paths.caseStudy(slug, locale);

  async function generateMetadata({ params }: Params): Promise<Metadata> {
    const { lang } = await params;
    if (!hasLocale(lang)) return {};
    const { seo } = getDictionary(lang).caseStudies[slug];
    return pageMetadata({ locale: lang, path, title: seo.title, description: seo.description });
  }

  async function Page({ params }: Params) {
    const { lang } = await params;
    if (!hasLocale(lang)) notFound();
    const dict = getDictionary(lang);
    return (
      <>
        <Header locale={lang} dict={dict} alternates={{ en: path("en"), pl: path("pl") }} />
        <main>
          <CaseStudyView c={dict.caseStudies[slug]} dict={dict} locale={lang} />
        </main>
      </>
    );
  }

  return { generateMetadata, Page };
}
