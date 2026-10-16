"use client";

import { useEffect, useState } from "react";

const KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
export const POWER_UP_EVENT = "power-up";
const DURATION_MS = 4500;

/**
 * Easter egg: the Konami code (or 7 quick clicks on the logo) powers up the
 * portrait with an aura and shows "Power level: over 9000!".
 */
export function PowerLevel({ message }: { message: string }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    let progress = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;

    function powerUp() {
      document.documentElement.setAttribute("data-power", "on");
      setActive(true);
      clearTimeout(timer);
      timer = setTimeout(() => {
        document.documentElement.removeAttribute("data-power");
        setActive(false);
      }, DURATION_MS);
    }

    function onKey(e: KeyboardEvent) {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      progress = key === KONAMI[progress] ? progress + 1 : key === KONAMI[0] ? 1 : 0;
      if (progress === KONAMI.length) {
        progress = 0;
        powerUp();
      }
    }

    window.addEventListener("keydown", onKey);
    window.addEventListener(POWER_UP_EVENT, powerUp);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(POWER_UP_EVENT, powerUp);
      clearTimeout(timer);
    };
  }, []);

  if (!active) return null;
  return (
    <div
      role="status"
      className="fixed left-1/2 z-50 max-w-[calc(100%-32px)] rounded-full bg-fg px-5 py-3 text-center font-mono text-sm font-medium text-bg shadow-lg"
      style={{ bottom: "calc(24px + env(safe-area-inset-bottom, 0px))", animation: "toast-in .25s ease-out both" }}
    >
      {message}
    </div>
  );
}
