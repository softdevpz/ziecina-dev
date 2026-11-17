"use client";

import { useEffect } from "react";

/** Scrolling this far with the menu open closes it (small jitters don't). */
const SCROLL_CLOSE_PX = 12;

/**
 * Closes the header's mobile menu (a plain <details data-mobile-menu>, so it
 * still opens without JavaScript) when the page scrolls, a link in it is
 * followed, the user taps outside it or presses Escape.
 */
export function MobileMenuCloser() {
  useEffect(() => {
    const menu = document.querySelector<HTMLDetailsElement>("details[data-mobile-menu]");
    if (!menu) return;

    let openedAt = 0;
    const close = () => {
      if (menu.open) menu.open = false;
    };

    const onToggle = () => {
      openedAt = window.scrollY;
    };
    const onScroll = () => {
      if (menu.open && Math.abs(window.scrollY - openedAt) > SCROLL_CLOSE_PX) close();
    };
    const onClickInside = (e: MouseEvent) => {
      if ((e.target as Element).closest("a")) close();
    };
    const onPointerOutside = (e: PointerEvent) => {
      if (!menu.contains(e.target as Node)) close();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menu.open) {
        close();
        menu.querySelector("summary")?.focus();
      }
    };

    menu.addEventListener("toggle", onToggle);
    menu.addEventListener("click", onClickInside);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("pointerdown", onPointerOutside);
    document.addEventListener("keydown", onKey);
    return () => {
      menu.removeEventListener("toggle", onToggle);
      menu.removeEventListener("click", onClickInside);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("pointerdown", onPointerOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return null;
}
