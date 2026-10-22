import type { Dictionary } from "./types";

export const pl: Dictionary = {
  meta: {
    title:
      "Piotr Zięcina — Full Stack Developer (React, Next.js, NestJS, TypeScript)",
    description:
      "Full Stack Developer z Wrocławia, ponad 4 lata doświadczenia komercyjnego. Tworzę aplikacje webowe od pierwszej rozmowy z klientem aż po produkcję.",
    caseStudyTitle: "Stajnia Lauden: case study — Piotr Zięcina",
    caseStudyDescription:
      "Jak zbudowałem aplikację produkcyjną, na której opiera się codzienna praca pensjonatu dla koni z ponad 60 boksami.",
  },
  nav: {
    projects: "Projekty",
    experience: "Doświadczenie",
    skills: "Umiejętności",
    about: "O mnie",
    contact: "Kontakt",
    downloadCv: "Pobierz CV",
    menu: "Menu",
    themeToggle: "Przełącz tryb ciemny",
    languageLabel: "Język",
    otherLanguageName: "English",
  },
  hero: {
    badge: "Otwarty na nowe propozycje",
    name: "Piotr Zięcina",
    role: "Full Stack Developer",
    lede: "Tworzę aplikacje webowe od początku do końca: od rozmowy z klientem po wdrożenie na produkcję. Na frontendzie React, Next.js i Vue; na backendzie Node.js, NestJS i SQL. **Ponad 4 lata doświadczenia komercyjnego**, ostatnio w SmartBear.",
    viewProjects: "Zobacz projekty",
    location: "Wrocław · praca zdalna lub hybrydowa",
    portraitAlt: "Zdjęcie Piotra Zięciny",
    portraitCaption: [
      "React · Next.js",
      "Node.js · NestJS",
      "JavaScript · TypeScript",
      "MySQL · PostgreSQL",
    ],
  },
  projects: {
    eyebrow: "Projekty",
    heading: "Zbudowane, wdrożone, używane.",
    intro:
      "Dwa produkty, które samodzielnie zaprojektowałem, zbudowałem i wdrożyłem. Jeden codziennie obsługuje prawdziwą firmę, drugi jest open source.",
    stajnia: {
      name: "Stajnia Lauden",
      tagline:
        "Aplikacja produkcyjna, na której opiera się codzienna praca pensjonatu dla koni z ponad 60 boksami.",
      labels: {
        production: "Na produkcji",
        client: "Prawdziwy klient",
        period: "2026 – obecnie",
      },
      short:
        "Stajnia koordynowała usługi, karmienie i wyprowadzanie koni przez komunikatory w mediach społecznościowych. Zastąpiłem to jedną aplikacją webową. Codziennie korzystają z niej właściciele (administratorzy), personel, trenerzy, właściciele koni i dzierżawcy, na telefonach, tabletach i ekranach na ścianach.",
      facts: [
        { value: "5", label: "ról użytkowników" },
        { value: "130+", label: "testów jednostkowych" },
        { value: "100+", label: "testów e2e" },
        { value: "PWA", label: "+ Web Push" },
      ],
      stack:
        "Next.js (App Router) · TypeScript · Tailwind CSS · NestJS · Prisma · PostgreSQL · PWA i Web Push · Docker · Caddy · GitHub Actions · Jest · Supertest",
      readCaseStudy: "Przeczytaj case study",
      privateNote:
        "Produkt komercyjny, kod źródłowy jest prywatny. Chętnie pokażę go i omówię na rozmowie rekrutacyjnej.",
      screenshot: {
        src: "/images/stajnia/task-board.webp",
        alt: "Tablica zadań personelu w Stajni Lauden: siatka ponumerowanych boksów z wyróżnionymi zadaniami",
        label: "dane demo · szczegóły zamazane",
      },
    },
    buildBudget: {
      name: "Build Budget",
      tagline:
        "Kontrola budowy domu: etapy, wydatki na tle budżetu, dokumenty i raporty PDF dla banku.",
      labels: { openSource: "Open source", liveDemo: "Demo na żywo" },
      short:
        "Budując dom, żongluje się arkuszami, paragonami i raportami dla banku. Build Budget trzyma budżet, dokumenty i dziennik budowy w jednym miejscu i na bieżąco udostępnia je wszystkim osobom w projekcie.",
      highlights: [
        "Tokeny JWT (access i refresh) w ciasteczkach httpOnly z cichym odświeżaniem. Wykryłem i naprawiłem wyścig (race condition), w którym równoległe żądania jednocześnie odświeżały token.",
        "Subskrypcje Stripe z webhookami weryfikowanymi podpisem. Plan darmowy jest ograniczony do jednego projektu.",
        "Raporty PDF dla banku generowane w tle (Redis + BullMQ).",
        "Współpraca w czasie rzeczywistym: członkowie projektu widzą swoje zmiany na żywo (WebSockets).",
        "Pliki wysyłane prosto do S3 przez presigned URL, do tego dziennik budowy ze zdjęciami.",
        "Interfejs po polsku i angielsku (next-intl).",
        "CI uruchamia testy jednostkowe (próg pokrycia 80% dla plików z logiką), testy e2e na prawdziwej bazie i build obu aplikacji.",
        "W repozytorium jest opis architektury, który wyjaśnia, *dlaczego* projekt jest zbudowany właśnie tak.",
      ],
      moreHighlights: "Więcej szczegółów",
      lessHighlights: "Pokaż mniej",
      stack:
        "Next.js · TypeScript · Tailwind CSS · TanStack Query · NestJS · Prisma · PostgreSQL · Redis · BullMQ · Socket.io · Stripe · AWS S3 · Docker · GitHub Actions",
      demoButton: "Demo",
      codeButton: "Kod na GitHubie",
      budget: {
        title: "Dom w Sobótce",
        meta: "budżet · PLN",
        spentOf: "Wydano z 780 000",
        stages: [
          { name: "Fundamenty", percent: 98 },
          { name: "Ściany", percent: 107 },
          { name: "Dach", percent: 71 },
          { name: "Okna", percent: 34 },
          { name: "Instalacje", percent: 8 },
        ],
        presence: "2 osoby edytują teraz",
      },
    },
    demoData: "dane demo",
  },
  experience: {
    eyebrow: "Doświadczenie",
    heading: "Gdzie pracowałem",
    jobs: [
      {
        period: "2024 – obecnie",
        role: "Software Developer",
        company: "SmartBear",
        products: [
          {
            name: "Reflect",
            description: "platforma do automatycznego testowania z AI",
            duration: "15 miesięcy",
            stack: "Vue.js · TypeScript · Scala · MySQL · AWS · Terraform",
            bullets: [
              "Dodałem wgrywanie plików CSV do wsadowego uruchamiania testów z podstawianiem zmiennych, dla klientów z testami opartymi na danych.",
              "Samodzielnie zaprojektowałem i zbudowałem (frontend i backend) wyszukiwarkę danych testu, która stała się głównym narzędziem działu wsparcia klienta.",
              "Wdrożyłem analitykę Amplitude, zbierając dane o użyciu z różnych produktów SmartBear w jednym miejscu.",
              "Zbudowałem około 10 komponentów wielokrotnego użytku dla Reflect Design System na podstawie projektów w Figmie.",
            ],
          },
          {
            name: "Visual Test",
            description: "narzędzie do wizualnego porównywania obrazów z AI",
            duration: "9 miesięcy",
            stack: "React · Next.js · NestJS · MySQL · AWS",
            bullets: [
              "Zmniejszyłem liczbę podatności bezpieczeństwa o 40% dzięki regularnym audytom i aktualizacjom zależności.",
              "Dodałem testy jednostkowe obejmujące około 70% kodu, co zmniejszyło dług techniczny o 35%.",
              "Analizowałem zgłoszenia klientów i razem z product managerami zamieniałem je w zadania w backlogu.",
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
          "Prowadziłem 4-osobowy zespół, który zbudował CMS i platformę webową dla centrum kultury w Niemczech, od analizy potrzeb do startu produkcyjnego w około rok.",
          "Zapisy na zajęcia, karnety, rezerwacje sal i bilety na koncerty, z integracjami PayPal, polecenia zapłaty SEPA i niemieckiego systemu fiskalnego.",
          "Platforma urosła do ponad 1600 użytkowników i ponad 1800 sprzedanych karnetów.",
        ],
      },
      {
        period: "2019 – 2022",
        role: "Electrical Supervisor",
        company: "KNAPP",
        bullets: [
          "Nadzorowałem budowę zautomatyzowanych magazynów i systemów wysyłkowych dla klientów takich jak Tiffany, Kroger, Adidas i M&S.",
        ],
      },
    ],
    fullCv: "Pełne CV (PDF)",
  },
  skills: {
    eyebrow: "Umiejętności",
    heading: "Z czym pracuję",
    groups: [
      {
        name: "Frontend",
        items: "React, Next.js, Vue.js, TypeScript, Tailwind CSS, PWA, SSR/ISR",
      },
      {
        name: "Backend",
        items:
          "Node.js, NestJS, Prisma, TypeORM, PostgreSQL, MySQL, REST, GraphQL, WebSockets, Redis, BullMQ, Scala (komercyjnie)",
      },
      {
        name: "Chmura i DevOps",
        items: "AWS, Docker, Terraform, GitHub Actions, Caddy, VPS",
      },
      {
        name: "Jakość",
        items: "Jest, Supertest, testy jednostkowe i e2e, audyt zależności",
      },
      {
        name: "Integracje",
        items: "Stripe, PayPal, SEPA Direct Debit, Amplitude, Web Push",
      },
      { name: "Narzędzia", items: "Figma, Jira, Git" },
    ],
  },
  about: {
    eyebrow: "O mnie",
    heading: "Od magazynów do aplikacji webowych",
    paragraphs: [
      "Zanim zająłem się oprogramowaniem, byłem kierownikiem robót elektrycznych w KNAPP i budowałem zautomatyzowane magazyny dla światowych marek. Tam nauczyłem się pracować pod terminy i specyfikacje oraz dogadywać się z ludźmi na budowie.",
      "Dziś tworzę aplikacje webowe, a najbardziej lubię cały cykl: zrozumieć, czego klient naprawdę potrzebuje, zbudować to i zobaczyć, że ludzie używają tego na co dzień. Zależy mi na testach, przemyślanych decyzjach i oprogramowaniu, które jest proste dla użytkowników.",
    ],
    facts: [
      { label: "Miejsce", value: "Wrocław" },
      {
        label: "Wykształcenie",
        value:
          "Inżynier elektroniki i telekomunikacji, Politechnika Wrocławska",
      },
      { label: "Języki", value: "polski (ojczysty) · angielski (B2)" },
      {
        label: "Szukam",
        value: "Roli full stack lub frontend, zdalnie lub hybrydowo",
      },
    ],
  },
  contact: {
    eyebrow: "Kontakt",
    heading: "Porozmawiajmy.",
    lead: "Szukam pracy jako full stack lub frontend developer. Jeśli uważasz, że pasowałbym do Twojego zespołu, napisz do mnie.",
    copy: "Kopiuj",
    copied: "Skopiowano",
    copyFallback: "Naciśnij ⌘C / Ctrl+C, aby skopiować",
  },
  footer: { builtWith: "Zbudowane w Next.js", source: "Kod na GitHubie" },
  caseStudy: {
    back: "Wszystkie projekty",
    meta: [
      {
        label: "Rola",
        value: "Wszystko: wymagania, UX, backend, frontend, wdrożenie",
      },
      {
        label: "Użytkownicy",
        value: "Właściciele (administratorzy), personel, trenerzy, właściciele koni, dzierżawcy",
      },
      { label: "Urządzenia", value: "Telefony, tablety, ekrany na ścianach" },
    ],
    linksLabel: "Linki",
    codePrivate: "Kod jest prywatny",
    problem: {
      heading: "Problem",
      body: "Stajnia z ponad 60 boksami, personel i wielu właścicieli koni. Każda prośba („dodatkowe siano dla boksu 12”, „jutro wyprowadzić o 10”) szła przez komunikatory w mediach społecznościowych i pamięć. Dodatkowe usługi rozliczano ręcznie na koniec miesiąca.",
    },
    role: {
      heading: "Moja rola",
      body: "Wszystko: zbieranie wymagań z właścicielką, UX, backend, frontend, wdrożenie i utrzymanie. Regularnie spotykałem się z klientką, zamieniałem uwagi w małe iteracje i często wypuszczałem nowe wersje na produkcję.",
    },
    built: {
      heading: "Co zbudowałem",
      items: [
        {
          title: "Jedna aplikacja dla pięciu ról",
          body: "Administrator, personel, trener, właściciel konia i dzierżawca. Każda rola widzi tylko to, czego potrzebuje, a uprawnienia (RBAC) są pilnowane po stronie API.",
        },
        {
          title: "Zamówienia usług",
          body: "Właściciele koni zamawiają usługi jednorazowe lub w abonamencie, na dziś albo na jutro. Personel widzi je na tablicy zadań odświeżanej na bieżąco, gdzie je przyjmuje, wykonuje lub odwołuje.",
        },
        {
          title: "Komunikaty o karmieniu i wyprowadzaniu",
          body: "Właściciele wybierają gotowe komunikaty z katalogu, a personel widzi plan dnia dla każdego boksu. Personel może zmienić godziny tylko na bieżący dzień.",
        },
        {
          title: "Rozliczenia",
          body: "Pensjonat, kamery i dzierżawy co miesiąc, usługi jednorazowe i abonamentowe, ceny netto/brutto z VAT ustawiane dla boksu (koń „na firmę”), osobne salda gotówki i przelewów. Cena zapisuje się na zamówieniu, więc późniejsza zmiana cennika nie zmienia historii.",
        },
        {
          title: "Zadania cykliczne (cron)",
          body: "Codzienne zadania z abonamentów, comiesięczne opłaty i przypomnienia o płatnościach.",
        },
        {
          title: "Powiadomienia Web Push",
          body: "Z licznikiem na ikonie aplikacji, dla personelu i właścicieli, działające także przy zamkniętej aplikacji.",
        },
      ],
    },
    users: {
      heading: "Zaprojektowane dla prawdziwych użytkowników",
      body: "Wśród użytkowników jest wiele osób starszych, więc interfejs trzyma się ścisłych zasad. W paszarni i przy wyjściu na padoki wiszą ekrany, które bez dotykania pokazują plan na dziś.",
      rules: [
        { value: "18 px", label: "minimalny rozmiar tekstu" },
        { value: "48 px", label: "minimalny rozmiar przycisku" },
        {
          value: "Aa",
          label: "status zawsze opisany tekstem, a nie samym kolorem",
        },
      ],
    },
    engineering: {
      heading: "Inżynieria",
      items: [
        "REST API w NestJS + Prisma/PostgreSQL z weryfikacją e-mail, resetem hasła i bezpiecznym przesyłaniem zdjęć.",
        "**Ponad 130 testów jednostkowych i ponad 100 testów end-to-end** (Jest, Supertest), które sprawdzają też uprawnienia („dzierżawca nie zobaczy cudzych opłat”).",
        "CI/CD w GitHub Actions → Docker Compose na VPS. Caddy daje automatyczny HTTPS, przed każdym wdrożeniem robi się kopia bazy, a migracje nie niszczą danych.",
        "Dziennik decyzji: każda istotna zmiana jest zapisana razem z powodem i odrzuconymi opcjami.",
      ],
    },
    decision: {
      heading: "Kluczowa decyzja",
      from: "React Native (Expo)",
      to: "PWA do zainstalowania",
      title: "PWA zamiast aplikacji natywnej",
      body: "Zacząłem od aplikacji w React Native (Expo). Po tym, jak zobaczyłem, jak właścicielka naprawdę korzysta z telefonu, przeszliśmy na jedną aplikację webową, którą można zainstalować na ekranie głównym. Jeden kod dla każdego urządzenia, bez sklepu z aplikacjami i z natychmiastowymi aktualizacjami. To była dobra decyzja i podjąłbym ją ponownie.",
    },
    testimonial: {
      heading: "Opinia klientki",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "Lorem Ipsum, właścicielka, Stajnia Lauden",
      placeholder: "placeholder · prawdziwa opinia w drodze",
    },
    screens: {
      heading: "Ekrany",
      note: "Zrzuty ze środowiska demo. Imiona, e-maile, imiona koni i kwoty są zamazane.",
      items: [
        { src: "/images/stajnia/task-board.webp", alt: "Tablica zadań personelu z ponumerowanymi boksami i zadaniami", caption: "Personel · tablica zadań na tablecie", wide: true },
        { src: "/images/stajnia/feed-room.webp", alt: "Ekran w paszarni ze zmianami w karmieniu na śniadanie, obiad i kolację", caption: "Paszarnia · ekran ścienny ze zmianami w karmieniu na dziś", wide: true },
        { src: "/images/stajnia/owner-boxes.webp", alt: "Ekran główny właściciela konia z ogłoszeniami, dzierżawami i boksami", caption: "Właściciel konia · boksy i ogłoszenia" },
        { src: "/images/stajnia/order-service.webp", alt: "Zamawianie jednorazowej usługi z katalogu", caption: "Właściciel konia · zamawianie usługi" },
        { src: "/images/stajnia/admin-users.webp", alt: "Lista użytkowników w panelu administratora z rolami i saldami", caption: "Administrator · użytkownicy i salda" },
        { src: "/images/stajnia/billing.webp", alt: "Rozliczenia jednego klienta z saldem i historią wpłat", caption: "Administrator · rozliczenia klienta" },
      ],
    },
    next: { label: "Następny projekt", name: "Build Budget" },
  },
  easterEgg: { toast: "Poziom mocy: ponad 9000!" },
};
