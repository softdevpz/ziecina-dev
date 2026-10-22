import Link from "next/link";
import type { Dictionary } from "@/content/types";
import { type Locale, paths, site } from "@/lib/site";
import { LockIcon } from "../icons";
import { Rich } from "../Rich";
import { BudgetMock, ScreenshotFrame } from "./DeviceMocks";
import { Section, SectionHead } from "./SectionHead";

const projectRow = "grid items-center gap-8 py-12 min-[900px]:grid-cols-2 min-[900px]:gap-16";

export function Projects({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const t = dict.projects;
  const s = t.stajnia;
  const b = t.buildBudget;

  return (
    <Section id="projects">
      <SectionHead eyebrow={t.eyebrow} heading={t.heading} intro={t.intro} />

      <article className={`${projectRow} pt-0`}>
        <div>
          <div className="flex flex-wrap gap-1.5">
            <span className="chip chip-live">{s.labels.production}</span>
            <span className="chip">{s.labels.client}</span>
            <span className="chip">{s.labels.period}</span>
          </div>
          <h3 className="mt-4 text-h3 font-bold">{s.name}</h3>
          <p className="mt-2 max-w-[46ch] text-lede font-medium">{s.tagline}</p>
          <p className="mt-3.5 max-w-[58ch] text-[15px] leading-[1.65] text-muted">{s.short}</p>
          <div className="mt-5 flex flex-wrap gap-x-5.5 gap-y-2 font-mono text-[13px]">
            {s.facts.map((f) => (
              <span key={f.label}>
                <b className="font-medium text-accent">{f.value}</b> {f.label}
              </span>
            ))}
          </div>
          <p className="mt-5 font-mono text-[12.5px] leading-[1.9] text-muted">{s.stack}</p>
          <div className="mt-6.5 flex flex-wrap gap-2.5">
            <Link href={paths.stajnia(locale)} className="btn btn-primary">
              {s.readCaseStudy} <span className="arrow">→</span>
            </Link>
            <a href={site.stajnia} target="_blank" rel="noopener noreferrer" className="btn">
              stajnialauden.pl ↗
            </a>
          </div>
          <p className="mt-3.5 flex items-start gap-2 text-sm text-muted">
            <LockIcon className="mt-[3px] size-[14px] flex-none" />
            {s.privateNote}
          </p>
        </div>
        <ScreenshotFrame {...s.screenshot} />
      </article>

      <article className={`${projectRow} border-t border-dashed border-line`}>
        <div className="min-[900px]:order-last">
          <div className="flex flex-wrap gap-1.5">
            <span className="chip">{b.labels.openSource}</span>
            <span className="chip chip-live">{b.labels.liveDemo}</span>
          </div>
          <h3 className="mt-4 text-h3 font-bold">{b.name}</h3>
          <p className="mt-2 max-w-[46ch] text-lede font-medium">{b.tagline}</p>
          <p className="mt-3.5 max-w-[58ch] text-[15px] leading-[1.65] text-muted">{b.short}</p>
          <ul className="ticks mt-4 text-[15px]">
            {b.highlights.slice(0, 4).map((h) => (
              <li key={h}>
                <Rich text={h} />
              </li>
            ))}
          </ul>
          <details className="group mt-3 text-[15px]">
            <summary className="cursor-pointer list-none font-medium text-accent [&::-webkit-details-marker]:hidden">
              <span className="group-open:hidden">{b.moreHighlights} ({b.highlights.length - 4}) ↓</span>
              <span className="hidden group-open:inline">{b.lessHighlights} ↑</span>
            </summary>
            <ul className="ticks mt-2">
              {b.highlights.slice(4).map((h) => (
                <li key={h}>
                  <Rich text={h} />
                </li>
              ))}
            </ul>
          </details>
          <p className="mt-5 font-mono text-[12.5px] leading-[1.9] text-muted">{b.stack}</p>
          <div className="mt-6.5 flex flex-wrap gap-2.5">
            <a href={site.buildBudgetDemo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              {b.demoButton} ↗
            </a>
            <a href={site.buildBudgetRepo} target="_blank" rel="noopener noreferrer" className="btn">
              {b.codeButton} ↗
            </a>
          </div>
        </div>
        <BudgetMock budget={b.budget} demoLabel={t.demoData} />
      </article>
    </Section>
  );
}
