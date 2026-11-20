import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { PartnersView } from "@/components/business/PartnersView";
import { bookingHref } from "@/components/business/parts";
import { forPartners } from "@/content/forPartners";
import { pageMetadata } from "@/lib/metadata";
import { getDictionary, paths } from "@/lib/site";

// Referral programme for Polish accountants and partners: Polish only, so just /pl/dla-partnerow/ is built.
export function generateStaticParams() {
  return [{ lang: "pl" }];
}

export const metadata: Metadata = pageMetadata({
  locale: "pl",
  path: () => paths.forPartners,
  only: "pl",
  title: forPartners.seo.title,
  description: forPartners.seo.description,
});

export default function Page() {
  return (
    <>
      <Header
        locale="pl"
        dict={getDictionary("pl")}
        alternates={{ pl: paths.forPartners }}
        cta={{ href: bookingHref, label: "Umów rozmowę" }}
      />
      <main>
        <PartnersView t={forPartners} />
      </main>
    </>
  );
}
