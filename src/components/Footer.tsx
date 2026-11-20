import type { Dictionary } from "@/content/types";
import { SourceLink } from "./SourceLink";

export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="border-t border-line">
      <div className="wrap flex flex-wrap justify-between gap-x-6 gap-y-2 py-7 text-sm text-muted">
        <span>© {new Date().getFullYear()} Piotr Zięcina</span>
        <SourceLink builtWith={dict.footer.builtWith} label={dict.footer.source} />
      </div>
    </footer>
  );
}
