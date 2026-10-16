import Link from "next/link";
import type { Dictionary } from "@/content/types";
import { type Locale, paths, site } from "@/lib/site";
import { Rich } from "../Rich";

function CsSection({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-4.5">
      <h2 className="text-h3 font-bold">{heading}</h2>
      {children}
    </section>
  );
}

function Placeholder({ text }: { text: string }) {
  return (
    <span className="mt-3 inline-block w-fit rounded-md border border-dashed border-accent px-2 py-[3px] font-mono text-[11.5px] font-medium text-accent">
      {text}
    </span>
  );
}

export function StajniaCaseStudy({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const s = dict.projects.stajnia;
  const c = dict.caseStudy;

  return (
    <>
      <section>
        <div className="wrap py-12 pb-16">
          <Link href={`${paths.home(locale)}#projects`} className="inline-flex items-center gap-2 text-[15px] text-muted hover:text-fg">
            ← {c.back}
          </Link>
          <div className="mt-7 flex flex-wrap gap-1.5">
            <span className="chip chip-live">{s.labels.production}</span>
            <span className="chip">{s.labels.client}</span>
            <span className="chip">{s.labels.period}</span>
          </div>
          <h1 className="mt-6.5 text-hero font-extrabold tracking-[-0.03em]">{s.name}</h1>
          <p className="mt-4 max-w-[48ch] text-lede">{s.tagline}</p>
          <dl className="mt-10 grid grid-cols-2 gap-y-2 border-t border-line min-[820px]:grid-cols-4">
            {c.meta.map((m) => (
              <div key={m.label} className="pt-4.5 pr-4.5">
                <dt className="font-mono text-xs font-medium tracking-[0.1em] text-muted uppercase">{m.label}</dt>
                <dd className="mt-1.5 text-[15.5px]">{m.value}</dd>
              </div>
            ))}
            <div className="pt-4.5 pr-4.5">
              <dt className="font-mono text-xs font-medium tracking-[0.1em] text-muted uppercase">{c.linksLabel}</dt>
              <dd className="mt-1.5 text-[15.5px]">
                <a href={site.stajnia} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-accent">
                  stajnialauden.pl ↗
                </a>
                <br />
                <span className="text-muted">{c.codePrivate}</span>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="wrap grid max-w-[880px] gap-16 py-16 min-[820px]:py-20">
          <CsSection heading={c.problem.heading}>
            <p className="max-w-[66ch] text-[17.5px]">{c.problem.body}</p>
          </CsSection>

          <CsSection heading={c.role.heading}>
            <p className="max-w-[66ch] text-[17.5px]">{c.role.body}</p>
          </CsSection>

          <CsSection heading={c.built.heading}>
            <div className="grid gap-3.5 min-[640px]:grid-cols-2">
              {c.built.items.map((item) => (
                <div key={item.title} className="rounded-[10px] border border-line p-5">
                  <h3 className="font-sans text-[17px] font-semibold tracking-normal">{item.title}</h3>
                  <p className="mt-2 text-[15.5px] text-muted">{item.body}</p>
                </div>
              ))}
            </div>
          </CsSection>

          <CsSection heading={c.users.heading}>
            <p className="max-w-[66ch] text-[17.5px]">{c.users.body}</p>
            <div className="mt-2 grid gap-3.5 min-[640px]:grid-cols-3">
              {c.users.rules.map((r) => (
                <div key={r.label} className="rounded-[10px] bg-surface p-4.5">
                  <strong className="block font-display text-[42px] leading-none font-extrabold text-accent tabular-nums">
                    {r.value}
                  </strong>
                  <span className="mt-2 block text-[14.5px] text-muted">{r.label}</span>
                </div>
              ))}
            </div>
          </CsSection>

          <CsSection heading={c.engineering.heading}>
            <ul className="ticks text-[17.5px]">
              {c.engineering.items.map((item) => (
                <li key={item}>
                  <Rich text={item} />
                </li>
              ))}
            </ul>
          </CsSection>

          <CsSection heading={c.decision.heading}>
            <div className="grid gap-3.5 rounded-[10px] bg-surface p-7">
              <div className="flex flex-wrap items-center gap-2.5 font-mono text-[13px]">
                <s className="text-muted">{c.decision.from}</s>
                <span aria-hidden="true">→</span>
                <b className="font-medium text-accent">{c.decision.to}</b>
              </div>
              <h3 className="font-sans text-h4 font-semibold tracking-normal">{c.decision.title}</h3>
              <p>{c.decision.body}</p>
            </div>
          </CsSection>

          <CsSection heading={c.testimonial.heading}>
            <div>
              <blockquote className="border-l-[3px] border-accent-fill py-1 pl-6">
                <p className="font-display text-h4 leading-[1.45] font-medium tracking-[-0.01em]">{c.testimonial.quote}</p>
                <cite className="mt-3.5 block text-[15px] text-muted not-italic">{c.testimonial.author}</cite>
              </blockquote>
              {c.testimonial.placeholder && <Placeholder text={c.testimonial.placeholder} />}
            </div>
          </CsSection>

          <CsSection heading={c.screens.heading}>
            <div>
              <div className="grid grid-cols-2 gap-3.5 min-[820px]:grid-cols-4">
                {c.screens.items.map((item) => (
                  <figure key={item.caption}>
                    <div className="grid aspect-[4/3] max-w-full place-items-center rounded-[10px] border border-dashed border-line bg-[repeating-linear-gradient(135deg,var(--surface)_0_10px,var(--bg)_10px_20px)] font-mono text-xs text-muted">
                      {item.device}
                    </div>
                    <figcaption className="mt-2.5 text-sm text-muted">{item.caption}</figcaption>
                  </figure>
                ))}
              </div>
              {c.screens.placeholder && <Placeholder text={c.screens.placeholder} />}
            </div>
          </CsSection>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8">
            <span className="eyebrow text-muted">{c.next.label}</span>
            <Link
              href={`${paths.home(locale)}#projects`}
              className="font-display text-[clamp(24px,3.2vw,34px)] font-bold tracking-[-0.02em] hover:text-accent"
            >
              {c.next.name} →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
