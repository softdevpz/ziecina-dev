import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { bookingHref, ForBusinessView } from "@/components/business/ForBusinessView";
import { forBusiness } from "@/content/forBusiness";
import { pageMetadata } from "@/lib/metadata";
import { getDictionary, paths } from "@/lib/site";

// The offer is for Polish businesses, so only /pl/dla-firm/ is built (no /en/ twin).
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

export default function ForBusinessPage() {
  return (
    <>
      <Header
        locale="pl"
        dict={getDictionary("pl")}
        alternates={{ en: paths.home("en"), pl: paths.forBusiness }}
        cta={{ href: bookingHref, label: "Umów demo" }}
      />
      <main>
        <ForBusinessView t={forBusiness} />
      </main>
    </>
  );
}
