import Link from "next/link";
import type { BusinessContact as Contact, BusinessHero as Hero, TitledText } from "@/content/types";
import { paths, site } from "@/lib/site";

/** Google Calendar booking page, or an e-mail until it is set up. */
export const bookingHref =
  site.booking || `mailto:${site.email}?subject=${encodeURIComponent("Rozmowa o systemie dla firmy")}`;

const bookingProps = site.booking ? { target: "_blank", rel: "noopener noreferrer" } : {};

/** Hero of a business page. Subpages pass `parent` for a way back to the main offer. */
export function BusinessHero({ t, parent }: { t: Hero; parent?: boolean }) {
  return (
    <section>
      <div className="wrap py-12 pb-18 min-[820px]:py-20 min-[820px]:pb-24">
        <span className="eyebrow text-accent">
          {parent && (
            <>
              <Link href={paths.forBusiness} className="underline-offset-4 hover:underline">
                Dla firm
              </Link>{" "}
              ·{" "}
            </>
          )}
          {t.eyebrow}
        </span>
        <h1 className="mt-4 max-w-[22ch] text-[clamp(36px,5vw,60px)] leading-[1.08] font-extrabold tracking-[-0.03em]">
          {t.heading}
        </h1>
        <p className="mt-6 max-w-[62ch] text-lede text-muted">{t.lede}</p>
        <ul className="ticks mt-6 grid max-w-[62ch] gap-1.5 text-[17px]">
          {t.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <div className="mt-9 flex flex-wrap items-center gap-2.5">
          <BookButton label={t.book} />
          {t.secondary && (
            <a href={t.secondary.href} className="btn">
              {t.secondary.label}
            </a>
          )}
        </div>
        <p className="mt-4.5 text-[15px] text-muted">
          {t.call}{" "}
          <a href={site.phone.href} className="font-medium text-fg underline underline-offset-4 hover:text-accent">
            {site.phone.label}
          </a>
        </p>
      </div>
    </section>
  );
}

export function BookButton({ label }: { label: string }) {
  return (
    <a href={bookingHref} {...bookingProps} className="btn btn-primary">
      {label} <span className="arrow">→</span>
    </a>
  );
}

/** Bordered cards with a title and a short body. */
export function Cards({ items, cols = 3 }: { items: TitledText[]; cols?: 2 | 3 }) {
  return (
    <div className={`grid gap-3.5 min-[640px]:grid-cols-2 ${cols === 3 ? "min-[980px]:grid-cols-3" : ""}`}>
      {items.map((item) => (
        <div key={item.title} className="rounded-[10px] border border-line p-5">
          <h3 className="font-sans text-[17px] font-semibold tracking-normal">{item.title}</h3>
          <p className="mt-2 text-[15.5px] text-muted">{item.body}</p>
        </div>
      ))}
    </div>
  );
}

/** Numbered steps in columns. */
export function Steps({ steps }: { steps: TitledText[] }) {
  return (
    <ol className="grid gap-x-10 gap-y-8 min-[640px]:grid-cols-2 min-[980px]:grid-cols-3">
      {steps.map((step, i) => (
        <li key={step.title} className="border-t border-line pt-5">
          <span className="font-mono text-[13px] text-accent">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="mt-2 font-sans text-[17px] font-semibold tracking-normal">{step.title}</h3>
          <p className="mt-2 text-[15.5px] text-muted">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}

/** Closing contact section: booking, phone and e-mail. */
export function BusinessContact({ t, children }: { t: Contact; children?: React.ReactNode }) {
  return (
    <section id="kontakt" className="border-t border-line">
      <div className="wrap py-16 min-[820px]:py-20">
        <span className="eyebrow text-accent">{t.eyebrow}</span>
        <h2 className="mt-3 max-w-[18ch] text-[clamp(36px,5vw,60px)] leading-[1.08] font-extrabold tracking-[-0.03em]">
          {t.heading}
        </h2>
        <p className="mt-4.5 max-w-[52ch] text-lede text-muted">{t.lead}</p>
        <div className="mt-8 flex flex-wrap items-center gap-2.5">
          <BookButton label={t.book} />
          <a href={site.phone.href} className="btn">
            {t.call}: {site.phone.label}
          </a>
          <a href={`mailto:${site.email}`} className="btn">
            {t.write}: {site.email}
          </a>
        </div>
        <p className="mt-7 text-[15px] text-muted">{t.area}</p>
        {children}
      </div>
    </section>
  );
}
