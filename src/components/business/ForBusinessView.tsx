import Link from "next/link";
import type { ForBusiness } from "@/content/types";
import { paths, site } from "@/lib/site";
import { ScreenshotGallery } from "../ScreenshotGallery";
import { Section, SectionHead } from "../home/SectionHead";

/** Google Calendar booking page, or an e-mail until it is set up. */
export const bookingHref =
  site.booking || `mailto:${site.email}?subject=${encodeURIComponent("Demo systemu dla firmy")}`;

const bookingProps = site.booking ? { target: "_blank", rel: "noopener noreferrer" } : {};

/** The business page: written for owners of small firms, so no tech jargon outside the "Technicznie" note. */
export function ForBusinessView({ t }: { t: ForBusiness }) {
  return (
    <>
      <section>
        <div className="wrap py-12 pb-18 min-[820px]:py-20 min-[820px]:pb-24">
          <span className="eyebrow text-accent">{t.hero.eyebrow}</span>
          <h1 className="mt-4 max-w-[22ch] text-[clamp(36px,5vw,60px)] leading-[1.08] font-extrabold tracking-[-0.03em]">
            {t.hero.heading}
          </h1>
          <p className="mt-6 max-w-[62ch] text-lede text-muted">{t.hero.lede}</p>
          <div className="mt-9 flex flex-wrap items-center gap-2.5">
            <a href={bookingHref} {...bookingProps} className="btn btn-primary">
              {t.hero.book} <span className="arrow">→</span>
            </a>
            <a href="#przyklad" className="btn">
              {t.hero.example}
            </a>
          </div>
          <p className="mt-4.5 text-[15px] text-muted">
            {t.hero.call}{" "}
            <a href={site.phone.href} className="font-medium text-fg underline underline-offset-4 hover:text-accent">
              {site.phone.label}
            </a>
          </p>
        </div>
      </section>

      <Section id="problemy">
        <SectionHead eyebrow={t.problems.eyebrow} heading={t.problems.heading} intro={t.problems.intro} />
        <div className="grid gap-3.5 min-[640px]:grid-cols-2 min-[980px]:grid-cols-3">
          {t.problems.items.map((item) => (
            <div key={item.title} className="rounded-[10px] border border-line p-5">
              <h3 className="font-sans text-[17px] font-semibold tracking-normal">{item.title}</h3>
              <p className="mt-2 text-[15.5px] text-muted">{item.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-[10px] bg-surface p-7">
          <span className="eyebrow text-accent">{t.problems.outcome.label}</span>
          <p className="mt-3 max-w-[66ch] text-[17.5px]">{t.problems.outcome.body}</p>
        </div>
      </Section>

      <Section id="dla-kogo">
        <SectionHead eyebrow={t.audience.eyebrow} heading={t.audience.heading} intro={t.audience.intro} />
        <ul className="flex flex-wrap gap-2">
          {t.audience.items.map((item) => (
            <li key={item} className="rounded-full border border-line px-4 py-2 text-[15.5px]">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-[62ch] text-[17.5px]">{t.audience.note}</p>
      </Section>

      <Section id="przyklad">
        <SectionHead eyebrow={t.example.eyebrow} heading={t.example.heading} />
        <div className="grid max-w-[880px] gap-12">
          <div>
            <h3 className="text-h4 font-bold">{t.example.before.label}</h3>
            <p className="mt-3 max-w-[66ch] text-[17.5px]">{t.example.before.body}</p>
          </div>
          <div>
            <h3 className="text-h4 font-bold">{t.example.changesLabel}</h3>
            <div className="mt-4 grid gap-3.5 min-[640px]:grid-cols-2">
              {t.example.changes.map((item) => (
                <div key={item.title} className="rounded-[10px] border border-line p-5">
                  <h4 className="font-sans text-[17px] font-semibold tracking-normal">{item.title}</h4>
                  <p className="mt-2 text-[15.5px] text-muted">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4.5">
            <p className="text-[15px] text-muted">{t.example.screensNote}</p>
            <ScreenshotGallery items={t.example.screens} />
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link href={paths.stajnia("pl")} className="btn">
              {t.example.caseStudy} <span className="arrow">→</span>
            </Link>
          </div>
          <details className="group rounded-[10px] border border-line px-5 py-4">
            <summary className="cursor-pointer font-mono text-[13px] font-medium tracking-[0.1em] text-muted uppercase">
              {t.example.tech.label}
            </summary>
            <p className="mt-3 text-[15.5px] text-muted">{t.example.tech.body}</p>
          </details>
        </div>
      </Section>

      <Section id="wspolpraca">
        <SectionHead eyebrow={t.process.eyebrow} heading={t.process.heading} />
        <ol className="grid gap-x-10 gap-y-8 min-[640px]:grid-cols-2 min-[980px]:grid-cols-3">
          {t.process.steps.map((step, i) => (
            <li key={step.title} className="border-t border-line pt-5">
              <span className="font-mono text-[13px] text-accent">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 font-sans text-[17px] font-semibold tracking-normal">{step.title}</h3>
              <p className="mt-2 text-[15.5px] text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="cennik">
        <SectionHead eyebrow={t.pricing.eyebrow} heading={t.pricing.heading} />
        <dl className="grid gap-3.5 min-[820px]:grid-cols-3">
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

      <Section id="kontakt">
        <span className="eyebrow text-accent">{t.contact.eyebrow}</span>
        <h2 className="mt-3 max-w-[18ch] text-[clamp(36px,5vw,60px)] leading-[1.08] font-extrabold tracking-[-0.03em]">
          {t.contact.heading}
        </h2>
        <p className="mt-4.5 max-w-[52ch] text-lede text-muted">{t.contact.lead}</p>
        <div className="mt-8 flex flex-wrap items-center gap-2.5">
          <a href={bookingHref} {...bookingProps} className="btn btn-primary">
            {t.contact.book} <span className="arrow">→</span>
          </a>
          <a href={site.phone.href} className="btn">
            {t.contact.call}: {site.phone.label}
          </a>
          <a href={`mailto:${site.email}`} className="btn">
            {t.contact.write}: {site.email}
          </a>
        </div>
        <p className="mt-7 text-[15px] text-muted">{t.contact.area}</p>
      </Section>
    </>
  );
}
