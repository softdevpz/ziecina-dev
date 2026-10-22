/*
 * Intrinsic sizes of the screenshots in public/images/stajnia/ and their
 * 700 px-wide variants (`<name>-700.webp`), for width/height and srcset.
 * Update this when a screenshot is replaced.
 */
const sizes: Record<string, [number, number]> = {
  "/images/stajnia/task-board.webp": [1400, 1405],
  "/images/stajnia/feed-room.webp": [1400, 483],
  "/images/stajnia/owner-boxes.webp": [1400, 1504],
  "/images/stajnia/order-service.webp": [1400, 1443],
  "/images/stajnia/admin-users.webp": [1400, 1023],
  "/images/stajnia/billing.webp": [1400, 1072],
};

/** width, height and srcSet attributes for a screenshot. */
export function screenshotAttrs(src: string) {
  const [width, height] = sizes[src] ?? [1400, 1000];
  const small = src.replace(/\.webp$/, "-700.webp");
  return { src, width, height, srcSet: `${small} 700w, ${src} 1400w` };
}
