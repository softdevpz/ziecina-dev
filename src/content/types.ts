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
  /** Photos of the app in use on site (not screenshots). */
  photos?: { heading: string; note: string; items: Screenshot[] };
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

/** A title with a short body: problems, services, steps, guarantees. */
export type TitledText = { title: string; body: string };

/** Hero shared by the business pages. */
export type BusinessHero = {
  eyebrow: string;
  heading: string;
  lede: string;
  /** Short benefits under the lede. */
  points: string[];
  book: string;
  call: string;
  /** Optional second button, e.g. a jump to the examples. */
  secondary?: { label: string; href: string };
};

/** Closing contact section shared by the business pages. */
export type BusinessContact = {
  eyebrow: string;
  heading: string;
  lead: string;
  book: string;
  call: string;
  write: string;
  area: string;
};

/** Polish-only business pages, written for owners and managers, not recruiters. */
export type BusinessSeo = { title: string; description: string };

/** /pl/dla-firm/: the general offer (process automation and data flow). */
export type ForBusiness = {
  seo: BusinessSeo;
  hero: BusinessHero;
  problems: { eyebrow: string; heading: string; items: TitledText[] };
  services: { eyebrow: string; heading: string; items: (TitledText & { more?: string })[] };
  audience: {
    eyebrow: string;
    heading: string;
    intro: string;
    columns: [string, string];
    rows: { industry: string; problem: string }[];
    note: string;
  };
  example: {
    eyebrow: string;
    heading: string;
    scenario: { label: string; title: string; intro: string; steps: string[]; more: string };
    stajnia: {
      label: string;
      title: string;
      before: { label: string; body: string };
      now: { label: string; body: string };
      /** Hidden until there is a real number from the stable. */
      result?: { label: string; body: string };
      photosNote: string;
      photos: Screenshot[];
      screensNote: string;
      screens: Screenshot[];
      caseStudy: string;
      tech: { label: string; body: string };
    };
  };
  process: { eyebrow: string; heading: string; steps: TitledText[] };
  pricing: {
    eyebrow: string;
    heading: string;
    rows: { item: string; price: string; includes: string }[];
    note: string;
  };
  security: { eyebrow: string; heading: string; items: TitledText[] };
  faq: { eyebrow: string; heading: string; items: { q: string; a: string }[] };
  contact: BusinessContact & { partners: { text: string; link: string } };
};

/** /pl/dla-produkcji/: material flow for manufacturers. Filled in step by step. */
export type ForProduction = {
  seo: BusinessSeo;
  hero: BusinessHero;
  flow: { eyebrow: string; heading: string; intro: string; steps: TitledText[] };
  traceability: { eyebrow: string; heading: string; body: string };
  floor: { eyebrow: string; heading: string; items: TitledText[] };
  fit: { eyebrow: string; heading: string; items: TitledText[] };
  more: { text: string; link: string };
  contact: BusinessContact;
};

/** /pl/dla-partnerow/: referrals from accountants and others who serve businesses. */
export type ForPartners = {
  seo: BusinessSeo;
  hero: BusinessHero;
  who: { eyebrow: string; heading: string; items: string[]; note: string };
  signals: { eyebrow: string; heading: string; intro: string; items: string[] };
  steps: { eyebrow: string; heading: string; steps: TitledText[] };
  commission: { eyebrow: string; heading: string; body: string };
  pitch: {
    eyebrow: string;
    heading: string;
    intro: string;
    text: string;
    labels: { copy: string; copied: string; copyFallback: string };
  };
  contact: BusinessContact;
};
