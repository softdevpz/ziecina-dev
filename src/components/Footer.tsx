import type { Dictionary } from "@/content/types";
import { site } from "@/lib/site";

export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="border-t border-line">
      <div className="wrap flex flex-wrap justify-between gap-x-6 gap-y-2 py-7 text-sm text-muted">
        <span>© {new Date().getFullYear()} Piotr Zięcina</span>
        <span>
          {dict.footer.builtWith} ·{" "}
          <a href={site.sourceRepo} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:text-fg hover:underline">
            {dict.footer.source}
          </a>
        </span>
      </div>
    </footer>
  );
}
