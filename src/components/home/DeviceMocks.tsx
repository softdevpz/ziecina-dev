import type { Dictionary } from "@/content/types";

/*
 * Frames for project previews: a drawn mock with demo data (Build Budget) and
 * a real, redacted screenshot (Stajnia Lauden).
 */

function Device({ title, meta, demoLabel, children }: { title: string; meta: string; demoLabel: string; children: React.ReactNode }) {
  return (
    <div className="relative" aria-hidden="true">
      <span className="absolute -top-2.5 right-4.5 z-10 rounded-full bg-fg px-2.5 py-1 font-mono text-[11px] font-medium text-bg">
        {demoLabel}
      </span>
      <div className="rounded-[18px] border border-line bg-surface p-3 shadow-[0_24px_60px_-30px_rgb(0_0_0/0.35)]">
        <div className="overflow-hidden rounded-[9px] border border-line bg-bg text-xs">
          <div className="flex items-center justify-between gap-3 border-b border-line px-3.5 py-2.5 font-semibold">
            {title}
            <span className="font-mono text-[11px] font-normal text-muted">{meta}</span>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

/** A real app screenshot in the same frame as the drawn mocks. */
export function ScreenshotFrame({ src, alt, label }: { src: string; alt: string; label: string }) {
  return (
    <div className="relative">
      <span className="absolute -top-2.5 right-4.5 z-10 rounded-full bg-fg px-2.5 py-1 font-mono text-[11px] font-medium text-bg">
        {label}
      </span>
      <div className="rounded-[18px] border border-line bg-surface p-3 shadow-[0_24px_60px_-30px_rgb(0_0_0/0.35)]">
        {/* eslint-disable-next-line @next/next/no-img-element -- static export, image is pre-sized */}
        <img src={src} alt={alt} width={1400} height={1405} loading="lazy" className="block h-auto w-full rounded-[9px] border border-line bg-white" />
      </div>
    </div>
  );
}

export function BudgetMock({ budget, demoLabel }: { budget: Dictionary["projects"]["buildBudget"]["budget"]; demoLabel: string }) {
  return (
    <Device title={budget.title} meta={budget.meta} demoLabel={demoLabel}>
      <div className="grid gap-3 p-3.5">
        <div className="flex items-baseline justify-between">
          <span className="text-muted">{budget.spentOf}</span>
          <strong className="font-display text-2xl font-bold tabular-nums">512 340</strong>
        </div>
        {budget.stages.map((stage) => (
          <div key={stage.name} className="grid grid-cols-[110px_minmax(0,1fr)_54px] items-center gap-2.5 tabular-nums">
            <span>{stage.name}</span>
            <div className="h-2 overflow-hidden rounded-full border border-line bg-surface">
              <i
                className={`block h-full rounded-full ${stage.percent > 100 ? "bg-danger" : "bg-accent-fill"}`}
                style={{ width: `${Math.min(stage.percent, 100)}%` }}
              />
            </div>
            <span className="text-right font-mono text-[11px] text-muted">{stage.percent}%</span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 px-3.5 pb-3.5 text-[11px] text-muted">
        <span className="grid size-[22px] place-items-center rounded-full border-2 border-bg bg-accent-fill text-[10px] font-semibold text-on-accent">
          A
        </span>
        <span className="-ml-3 grid size-[22px] place-items-center rounded-full border-2 border-bg bg-[#7aa7d9] text-[10px] font-semibold text-on-accent">
          M
        </span>
        {budget.presence}
      </div>
    </Device>
  );
}
