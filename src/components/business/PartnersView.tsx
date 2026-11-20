import type { ForPartners } from "@/content/types";
import { Section, SectionHead } from "../home/SectionHead";
import { CopyText } from "./CopyText";
import { BusinessContact, BusinessHero, Steps } from "./parts";

/** /pl/dla-partnerow/: referrals from accountants and others who serve businesses. */
export function PartnersView({ t }: { t: ForPartners }) {
  return (
    <>
      <BusinessHero t={t.hero} parent />

      <Section id="dla-kogo">
        <SectionHead eyebrow={t.who.eyebrow} heading={t.who.heading} />
        <ul className="flex flex-wrap gap-2">
          {t.who.items.map((item) => (
            <li key={item} className="rounded-full border border-line px-4 py-2 text-[15.5px]">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-[62ch] text-[17.5px]">{t.who.note}</p>
      </Section>

      <Section id="komu-polecac">
        <SectionHead eyebrow={t.signals.eyebrow} heading={t.signals.heading} intro={t.signals.intro} />
        <ul className="ticks grid max-w-[66ch] gap-2.5 text-[17.5px]">
          {t.signals.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section id="jak-to-dziala">
        <SectionHead eyebrow={t.steps.eyebrow} heading={t.steps.heading} />
        <Steps steps={t.steps.steps} />
        <div className="mt-12 max-w-[880px] rounded-[10px] bg-surface p-7">
          <span className="eyebrow text-accent">{t.commission.eyebrow}</span>
          <h3 className="mt-3 text-h4 font-bold">{t.commission.heading}</h3>
          <p className="mt-3 max-w-[66ch] text-[16.5px]">{t.commission.body}</p>
        </div>
      </Section>

      <Section id="tekst">
        <SectionHead eyebrow={t.pitch.eyebrow} heading={t.pitch.heading} intro={t.pitch.intro} />
        <CopyText text={t.pitch.text} labels={t.pitch.labels} />
      </Section>

      <BusinessContact t={t.contact} />
    </>
  );
}
