import type { Dictionary } from "@/content/types";
import { Section, SectionHead } from "./SectionHead";

export function About({ dict }: { dict: Dictionary }) {
  const t = dict.about;
  return (
    <Section id="about">
      <SectionHead eyebrow={t.eyebrow} heading={t.heading} />
      <div className="grid gap-9 min-[820px]:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] min-[820px]:gap-14">
        <div className="grid max-w-[62ch] gap-4.5 text-lede">
          {t.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <dl className="content-start border-t border-line">
          {t.facts.map((f) => (
            <div key={f.label} className="grid grid-cols-[110px_minmax(0,1fr)] gap-3.5 border-b border-line py-3.5 text-[15.5px]">
              <dt className="pt-[3px] font-mono text-xs tracking-[0.1em] text-muted uppercase">{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
