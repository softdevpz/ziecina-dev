import type { Dictionary } from "@/content/types";
import { site } from "@/lib/site";
import { Section, SectionHead } from "./SectionHead";

/** Compact career timeline; the CV link below has the full details. */
export function Experience({ dict }: { dict: Dictionary }) {
  const t = dict.experience;
  return (
    <Section id="experience">
      <SectionHead eyebrow={t.eyebrow} heading={t.heading} />
      <ol>
        {t.jobs.map((job, i) => (
          <li
            key={job.company}
            className={`grid gap-1.5 min-[820px]:grid-cols-[160px_minmax(0,1fr)] min-[820px]:gap-6 ${
              i === 0 ? "pb-7" : "border-t border-line py-7"
            }`}
          >
            <div className="pt-1 font-mono text-[13px] text-muted">{job.period}</div>
            <div>
              <h3 className="text-h4 font-bold tracking-[-0.01em]">
                {job.role} <span className="text-accent">· {job.company}</span>
              </h3>
              <p className="mt-2 max-w-[70ch] text-base text-muted">{job.summary}</p>
              {job.results.length > 0 && (
                <ul className="ticks mt-3 text-base">
                  {job.results.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
      <a href={site.cv} download className="btn mt-9">
        {t.fullCv} <span className="arrow">→</span>
      </a>
    </Section>
  );
}
