// Only "/" reaches this Worker (run_worker_first in wrangler.jsonc); every other
// request is served straight from the static export in out/.

type Env = { ASSETS: { fetch(request: Request): Promise<Response> } };

/** True when the visitor's most preferred language is Polish. */
function prefersPolish(acceptLanguage: string | null): boolean {
  const ranked = (acceptLanguage ?? "")
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().toLowerCase().split(";");
      const q = params.find((p) => p.trim().startsWith("q="));
      return { tag, q: q ? Number(q.trim().slice(2)) || 0 : 1 };
    })
    .filter((l) => l.tag && l.tag !== "*")
    .sort((a, b) => b.q - a.q);
  return ranked[0]?.tag.startsWith("pl") ?? false;
}

const worker = {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname !== "/") return env.ASSETS.fetch(request);

    // A real redirect, so link previews (LinkedIn, messengers) follow it to a page with Open Graph tags.
    // 302, not 308: the target depends on the visitor's language, so it must not be cached for everyone.
    const target = new URL(prefersPolish(request.headers.get("Accept-Language")) ? "/pl/" : "/en/", url);
    target.search = url.search;
    return new Response(null, {
      status: 302,
      headers: { Location: target.toString(), Vary: "Accept-Language" },
    });
  },
};

export default worker;
