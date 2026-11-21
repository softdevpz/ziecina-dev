import Link from "next/link";
import type { ForBusiness } from "@/content/types";
import { paths } from "@/lib/site";
import { ScreenshotGallery } from "../ScreenshotGallery";
import { Section, SectionHead } from "../home/SectionHead";
import { BusinessContact, BusinessHero, Cards, Steps } from "./parts";

const moreLink = "mt-4 inline-block text-[15.5px] font-medium text-accent underline-offset-4 hover:underline";

/** /pl/dla-firm/: written for owners and managers, so no tech jargon outside the "Technicznie" note. */
export function ForBusinessView({ t }: { t: ForBusiness }) {
  const { scenario, stajnia } = t.example;
  return (
    <>
      <BusinessHero t={t.hero} />

      <Section id="problemy">
        <SectionHead eyebrow={t.problems.eyebrow} heading={t.problems.heading} />
        <Cards items={t.problems.items} />
      </Section>

      <Section id="co-robie">
        <SectionHead eyebrow={t.services.eyebrow} heading={t.services.heading} />
        <div className="grid gap-3.5 min-[980px]:grid-cols-3">
          {t.services.items.map((item, i) => (
            <div key={item.title} className="flex flex-col rounded-[10px] bg-surface p-6">
              <span className="font-mono text-[13px] text-accent">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 font-sans text-h4 font-semibold tracking-normal">{item.title}</h3>
              <p className="mt-3 text-[15.5px] text-muted">{item.body}</p>
              {item.more && (
                <Link href={paths.forProduction} className={`${moreLink} mt-auto pt-4`}>
                  {item.more} →
                </Link>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section id="na-miare">
        <div className="rounded-[10px] bg-surface p-7 min-[820px]:p-10">
          <SectionHead eyebrow={t.tailored.eyebrow} heading={t.tailored.heading} intro={t.tailored.intro} />
          <div className="grid gap-x-10 gap-y-7 min-[640px]:grid-cols-2 min-[980px]:grid-cols-3">
            {t.tailored.items.map((item) => (
              <div key={item.title} className="border-t-2 border-accent pt-4">
                <h3 className="font-sans text-[17px] font-semibold tracking-normal">{item.title}</h3>
                <p className="mt-2 text-[15.5px] text-muted">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-9 max-w-[66ch] text-[16.5px]">{t.tailored.example}</p>
        </div>
      </Section>

      <Section id="dla-kogo">
        <SectionHead eyebrow={t.audience.eyebrow} heading={t.audience.heading} intro={t.audience.intro} />
        <div className="max-w-[880px] overflow-hidden rounded-[10px] border border-line">
          <table className="w-full border-collapse text-left text-[15.5px]">
            <thead className="bg-surface">
              <tr>
                {t.audience.columns.map((col) => (
                  <th key={col} scope="col" className="px-5 py-3 font-mono text-xs font-medium tracking-[0.1em] text-muted uppercase">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.audience.rows.map((row) => (
                <tr key={row.industry} className="border-t border-line align-top">
                  <th scope="row" className="w-[38%] px-5 py-4 font-semibold">
                    {row.industry}
                  </th>
                  <td className="px-5 py-4 text-muted">{row.problem}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-8 max-w-[62ch] text-[17.5px]">{t.audience.note}</p>
      </Section>

      <Section id="przyklady">
        <SectionHead eyebrow={t.example.eyebrow} heading={t.example.heading} />
        <div className="grid max-w-[880px] gap-16">
          <div>
            <span className="eyebrow text-muted">{scenario.label}</span>
            <h3 className="mt-2 text-h3 font-bold">{scenario.title}</h3>
            <p className="mt-3 text-[17.5px]">{scenario.intro}</p>
            <ol className="mt-5 grid gap-3">
              {scenario.steps.map((step, i) => (
                <li key={step} className="flex gap-4 rounded-[10px] border border-line p-5 text-[16.5px]">
                  <span className="font-mono text-[13px] leading-[1.9] text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <Link href={paths.forProduction} className={moreLink}>
              {scenario.more} →
            </Link>
          </div>

          <div className="grid gap-10">
            <div>
              <span className="eyebrow text-muted">{stajnia.label}</span>
              <h3 className="mt-2 text-h3 font-bold">{stajnia.title}</h3>
              <dl className="mt-5 grid gap-3.5 min-[640px]:grid-cols-2">
                {[stajnia.before, stajnia.now, ...(stajnia.result ? [stajnia.result] : [])].map((row) => (
                  <div key={row.label} className="rounded-[10px] border border-line p-5">
                    <dt className="font-mono text-xs font-medium tracking-[0.1em] text-muted uppercase">{row.label}</dt>
                    <dd className="mt-2 text-[16.5px]">{row.body}</dd>
                  </div>
                ))}
              </dl>
              {stajnia.testimonial && (
                <blockquote className="mt-8 border-l-[3px] border-accent-fill py-1 pl-6">
                  <p className="font-display text-h4 leading-[1.45] font-medium tracking-[-0.01em]">
                    „{stajnia.testimonial.quote}”
                  </p>
                  <footer className="mt-3.5 text-[15px] text-muted">
                    {stajnia.testimonial.author} ·{" "}
                    <Link
                      href={`${paths.stajnia("pl")}#opinia`}
                      className="font-medium text-fg underline underline-offset-4 hover:text-accent"
                    >
                      {stajnia.testimonial.link} →
                    </Link>
                  </footer>
                </blockquote>
              )}
            </div>
            <div className="grid gap-4.5">
              <p className="text-[15px] text-muted">{stajnia.photosNote}</p>
              <ScreenshotGallery items={stajnia.photos} />
            </div>
            <div className="grid gap-4.5">
              <p className="text-[15px] text-muted">{stajnia.screensNote}</p>
              <ScreenshotGallery items={stajnia.screens} />
            </div>
            <div>
              <Link href={paths.stajnia("pl")} className="btn">
                {stajnia.caseStudy} <span className="arrow">→</span>
              </Link>
            </div>
            <details className="group rounded-[10px] border border-line px-5 py-4">
              <summary className="cursor-pointer font-mono text-[13px] font-medium tracking-[0.1em] text-muted uppercase">
                {stajnia.tech.label}
              </summary>
              <p className="mt-3 text-[15.5px] text-muted">{stajnia.tech.body}</p>
            </details>
          </div>
        </div>
      </Section>

      <Section id="wspolpraca">
        <SectionHead eyebrow={t.process.eyebrow} heading={t.process.heading} />
        <Steps steps={t.process.steps} />
      </Section>

      <Section id="cennik">
        <SectionHead eyebrow={t.pricing.eyebrow} heading={t.pricing.heading} />
        <dl className="grid gap-3.5 min-[640px]:grid-cols-2 min-[980px]:grid-cols-3">
          {t.pricing.rows.map((row) => (
            <div key={row.item} className="rounded-[10px] border border-line p-6">
              <dt className="font-mono text-xs font-medium tracking-[0.1em] text-muted uppercase">{row.item}</dt>
              <dd className="mt-3">
                <span className="block font-display text-h3 font-bold tracking-[-0.02em]">{row.price}</span>
                <span className="mt-3 block text-[15.5px] text-muted">{row.includes}</span>
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 max-w-[62ch] text-[15.5px] text-muted">{t.pricing.note}</p>
      </Section>

      <Section id="bezpieczenstwo">
        <SectionHead eyebrow={t.security.eyebrow} heading={t.security.heading} />
        <Cards items={t.security.items} />
      </Section>

      <Section id="pytania">
        <SectionHead eyebrow={t.faq.eyebrow} heading={t.faq.heading} />
        <div className="max-w-[880px] border-b border-line">
          {t.faq.items.map((item) => (
            <details key={item.q} className="group border-t border-line py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[17.5px] font-semibold [&::-webkit-details-marker]:hidden">
                {item.q}
                <span aria-hidden="true" className="font-mono text-accent transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-[66ch] text-[16.5px] text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <BusinessContact t={t.contact}>
        <p className="mt-3 text-[15px] text-muted">
          {t.contact.partners.text}{" "}
          <Link href={paths.forPartners} className="font-medium text-fg underline underline-offset-4 hover:text-accent">
            {t.contact.partners.link} →
          </Link>
        </p>
      </BusinessContact>
    </>
  );
}
