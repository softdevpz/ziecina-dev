/**
 * Shape of the site copy. `en.ts` and `pl.ts` must both satisfy it, so a missing
 * translation is a type error. Strings may use **bold** markup (see <Rich>).
 */
export type Dictionary = {
  meta: {
    title: string;
    description: string;
    caseStudyTitle: string;
    caseStudyDescription: string;
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
      board: {
        title: string;
        meta: string;
        columns: {
          title: string;
          tasks: { title: string; sub: string; state?: "hot" | "done" }[];
        }[];
      };
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
        stages: { name: string; percent: number }[];
        presence: string;
      };
    };
    demoData: string;
  };
  experience: {
    eyebrow: string;
    heading: string;
    jobs: {
      period: string;
      role: string;
      company: string;
      stack?: string;
      bullets?: string[];
      products?: {
        name: string;
        description: string;
        duration: string;
        stack: string;
        bullets: string[];
      }[];
    }[];
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
  };
  footer: { builtWith: string; source: string };
  caseStudy: {
    back: string;
    meta: { label: string; value: string }[];
    linksLabel: string;
    codePrivate: string;
    problem: { heading: string; body: string };
    role: { heading: string; body: string };
    built: { heading: string; items: { title: string; body: string }[] };
    users: {
      heading: string;
      body: string;
      rules: { value: string; label: string }[];
    };
    engineering: { heading: string; items: string[] };
    decision: {
      heading: string;
      from: string;
      to: string;
      title: string;
      body: string;
    };
    testimonial: {
      heading: string;
      quote: string;
      author: string;
      placeholder?: string;
    };
    screens: {
      heading: string;
      items: { device: string; caption: string }[];
      placeholder?: string;
    };
    next: { label: string; name: string };
  };
  easterEgg: { toast: string };
};
