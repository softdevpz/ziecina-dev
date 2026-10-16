import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { PowerLevel } from "@/components/PowerLevel";
import { themeScript } from "@/components/ThemeToggle";
import { fontVariables } from "@/lib/fonts";
import { getDictionary, hasLocale, locales } from "@/lib/site";
import "../globals.css";

// Only /en and /pl exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LangLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <html lang={lang} className={fontVariables} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        {children}
        <Footer dict={dict} />
        <PowerLevel message={dict.easterEgg.toast} />
      </body>
    </html>
  );
}
