# ziecina.dev — site copy (EN)

> v1 approved · 2026-10-16. Remaining placeholders (testimonial, screenshots) marked **[TODO: …]**. No phone number on the site; it stays in the CV only.

---

## Meta

- **Title:** Piotr Zięcina — Full Stack Developer (React, Next.js, NestJS, TypeScript)
- **Description:** Full Stack Developer from Wrocław with 4+ years of commercial experience. I build web apps end to end, from the first client conversation to production.

---

## Navigation

Projects · Experience · Skills · About · Contact · [PL] · **Download CV**

---

## Hero

**Badge:** Open to new opportunities

# Piotr Zięcina

### Full Stack Developer

I build web applications end to end, from talking to the client to shipping to production.
React, Next.js and Vue on the frontend; Node.js, NestJS and SQL on the backend.
4+ years of commercial experience, most recently at SmartBear.

**Buttons:** View projects · Download CV · piotr@ziecina.dev
**Icons:** GitHub · LinkedIn

**Location line:** Wrocław, Poland · open to remote and hybrid

---

## Projects

**Section intro:** Two products I designed, built and deployed on my own. One runs a real business every day; the other is open source.

### 1. Stajnia Lauden: stable management system

**Tagline:** A production web app that runs the daily work of a horse boarding stable with 60+ boxes.

**Labels:** In production · Real client · 2026 – present

**Short (card):**
The stable used to coordinate services, feeding and turnout over phone calls and paper notes. I replaced that with one web app used every day by the owner, staff, trainers, horse owners and lessees on phones, tablets and wall-mounted screens.

**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS · NestJS · Prisma · PostgreSQL · PWA & Web Push · Docker · Caddy · GitHub Actions · Jest · Supertest

**Buttons:** Read the case study → · Visit stajnialauden.pl → https://stajnialauden.pl

**Note under buttons:** Commercial product. Source code is private; I'm happy to walk through it during an interview.

#### Case study page

**The problem**
A stable with 60+ boxes, its staff and many horse owners. Every request ("extra hay for box 12", "turn him out at 10 tomorrow") went through phone calls, messages and memory. Billing for extra services was done by hand at the end of the month.

**My role**
Everything: requirements gathering with the owner, UX, backend, frontend, deployment and support. I met the client regularly, turned feedback into small iterations and shipped frequent production releases.

**What I built**
- **One app for five roles:** owner, staff, trainer, horse owner and lessee. Each role sees only what it needs, with role-based access control enforced on the API.
- **Service orders:** horse owners order one-off or subscription services for today or tomorrow. Staff see them on a live task board and accept, complete or cancel them.
- **Feeding and turnout instructions:** owners pick from a catalogue of ready-made messages. Staff see today's plan per box, and staff can change times for today only.
- **Billing:** monthly boarding, camera and lease fees, one-off and subscription services, net/gross VAT per box (horses billed to a company), and separate cash and bank-transfer balances. Prices are frozen on each order, so later catalogue changes never rewrite history.
- **Scheduled jobs:** daily tasks from subscriptions, monthly charges and payment reminders.
- **Web Push notifications** with an icon badge counter for staff and owners, working even when the app is closed.

**Designed for real users**
Some users are over 70. The UI follows strict rules: at least 18 px text, at least 48 px touch targets, and status always shown as text, not just colour. Feed rooms and paddock exits have wall-mounted screens that show today's plan without anyone touching them.

**Engineering**
- REST API in NestJS + Prisma/PostgreSQL with email verification, password reset and secure photo uploads.
- **130+ unit and 100+ end-to-end tests** (Jest, Supertest), covering access rules ("a lessee can't see another lessee's fees").
- CI/CD with GitHub Actions → Docker Compose on a VPS, with Caddy for automatic HTTPS, a database backup before every deploy and data-safe migrations.
- A decision log: every significant change is written down with the reason behind it and the options that were rejected.

**Key decision: a PWA instead of a native app**
I started with a React Native (Expo) app. After watching how the owner actually used her phone, we switched to a single installable web app. It's one codebase for every device, needs no app store, and updates instantly. That was the right call, and I'd make it again.

**Testimonial**
> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
> — Lorem Ipsum, owner, Stajnia Lauden

[TODO: replace with the real testimonial from the owner (quote + name)]

**Screenshots (approved, demo data only):** staff task board (tablet), owner's order screen (phone), wall-mounted feed-room display, billing view.
[TODO: Piotr is reviewing the app's UI layout before the screenshots are taken]

---

### 2. Build Budget: construction budget tracker

**Tagline:** Track a house build: stages, expenses against budget, documents and bank-ready PDF reports.

**Labels:** Open source · Live demo

**Short (card):**
People building a house juggle spreadsheets, receipts and bank reports. Build Budget keeps the budget, documents and construction diary in one place, shared in real time with everyone on the project.

**Stack:** Next.js · TypeScript · Tailwind CSS · TanStack Query · NestJS · Prisma · PostgreSQL · Redis · BullMQ · Socket.io · Stripe · AWS S3 · Docker · GitHub Actions

**Buttons:** Live demo → build-budget-app-web.vercel.app · Code on GitHub → github.com/softdevpz/build-budget-app

**Highlights (bullets on card or case study):**
- JWT access and refresh tokens in httpOnly cookies, with silent refresh. I found and fixed a race condition where parallel requests were refreshing the token at the same time.
- Stripe subscriptions with signature-verified webhooks. The free plan is limited to one project.
- PDF bank reports generated in the background with Redis and BullMQ.
- Real-time collaboration: project members see each other's changes live over WebSockets.
- Document uploads straight to S3 with presigned URLs, plus a construction diary with photos.
- Bilingual UI (PL/EN) with next-intl.
- CI runs unit tests (80% coverage thresholds on files with logic), end-to-end tests against a real database, and builds both apps.
- An architecture write-up in the repo explains *why* things are built the way they are.

---

## Experience

### Software Developer · SmartBear · 2024 – present

**Reflect: AI-powered automated testing platform** (15 months)
Vue.js · TypeScript · Scala · MySQL · AWS · Terraform
- Added CSV upload for batch test runs with variable substitution, for clients running data-driven test suites.
- Designed and built, frontend and backend, a test-data lookup that became the customer support team's main tool.
- Implemented Amplitude analytics, centralising usage data across SmartBear products.
- Built about 10 reusable UI components for the Reflect Design System from Figma specs.

**Visual Test: AI-powered visual comparison tool** (9 months)
React · Next.js · NestJS · MySQL · AWS
- Cut security vulnerabilities by 40% through systematic dependency audits and upgrades.
- Added unit tests across about 70% of the codebase, reducing technical debt by 35%.
- Triaged customer issues with product managers and turned them into backlog items.

### Full Stack Developer · Ampcasd · 2022 – 2024
Next.js · Strapi · NestJS · GraphQL · MySQL · Tailwind CSS
- Led a team of 4 developers building a CMS and web platform for a cultural centre in Germany, from discovery to production launch in about a year.
- Class registration, subscriptions, room booking and concert tickets, with PayPal, SEPA direct debit and German fiscal reporting integrations.
- Grew the platform to 1,600+ users and 1,800+ subscriptions sold.

### Electrical Supervisor · KNAPP · 2019 – 2022
- Supervised construction of automated warehouse and shipping systems for clients such as Tiffany, Kroger, Adidas and M&S.

**Link:** Full CV (PDF) →

---

## Skills

- **Frontend:** React, Next.js, Vue.js, TypeScript, Tailwind CSS, PWA, SSR/ISR
- **Backend:** Node.js, NestJS, Prisma, TypeORM, PostgreSQL, MySQL, REST, GraphQL, WebSockets, Redis, BullMQ, Scala (commercial)
- **Cloud & DevOps:** AWS, Docker, Terraform, GitHub Actions, Caddy, VPS
- **Quality:** Jest, Supertest, unit and end-to-end testing, dependency auditing
- **Integrations:** Stripe, PayPal, SEPA Direct Debit, Amplitude, Web Push
- **Tools:** Figma, Jira, Git

---

## About

Before software I was an electrical supervisor at KNAPP, building automated warehouses for global brands. That's where I learned to work to deadlines and specs and to coordinate with people on site. I have a BSc in Electronics and Telecommunications from Wrocław University of Technology.

Today I build web applications, and the part I enjoy most is the whole loop: understanding what a client really needs, building it and seeing it used every day. I care about tests, clear decisions and software that's simple for the people using it.

**Languages:** Polish (native) · English (B2)

---

## Contact

### Let's talk

I'm looking for a full stack or frontend role. If you think I'd be a good fit for your team, write to me.

**piotr@ziecina.dev** · LinkedIn · GitHub · Download CV

---

## Footer

© 2026 Piotr Zięcina · Built with Next.js · Source on GitHub
