import type { Dictionary } from "@/content/types";
import { site } from "@/lib/site";
import { Section, SectionHead } from "./SectionHead";

export function Experience({ dict }: { dict: Dictionary }) {
  const t = dict.experience;
  return (
    <Section id="experience">
      <SectionHead eyebrow={t.eyebrow} heading={t.heading} />
      <div>
        {t.jobs.map((job, i) => (
          <div
            key={job.company}
            className={`grid gap-1.5 min-[820px]:grid-cols-[160px_minmax(0,1fr)] min-[820px]:gap-6 ${
              i === 0 ? "pb-8" : "border-t border-line py-8"
            }`}
          >
            <div className="pt-1 font-mono text-[13px] text-muted">{job.period}</div>
            <div>
              <h3 className="text-h4 font-bold tracking-[-0.01em]">
                {job.role} <span className="text-accent">· {job.company}</span>
              </h3>
              {job.stack && <p className="mt-2 font-mono text-[13px] text-muted">{job.stack}</p>}
              {job.bullets && (
                <ul className="ticks mt-3 text-base">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
              {job.products?.map((p) => (
                <div key={p.name} className="mt-5 border-l-2 border-line pl-4.5">
                  <h4 className="font-sans text-[17px] font-semibold tracking-normal">
                    {p.name}{" "}
                    <span className="font-normal text-muted">
                      · {p.description} · {p.duration}
                    </span>
                  </h4>
                  <p className="mt-1 font-mono text-[13px] text-muted">{p.stack}</p>
                  <ul className="ticks mt-3 text-base">
                    {p.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <a href={site.cv} download className="btn mt-9">
        {t.fullCv} <span className="arrow">→</span>
      </a>
    </Section>
  );
}
