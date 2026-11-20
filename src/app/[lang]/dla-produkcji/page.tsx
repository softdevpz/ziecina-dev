import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { ProductionView } from "@/components/business/ProductionView";
import { bookingHref } from "@/components/business/parts";
import { forProduction } from "@/content/forProduction";
import { pageMetadata } from "@/lib/metadata";
import { getDictionary, paths } from "@/lib/site";

// Material-flow offer for Polish manufacturers: Polish only, so just /pl/dla-produkcji/ is built.
export function generateStaticParams() {
  return [{ lang: "pl" }];
}

export const metadata: Metadata = pageMetadata({
  locale: "pl",
  path: () => paths.forProduction,
  only: "pl",
  title: forProduction.seo.title,
  description: forProduction.seo.description,
});

export default function Page() {
  return (
    <>
      <Header
        locale="pl"
        dict={getDictionary("pl")}
        alternates={{ pl: paths.forProduction }}
        cta={{ href: bookingHref, label: "Umów rozmowę" }}
      />
      <main>
        <ProductionView t={forProduction} />
      </main>
    </>
  );
}
