import type { Dictionary } from "@/content/types";
import { site } from "@/lib/site";
import { GitHubIcon, LinkedInIcon, PinIcon } from "../icons";
import { Rich } from "../Rich";

export function Hero({ dict }: { dict: Dictionary }) {
  const t = dict.hero;
  return (
    <section id="top">
      {/* Phones: intro, photo, actions. Desktop: intro and actions on the left, photo spanning both rows on the right. */}
      <div className="wrap grid gap-y-10 py-12 pb-18 min-[820px]:grid-cols-[minmax(0,1fr)_320px] min-[820px]:gap-x-18 min-[820px]:gap-y-8 min-[820px]:py-20 min-[820px]:pb-24">
        <div className="min-[820px]:self-end">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-line py-1.5 pr-3.5 pl-3 text-sm text-muted">
            <span className="status-dot" aria-hidden="true" />
            {t.badge}
          </span>
          <h1 className="mt-5.5 text-hero font-extrabold tracking-[-0.035em]">{t.name}</h1>
          <p className="mt-2.5 font-display text-h3 font-medium tracking-[-0.01em] text-accent">{t.role}</p>
          <p className="mt-6 max-w-[58ch] text-lede">
            <Rich text={t.lede} />
          </p>
        </div>

        <div className="min-[820px]:col-start-1 min-[820px]:row-start-2">
          <div className="flex flex-wrap items-center gap-2.5">
            <a href="#projects" className="btn btn-primary">
              {t.viewProjects} <span className="arrow">→</span>
            </a>
            <a href={`mailto:${site.email}`} className="btn">
              {site.email}
            </a>
            <span className="ml-1 flex gap-1.5">
              <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="icon-btn">
                <GitHubIcon />
              </a>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="icon-btn">
                <LinkedInIcon />
              </a>
            </span>
          </div>
          <p className="mt-6.5 flex items-center gap-2 text-[15px] text-muted">
            <PinIcon />
            {t.location}
          </p>
        </div>

        <figure className="portrait relative row-start-2 mr-[22px] mb-[22px] w-full max-w-[240px] justify-self-start min-[820px]:col-start-2 min-[820px]:row-span-2 min-[820px]:row-start-1 min-[820px]:max-w-[320px] min-[820px]:self-center min-[820px]:justify-self-end">
          {/* eslint-disable-next-line @next/next/no-img-element -- static export, image is pre-sized */}
          <img
            src="/images/portrait.webp"
            srcSet="/images/portrait-480.webp 480w, /images/portrait.webp 640w"
            sizes="(min-width: 820px) 320px, 240px"
            alt={t.portraitAlt}
            width={640}
            height={800}
            fetchPriority="high"
            className="relative block aspect-[4/5] h-auto w-full rounded-[10px] border border-line bg-photo-bg object-cover transition-colors"
          />
          <figcaption className="absolute right-[-8px] bottom-6.5 rounded-lg border border-line bg-bg px-3 py-2 font-mono text-xs leading-normal shadow-[0_6px_24px_rgb(0_0_0/0.08)] min-[820px]:right-auto min-[820px]:left-[-14px]">
            {t.portraitCaption.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
