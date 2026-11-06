/**
 * Shape of the site copy. `en.ts` and `pl.ts` must both satisfy it, so a missing
 * translation is a type error. Strings may use **bold** markup (see <Rich>).
 */

/** A screenshot in a gallery; `wide` ones span the full width. */
export type Screenshot = { src: string; alt: string; caption: string; wide?: boolean };

export type CaseStudySlug = "stajnia" | "buildBudget";

/** One project case study page. Optional sections are simply not rendered. */
export type CaseStudy = {
  seo: { title: string; description: string };
  chips: { text: string; live?: boolean }[];
  name: string;
  tagline: string;
  meta: { label: string; value: string }[];
  links: { label: string; href: string }[];
  linksNote?: string;
  problem: { heading: string; body: string };
  role: { heading: string; body: string };
  built: { heading: string; items: { title: string; body: string }[] };
  users?: { heading: string; body: string };
  engineering: { heading: string; items: string[] };
  decision: { heading: string; from: string; to: string; title: string; body: string };
  testimonial?: { heading: string; quote: string; author: string; placeholder?: string };
  screens?: {
    heading: string;
    note: string;
    /** `wide` items span the full width of the gallery. */
    items: Screenshot[];
  };
  next: { label: string; name: string; slug: CaseStudySlug };
};

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    projects: string;
    experience: string;
    skills: string;
    about: string;
    contact: string;
    downloadCv: string;
    menu: string;
    themeToggle: string;
    languageLabel: string;
    otherLanguageName: string;
  };
  hero: {
    badge: string;
    name: string;
    role: string;
    lede: string;
    viewProjects: string;
    location: string;
    portraitAlt: string;
    /** Lines shown in the badge on the portrait. */
    portraitCaption: string[];
  };
  projects: {
    eyebrow: string;
    heading: string;
    intro: string;
    stajnia: {
      name: string;
      tagline: string;
      labels: { production: string; client: string; period: string };
      short: string;
      facts: { value: string; label: string }[];
      stack: string;
      readCaseStudy: string;
      privateNote: string;
      screenshot: { src: string; alt: string; label: string };
    };
    buildBudget: {
      name: string;
      tagline: string;
      labels: { openSource: string; liveDemo: string };
      short: string;
      highlights: string[];
      moreHighlights: string;
      lessHighlights: string;
      stack: string;
      demoButton: string;
      codeButton: string;
      budget: {
        title: string;
        meta: string;
        spentOf: string;
        /** Formatted for the language ("512,340" / "512 340"). */
        spent: string;
        stages: { name: string; percent: number }[];
        presence: string;
      };
    };
    demoData: string;
  };
  experience: {
    eyebrow: string;
    heading: string;
    /** A compact timeline; the full details live in the CV. */
    jobs: { period: string; role: string; company: string; summary: string; results: string[] }[];
    fullCv: string;
  };
  skills: {
    eyebrow: string;
    heading: string;
    groups: { name: string; items: string }[];
  };
  about: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    facts: { label: string; value: string }[];
  };
  contact: {
    eyebrow: string;
    heading: string;
    lead: string;
    copy: string;
    copied: string;
    copyFallback: string;
    /** A low-key link to the business page; Polish only. */
    business?: { text: string; link: string };
  };
  footer: { builtWith: string; source: string };
  caseStudyUi: { back: string; linksLabel: string };
  caseStudies: Record<CaseStudySlug, CaseStudy>;
  easterEgg: { toast: string };
};

/** The Polish-only page for small businesses (/pl/dla-firm/), written for owners, not recruiters. */
export type ForBusiness = {
  seo: { title: string; description: string };
  hero: { eyebrow: string; heading: string; lede: string; book: string; example: string; call: string };
  problems: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: { title: string; body: string }[];
    outcome: { label: string; body: string };
  };
  audience: { eyebrow: string; heading: string; intro: string; items: string[]; note: string };
  example: {
    eyebrow: string;
    heading: string;
    before: { label: string; body: string };
    changesLabel: string;
    changes: { title: string; body: string }[];
    screensNote: string;
    screens: Screenshot[];
    caseStudy: string;
    tech: { label: string; body: string };
  };
  process: { eyebrow: string; heading: string; steps: { title: string; body: string }[] };
  pricing: {
    eyebrow: string;
    heading: string;
    rows: { item: string; price: string; includes: string }[];
    note: string;
  };
  faq: { eyebrow: string; heading: string; items: { q: string; a: string }[] };
  contact: { eyebrow: string; heading: string; lead: string; book: string; call: string; write: string; area: string };
};
