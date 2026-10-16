"use client";

import { useRef } from "react";
import { POWER_UP_EVENT } from "./PowerLevel";

const CLICKS_NEEDED = 7;
const WINDOW_MS = 2500;

export function Logo({ href }: { href: string }) {
  const clicks = useRef<number[]>([]);

  function onClick() {
    const now = Date.now();
    clicks.current = [...clicks.current.filter((t) => now - t < WINDOW_MS), now];
    if (clicks.current.length >= CLICKS_NEEDED) {
      clicks.current = [];
      window.dispatchEvent(new Event(POWER_UP_EVENT));
    }
  }

  return (
    <a href={href} onClick={onClick} className="flex items-center gap-2 whitespace-nowrap font-mono text-[15px] font-medium">
      <i
        aria-hidden="true"
        className="inline-block size-2.5 rounded-full bg-accent-fill shadow-[0_0_0_3px_color-mix(in_srgb,var(--accent-fill)_22%,transparent)]"
      />
      ziecina.dev
    </a>
  );
}
