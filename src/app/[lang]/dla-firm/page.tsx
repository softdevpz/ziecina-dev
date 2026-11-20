import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { ForBusinessView } from "@/components/business/ForBusinessView";
import { bookingHref } from "@/components/business/parts";
import { forBusiness } from "@/content/forBusiness";
import { pageMetadata } from "@/lib/metadata";
import { getDictionary, paths } from "@/lib/site";

// The offer is for Polish businesses: Polish only, so just /pl/dla-firm/ is built.
export function generateStaticParams() {
  return [{ lang: "pl" }];
}

export const metadata: Metadata = pageMetadata({
  locale: "pl",
  path: () => paths.forBusiness,
  only: "pl",
  title: forBusiness.seo.title,
  description: forBusiness.seo.description,
});

export default function Page() {
  return (
    <>
      <Header
        locale="pl"
        dict={getDictionary("pl")}
        alternates={{ pl: paths.forBusiness }}
        cta={{ href: bookingHref, label: "Umów rozmowę" }}
      />
      <main>
        <ForBusinessView t={forBusiness} />
      </main>
    </>
  );
}
