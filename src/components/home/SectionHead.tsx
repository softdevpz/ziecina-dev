export function SectionHead({ eyebrow, heading, intro }: { eyebrow: string; heading: string; intro?: string }) {
  return (
    <div className="mb-12 grid gap-3">
      <span className="eyebrow text-accent">{eyebrow}</span>
      <div>
        <h2 className="text-h2 font-bold">{heading}</h2>
        {intro && <p className="mt-3.5 max-w-[60ch] text-lede text-muted">{intro}</p>}
      </div>
    </div>
  );
}

export function Section({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="border-t border-line">
      <div className="wrap py-16 min-[820px]:py-20">{children}</div>
    </section>
  );
}
