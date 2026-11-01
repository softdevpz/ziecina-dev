import type { Screenshot } from "@/content/types";
import { screenshotAttrs } from "@/lib/images";

/** Wide screenshots span both columns, the rest form a 2-column grid. Each opens full size. */
export function ScreenshotGallery({ items }: { items: Screenshot[] }) {
  return (
    <div className="grid gap-x-3.5 gap-y-6 min-[640px]:grid-cols-2">
      {items.map((item) => (
        <figure key={item.src} className={item.wide ? "min-[640px]:col-span-2" : undefined}>
          <a
            href={item.src}
            target="_blank"
            rel="noopener"
            className="block overflow-hidden rounded-[10px] border border-line bg-white transition-shadow hover:shadow-lg"
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- static export, images are pre-sized */}
            <img
              {...screenshotAttrs(item.src)}
              sizes={item.wide ? "(min-width: 900px) 820px, 100vw" : "(min-width: 900px) 410px, (min-width: 640px) 50vw, 100vw"}
              alt={item.alt}
              loading="lazy"
              className="block h-auto w-full"
            />
          </a>
          <figcaption className="mt-2.5 text-sm text-muted">{item.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}
