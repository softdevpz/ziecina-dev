import Link from "next/link";
import type { ForProduction } from "@/content/types";
import { paths } from "@/lib/site";
import { Section, SectionHead } from "../home/SectionHead";
import { BusinessContact, BusinessHero, Cards } from "./parts";

/** /pl/dla-produkcji/: material flow for manufacturers. */
export function ProductionView({ t }: { t: ForProduction }) {
  return (
    <>
      <BusinessHero t={t.hero} parent />

      <Section id="jak-to-dziala">
        <SectionHead eyebrow={t.flow.eyebrow} heading={t.flow.heading} intro={t.flow.intro} />
        <ol className="grid gap-3.5 min-[640px]:grid-cols-2 min-[980px]:grid-cols-4">
          {t.flow.steps.map((step, i) => (
            <li key={step.title} className="relative rounded-[10px] border border-line p-5">
              <span className="font-mono text-[13px] text-accent">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 font-sans text-[17px] font-semibold tracking-normal">{step.title}</h3>
              <p className="mt-2 text-[15.5px] text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="partie">
        <div className="max-w-[880px] rounded-[10px] bg-surface p-7 min-[820px]:p-10">
          <span className="eyebrow text-accent">{t.traceability.eyebrow}</span>
          <h2 className="mt-3 text-h2 font-bold">{t.traceability.heading}</h2>
          <p className="mt-4 max-w-[62ch] text-lede text-muted">{t.traceability.body}</p>
        </div>
      </Section>

      <Section id="hala">
        <SectionHead eyebrow={t.floor.eyebrow} heading={t.floor.heading} />
        <Cards items={t.floor.items} cols={2} />
      </Section>

      <Section id="bez-rewolucji">
        <SectionHead eyebrow={t.fit.eyebrow} heading={t.fit.heading} />
        <Cards items={t.fit.items} cols={2} />
        <p className="mt-8 max-w-[62ch] text-[17.5px]">
          {t.more.text}{" "}
          <Link href={paths.forBusiness} className="font-medium text-accent underline-offset-4 hover:underline">
            {t.more.link} →
          </Link>
        </p>
      </Section>

      <BusinessContact t={t.contact} />
    </>
  );
}
