"use client";

import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

/** "Built with … · source" link. Left out on the business pages, where clients have no use for the site's code. */
export function SourceLink({ builtWith, label }: { builtWith: string; label: string }) {
  const pathname = usePathname();
  if (pathname?.startsWith("/pl/dla-")) return null;
  return (
    <span>
      {builtWith} ·{" "}
      <a href={site.sourceRepo} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:text-fg hover:underline">
        {label}
      </a>
    </span>
  );
}
