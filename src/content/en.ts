import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title:
      "Piotr Zięcina — Full Stack Developer (React, Next.js, NestJS, TypeScript)",
    description:
      "Full Stack Developer from Wrocław with 4+ years of commercial experience. I build web apps end to end, from the first client conversation to production.",
    caseStudyTitle: "Stajnia Lauden case study — Piotr Zięcina",
    caseStudyDescription:
      "How I built a production web app that runs the daily work of a horse boarding stable with 60+ boxes.",
  },
  nav: {
    projects: "Projects",
    experience: "Experience",
    skills: "Skills",
    about: "About",
    contact: "Contact",
    downloadCv: "Download CV",
    menu: "Menu",
    themeToggle: "Toggle dark mode",
    languageLabel: "Language",
    otherLanguageName: "Polski",
  },
  hero: {
    badge: "Open to new opportunities",
    name: "Piotr Zięcina",
    role: "Full Stack Developer",
    lede: "I build web applications end to end, from talking to the client to shipping to production. React, Next.js and Vue on the frontend; Node.js, NestJS and SQL on the backend. **4+ years of commercial experience**, most recently at SmartBear.",
    viewProjects: "View projects",
    location: "Wrocław, Poland · open to remote and hybrid",
    portraitAlt: "Portrait of Piotr Zięcina",
    portraitCaption: [
      "React · Next.js",
      "NodeJS · NestJS",
      "JavaScript · TypeScript",
      "MySQL · PostgreSQL",
    ],
  },
  projects: {
    eyebrow: "Projects",
    heading: "Built, shipped, used.",
    intro:
      "Two products I designed, built and deployed on my own. One runs a real business every day; the other is open source.",
    stajnia: {
      name: "Stajnia Lauden",
      tagline:
        "A production web app that runs the daily work of a horse boarding stable with 60+ boxes.",
      labels: {
        production: "In production",
        client: "Real client",
        period: "2026 – present",
      },
      short:
        "The stable used to coordinate services, feeding and turnout over phone calls and paper notes. I replaced that with one web app used every day by the owner, staff, trainers, horse owners and lessees on phones, tablets and wall-mounted screens.",
      facts: [
        { value: "5", label: "user roles" },
        { value: "130+", label: "unit tests" },
        { value: "100+", label: "e2e tests" },
        { value: "PWA", label: "+ Web Push" },
      ],
      stack:
        "Next.js · TypeScript · Tailwind CSS · NestJS · Prisma · PostgreSQL · PWA & Web Push · Docker · Caddy · GitHub Actions · Jest · Supertest",
      readCaseStudy: "Read the case study",
      privateNote:
        "Commercial product. Source code is private; I'm happy to walk through it during an interview.",
      board: {
        title: "Today's tasks",
        meta: "Thu 16 Oct · staff",
        columns: [
          {
            title: "New · 3",
            tasks: [
              {
                title: "Box 12 · extra hay",
                sub: "Today, evening feed",
                state: "hot",
              },
              { title: "Box 31 · turnout", sub: "10:00 · paddock B" },
              { title: "Box 7 · fly spray", sub: "Subscription" },
            ],
          },
          {
            title: "Accepted · 2",
            tasks: [
              { title: "Box 18 · blanket on", sub: "Before 17:00" },
              { title: "Box 44 · lunging", sub: "Trainer: Ola" },
            ],
          },
          {
            title: "Done · 4",
            tasks: [
              { title: "Box 3 · hoof check", sub: "08:40", state: "done" },
              { title: "Box 22 · turnout", sub: "09:15", state: "done" },
            ],
          },
        ],
      },
    },
    buildBudget: {
      name: "Build Budget",
      tagline:
        "Track a house build: stages, expenses against budget, documents and bank-ready PDF reports.",
      labels: { openSource: "Open source", liveDemo: "Live demo" },
      short:
        "People building a house juggle spreadsheets, receipts and bank reports. Build Budget keeps the budget, documents and construction diary in one place, shared in real time with everyone on the project.",
      highlights: [
        "JWT access and refresh tokens in httpOnly cookies, with silent refresh. I found and fixed a race condition where parallel requests were refreshing the token at the same time.",
        "Stripe subscriptions with signature-verified webhooks. The free plan is limited to one project.",
        "PDF bank reports generated in the background with Redis and BullMQ.",
        "Real-time collaboration: project members see each other's changes live over WebSockets.",
        "Document uploads straight to S3 with presigned URLs, plus a construction diary with photos.",
        "Bilingual UI (PL/EN) with next-intl.",
        "CI runs unit tests (80% coverage thresholds on files with logic), end-to-end tests against a real database, and builds both apps.",
        "An architecture write-up in the repo explains *why* things are built the way they are.",
      ],
      moreHighlights: "More highlights",
      lessHighlights: "Show less",
      stack:
        "Next.js · TypeScript · Tailwind CSS · TanStack Query · NestJS · Prisma · PostgreSQL · Redis · BullMQ · Socket.io · Stripe · AWS S3 · Docker · GitHub Actions",
      demoButton: "Live demo",
      codeButton: "Code on GitHub",
      budget: {
        title: "House in Sobótka",
        meta: "budget · PLN",
        spentOf: "Spent of 780,000",
        stages: [
          { name: "Foundations", percent: 98 },
          { name: "Walls", percent: 107 },
          { name: "Roof", percent: 71 },
          { name: "Windows", percent: 34 },
          { name: "Installations", percent: 8 },
        ],
        presence: "2 people editing now",
      },
    },
    demoData: "demo data",
  },
  experience: {
    eyebrow: "Experience",
    heading: "Where I've worked",
    jobs: [
      {
        period: "2024 – present",
        role: "Software Developer",
        company: "SmartBear",
        products: [
          {
            name: "Reflect",
            description: "AI-powered automated testing platform",
            duration: "15 months",
            stack: "Vue.js · TypeScript · Scala · MySQL · AWS · Terraform",
            bullets: [
              "Added CSV upload for batch test runs with variable substitution, for clients running data-driven test suites.",
              "Designed and built, frontend and backend, a test-data lookup that became the customer support team's main tool.",
              "Implemented Amplitude analytics, centralising usage data across SmartBear products.",
              "Built about 10 reusable UI components for the Reflect Design System from Figma specs.",
            ],
          },
          {
            name: "Visual Test",
            description: "AI-powered visual comparison tool",
            duration: "9 months",
            stack: "React · Next.js · NestJS · MySQL · AWS",
            bullets: [
              "Cut security vulnerabilities by 40% through systematic dependency audits and upgrades.",
              "Added unit tests across about 70% of the codebase, reducing technical debt by 35%.",
              "Triaged customer issues with product managers and turned them into backlog items.",
            ],
          },
        ],
      },
      {
        period: "2022 – 2024",
        role: "Full Stack Developer",
        company: "Ampcasd",
        stack: "Next.js · Strapi · NestJS · GraphQL · MySQL · Tailwind CSS",
        bullets: [
          "Led a team of 4 developers building a CMS and web platform for a cultural centre in Germany, from discovery to production launch in about a year.",
          "Class registration, subscriptions, room booking and concert tickets, with PayPal, SEPA direct debit and German fiscal reporting integrations.",
          "Grew the platform to 1,600+ users and 1,800+ subscriptions sold.",
        ],
      },
      {
        period: "2019 – 2022",
        role: "Electrical Supervisor",
        company: "KNAPP",
        bullets: [
          "Supervised construction of automated warehouse and shipping systems for clients such as Tiffany, Kroger, Adidas and M&S.",
        ],
      },
    ],
    fullCv: "Full CV (PDF)",
  },
  skills: {
    eyebrow: "Skills",
    heading: "What I work with",
    groups: [
      {
        name: "Frontend",
        items: "React, Next.js, Vue.js, TypeScript, Tailwind CSS, PWA, SSR/ISR",
      },
      {
        name: "Backend",
        items:
          "Node.js, NestJS, Prisma, TypeORM, PostgreSQL, MySQL, REST, GraphQL, WebSockets, Redis, BullMQ, Scala (commercial)",
      },
      {
        name: "Cloud & DevOps",
        items: "AWS, Docker, Terraform, GitHub Actions, Caddy, VPS",
      },
      {
        name: "Quality",
        items:
          "Jest, Supertest, unit and end-to-end testing, dependency auditing",
      },
      {
        name: "Integrations",
        items: "Stripe, PayPal, SEPA Direct Debit, Amplitude, Web Push",
      },
      { name: "Tools", items: "Figma, Jira, Git" },
    ],
  },
  about: {
    eyebrow: "About",
    heading: "From warehouses to web apps",
    paragraphs: [
      "Before software I was an electrical supervisor at KNAPP, building automated warehouses for global brands. That's where I learned to work to deadlines and specs and to coordinate with people on site.",
      "Today I build web applications, and the part I enjoy most is the whole loop: understanding what a client really needs, building it and seeing it used every day. I care about tests, clear decisions and software that's simple for the people using it.",
    ],
    facts: [
      { label: "Based in", value: "Wrocław, Poland" },
      {
        label: "Education",
        value:
          "BSc, Electronics and Telecommunications, Wrocław University of Technology",
      },
      { label: "Languages", value: "Polish (native) · English (B2)" },
      {
        label: "Looking for",
        value: "Full stack or frontend role, remote or hybrid",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    heading: "Let's talk.",
    lead: "I'm looking for a full stack or frontend role. If you think I'd be a good fit for your team, write to me.",
    copy: "Copy",
    copied: "Copied",
    copyFallback: "Press ⌘C / Ctrl+C to copy",
  },
  footer: { builtWith: "Built with Next.js", source: "Source on GitHub" },
  caseStudy: {
    back: "All projects",
    meta: [
      {
        label: "Role",
        value: "Everything: requirements, UX, backend, frontend, deploy",
      },
      {
        label: "Users",
        value: "Owner, staff, trainers, horse owners, lessees",
      },
      { label: "Devices", value: "Phones, tablets, wall-mounted screens" },
    ],
    linksLabel: "Links",
    codePrivate: "Code is private",
    problem: {
      heading: "The problem",
      body: "A stable with 60+ boxes, its staff and many horse owners. Every request (“extra hay for box 12”, “turn him out at 10 tomorrow”) went through phone calls, messages and memory. Billing for extra services was done by hand at the end of the month.",
    },
    role: {
      heading: "My role",
      body: "Everything: requirements gathering with the owner, UX, backend, frontend, deployment and support. I met the client regularly, turned feedback into small iterations and shipped frequent production releases.",
    },
    built: {
      heading: "What I built",
      items: [
        {
          title: "One app for five roles",
          body: "Owner, staff, trainer, horse owner and lessee. Each role sees only what it needs, with role-based access control enforced on the API.",
        },
        {
          title: "Service orders",
          body: "Horse owners order one-off or subscription services for today or tomorrow. Staff see them on a live task board and accept, complete or cancel them.",
        },
        {
          title: "Feeding and turnout instructions",
          body: "Owners pick from a catalogue of ready-made messages. Staff see today's plan per box, and staff can change times for today only.",
        },
        {
          title: "Billing",
          body: "Monthly boarding, camera and lease fees, one-off and subscription services, net/gross VAT per box (horses billed to a company), and separate cash and bank-transfer balances. Prices are frozen on each order, so later catalogue changes never rewrite history.",
        },
        {
          title: "Scheduled jobs",
          body: "Daily tasks from subscriptions, monthly charges and payment reminders.",
        },
        {
          title: "Web Push notifications",
          body: "With an icon badge counter for staff and owners, working even when the app is closed.",
        },
      ],
    },
    users: {
      heading: "Designed for real users",
      body: "Some users are over 70, so the UI follows strict rules. Feed rooms and paddock exits have wall-mounted screens that show today's plan without anyone touching them.",
      rules: [
        { value: "18 px", label: "minimum text size" },
        { value: "48 px", label: "minimum touch target" },
        { value: "Aa", label: "status always shown as text, not just colour" },
      ],
    },
    engineering: {
      heading: "Engineering",
      items: [
        "REST API in NestJS + Prisma/PostgreSQL with email verification, password reset and secure photo uploads.",
        "**130+ unit and 100+ end-to-end tests** (Jest, Supertest), covering access rules (“a lessee can't see another lessee's fees”).",
        "CI/CD with GitHub Actions → Docker Compose on a VPS, with Caddy for automatic HTTPS, a database backup before every deploy and data-safe migrations.",
        "A decision log: every significant change is written down with the reason behind it and the options that were rejected.",
      ],
    },
    decision: {
      heading: "Key decision",
      from: "React Native (Expo)",
      to: "Installable PWA",
      title: "A PWA instead of a native app",
      body: "I started with a React Native (Expo) app. After watching how the owner actually used her phone, we switched to a single installable web app. It's one codebase for every device, needs no app store, and updates instantly. That was the right call, and I'd make it again.",
    },
    testimonial: {
      heading: "Client",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "Lorem Ipsum, owner, Stajnia Lauden",
      placeholder: "placeholder · real testimonial pending",
    },
    screens: {
      heading: "Screens",
      items: [
        { device: "tablet", caption: "Staff task board" },
        { device: "phone", caption: "Ordering a service" },
        { device: "wall screen", caption: "Feed-room display" },
        { device: "desktop", caption: "Billing" },
      ],
      placeholder: "placeholder · screenshots with demo data coming soon",
    },
    next: { label: "Next project", name: "Build Budget" },
  },
  easterEgg: { toast: "Power level: over 9000!" },
};
