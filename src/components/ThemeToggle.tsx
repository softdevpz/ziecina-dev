"use client";

import { MoonIcon, SunIcon } from "./icons";

/** Runs before first paint (see layout) so a saved theme never flashes. */
export const themeScript = `try{var t=localStorage.getItem("theme");if(t==="dark"||t==="light")document.documentElement.setAttribute("data-theme",t)}catch(e){}`;

export function ThemeToggle({ label }: { label: string }) {
  function toggle() {
    const root = document.documentElement;
    const current = root.getAttribute("data-theme");
    const isDark = current ? current === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    const next = isDark ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Private mode or blocked storage: the choice just won't be remembered.
    }
  }

  return (
    <button type="button" className="icon-btn cursor-pointer" onClick={toggle} aria-label={label} title={label}>
      <MoonIcon className="icon-when-light size-[17px]" />
      <SunIcon className="icon-when-dark size-[17px]" />
    </button>
  );
}
