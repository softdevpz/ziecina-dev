"use client";

import { useRef, useState } from "react";

type Props = { email: string; labels: { copy: string; copied: string; copyFallback: string } };

export function CopyEmail({ email, labels }: Props) {
  const [status, setStatus] = useState("");
  const linkRef = useRef<HTMLAnchorElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  function flash(text: string) {
    setStatus(text);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus(""), 2400);
  }

  function selectAddress() {
    if (!linkRef.current) return;
    const range = document.createRange();
    range.selectNodeContents(linkRef.current);
    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      flash(labels.copied);
    } catch {
      selectAddress();
      flash(labels.copyFallback);
    }
  }

  return (
    <div className="mt-9 flex flex-wrap items-center gap-3.5">
      <a
        ref={linkRef}
        href={`mailto:${email}`}
        className="font-display text-h2 font-semibold tracking-[-0.02em] break-all underline decoration-accent-fill decoration-[3px] underline-offset-8"
      >
        {email}
      </a>
      <button type="button" onClick={copy} className="btn btn-sm cursor-pointer">
        {labels.copy}
      </button>
      <span aria-live="polite" className="font-mono text-[13px] font-medium text-ok">
        {status}
      </span>
    </div>
  );
}
