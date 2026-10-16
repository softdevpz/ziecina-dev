import type { Dictionary } from "@/content/types";
import { type Locale, locales, paths, site } from "@/lib/site";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

type Props = {
  locale: Locale;
  dict: Dictionary;
  /** The same page in each language, for the switcher. */
  alternates: Record<Locale, string>;
};

export function Header({ locale, dict, alternates }: Props) {
  const home = paths.home(locale);
  const links = [
    { href: `${home}#projects`, label: dict.nav.projects },
    { href: `${home}#experience`, label: dict.nav.experience },
    { href: `${home}#skills`, label: dict.nav.skills },
    { href: `${home}#about`, label: dict.nav.about },
    { href: `${home}#contact`, label: dict.nav.contact },
  ];

  return (
    <header
      className="sticky z-40 border-b border-line bg-[color-mix(in_srgb,var(--bg)_86%,transparent)] backdrop-blur-md"
      style={{ top: "env(safe-area-inset-top, 0px)" }}
    >
      <div className="wrap flex items-center gap-5 py-3.5">
        <Logo href={home} />

        <nav aria-label="Main" className="ml-auto hidden gap-[22px] min-[900px]:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[15px] text-muted transition-colors hover:text-fg">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2.5 min-[900px]:ml-0">
          <div
            role="group"
            aria-label={dict.nav.languageLabel}
            className="flex rounded-full border border-line p-0.5 font-mono text-xs"
          >
            {locales.map((l) =>
              l === locale ? (
                <span key={l} aria-current="true" className="rounded-full bg-fg px-2.5 py-1 text-bg uppercase">
                  {l}
                </span>
              ) : (
                <a
                  key={l}
                  href={alternates[l]}
                  hrefLang={l}
                  lang={l}
                  title={dict.nav.otherLanguageName}
                  className="rounded-full px-2.5 py-1 text-muted uppercase hover:text-fg"
                >
                  {l}
                </a>
              ),
            )}
          </div>
          <ThemeToggle label={dict.nav.themeToggle} />
          <a href={site.cv} download className="btn btn-sm btn-primary max-[480px]:hidden">
            {dict.nav.downloadCv}
          </a>

          {/* Mobile menu without JavaScript. */}
          <details className="group relative min-[900px]:hidden">
            <summary
              aria-label={dict.nav.menu}
              className="icon-btn cursor-pointer list-none [&::-webkit-details-marker]:hidden"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" className="size-[17px]">
                <path d="M4 7h16M4 12h16M4 17h16" className="group-open:hidden" />
                <path d="M6 6l12 12M18 6L6 18" className="hidden group-open:block" />
              </svg>
            </summary>
            <nav
              aria-label="Mobile"
              className="absolute right-0 mt-3 grid w-56 gap-1 rounded-xl border border-line bg-bg p-2 shadow-xl"
            >
              {links.map((l) => (
                <a key={l.href} href={l.href} className="rounded-lg px-3 py-2.5 hover:bg-surface">
                  {l.label}
                </a>
              ))}
              <a href={site.cv} download className="btn btn-primary mt-1 justify-center">
                {dict.nav.downloadCv}
              </a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
