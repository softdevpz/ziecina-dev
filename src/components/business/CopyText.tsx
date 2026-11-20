"use client";

import { useRef, useState } from "react";

type Props = { text: string; labels: { copy: string; copied: string; copyFallback: string } };

/** A block of text to pass on, with a copy button (falls back to selecting the text). */
export function CopyText({ text, labels }: Props) {
  const [status, setStatus] = useState("");
  const boxRef = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  function flash(message: string) {
    setStatus(message);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus(""), 2400);
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      flash(labels.copied);
    } catch {
      if (boxRef.current) {
        const range = document.createRange();
        range.selectNodeContents(boxRef.current);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
      }
      flash(labels.copyFallback);
    }
  }

  return (
    <div className="grid gap-3.5">
      <div className="flex flex-wrap items-center gap-3.5">
        <button type="button" onClick={copy} className="btn btn-sm cursor-pointer">
          {labels.copy}
        </button>
        <span aria-live="polite" className="font-mono text-[13px] font-medium text-ok">
          {status}
        </span>
      </div>
      <div
        ref={boxRef}
        className="max-w-[880px] rounded-[10px] border border-line bg-surface p-6 text-[15.5px] leading-relaxed whitespace-pre-line"
      >
        {text}
      </div>
    </div>
  );
}
