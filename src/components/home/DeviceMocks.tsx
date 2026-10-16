import type { Dictionary } from "@/content/types";

/*
 * Drawn previews with demo data. They stand in for real screenshots until
 * those are ready (Stajnia Lauden screens may only ever show demo data).
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

export function TaskBoardMock({ board, demoLabel }: { board: Dictionary["projects"]["stajnia"]["board"]; demoLabel: string }) {
  return (
    <Device title={board.title} meta={board.meta} demoLabel={demoLabel}>
      <div className="grid grid-cols-3 gap-2.5 p-3 hyphens-auto max-[480px]:grid-cols-2 max-[480px]:[&>*:last-child]:hidden">
        {board.columns.map((col) => (
          <div key={col.title} className="min-w-0">
            <h5 className="mb-2 font-mono text-[11px] font-medium tracking-[0.08em] text-muted uppercase">{col.title}</h5>
            {col.tasks.map((task) => (
              <div
                key={task.title}
                className={[
                  "mb-[7px] rounded-[7px] border border-line bg-surface px-2.5 py-2 leading-[1.35]",
                  task.state === "hot" && "border-l-[3px] border-l-accent-fill",
                  task.state === "done" && "line-through opacity-55",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <b className="block text-[12.5px]">{task.title}</b>
                <small className="text-[11px] text-muted">{task.sub}</small>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Device>
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
