import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StajniaCaseStudy } from "@/components/case-study/StajniaCaseStudy";
import { Header } from "@/components/Header";
import { pageMetadata } from "@/lib/metadata";
import { getDictionary, hasLocale, paths } from "@/lib/site";

type Props = PageProps<"/[lang]/projects/stajnia-lauden">;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = getDictionary(lang);
  return pageMetadata({
    locale: lang,
    path: paths.stajnia,
    title: dict.meta.caseStudyTitle,
    description: dict.meta.caseStudyDescription,
  });
}

export default async function StajniaPage({ params }: Props) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <Header locale={lang} dict={dict} alternates={{ en: paths.stajnia("en"), pl: paths.stajnia("pl") }} />
      <main>
        <StajniaCaseStudy dict={dict} locale={lang} />
      </main>
    </>
  );
}
