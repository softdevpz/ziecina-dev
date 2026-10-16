import type { Dictionary } from "@/content/types";
import { Section, SectionHead } from "./SectionHead";

export function Skills({ dict }: { dict: Dictionary }) {
  const t = dict.skills;
  return (
    <Section id="skills">
      <SectionHead eyebrow={t.eyebrow} heading={t.heading} />
      {/* 1px gaps over a line-coloured background draw the grid lines. */}
      <div className="grid gap-px overflow-hidden rounded-[10px] border border-line bg-line min-[560px]:grid-cols-2 min-[820px]:grid-cols-3">
        {t.groups.map((g) => (
          <div key={g.name} className="bg-bg p-6">
            <h3 className="eyebrow font-mono font-medium tracking-[0.12em] text-accent">{g.name}</h3>
            <p className="mt-3 text-base leading-[1.75]">{g.items}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
