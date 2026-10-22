import type { Dictionary } from "@/content/types";
import { site } from "@/lib/site";
import { CopyEmail } from "../CopyEmail";
import { Section } from "./SectionHead";

export function Contact({ dict }: { dict: Dictionary }) {
  const t = dict.contact;
  return (
    <Section id="contact">
      <span className="eyebrow text-accent">{t.eyebrow}</span>
      <h2 className="mt-3 text-hero font-extrabold tracking-[-0.035em]">{t.heading}</h2>
      <p className="mt-4.5 max-w-[52ch] text-lede text-muted">{t.lead}</p>
      <CopyEmail email={site.email} labels={t} />
      <div className="mt-7.5 flex flex-wrap gap-2.5">
        <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="btn">
          LinkedIn ↗
        </a>
        <a href={site.github} target="_blank" rel="noopener noreferrer" className="btn">
          GitHub ↗
        </a>
      </div>
    </Section>
  );
}
