import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { About } from "@/components/home/About";
import { Contact } from "@/components/home/Contact";
import { Experience } from "@/components/home/Experience";
import { Hero } from "@/components/home/Hero";
import { Projects } from "@/components/home/Projects";
import { Skills } from "@/components/home/Skills";
import { pageMetadata } from "@/lib/metadata";
import { getDictionary, hasLocale, paths } from "@/lib/site";

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = getDictionary(lang);
  return pageMetadata({ locale: lang, path: paths.home, title: dict.meta.title, description: dict.meta.description });
}

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <Header locale={lang} dict={dict} alternates={{ en: paths.home("en"), pl: paths.home("pl") }} />
      <main>
        <Hero dict={dict} />
        <Projects dict={dict} locale={lang} />
        <Experience dict={dict} />
        <Skills dict={dict} />
        <About dict={dict} />
        <Contact dict={dict} />
      </main>
    </>
  );
}
