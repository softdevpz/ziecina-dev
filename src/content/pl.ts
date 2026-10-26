import type { Dictionary } from "./types";

export const pl: Dictionary = {
  meta: {
    title:
      "Piotr Zięcina — Full Stack Developer (React, Next.js, NestJS, TypeScript)",
    description:
      "Full Stack Developer z Wrocławia, ponad 4 lata doświadczenia komercyjnego. Tworzę aplikacje webowe od początku do końca: od warsztatów produktowych z klientem po wdrożenie na produkcję.",
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
    lede: "Tworzę aplikacje webowe od początku do końca: od warsztatów produktowych z klientem po wdrożenie na produkcję. Na frontendzie React, Next.js i Vue; na backendzie Node.js, NestJS i SQL. **Ponad 4 lata doświadczenia komercyjnego**, ostatnio w SmartBear.",
    viewProjects: "Zobacz projekty",
    location: "Wrocław · praca zdalna lub hybrydowa",
    portraitAlt: "Zdjęcie Piotra Zięciny",
    portraitCaption: [
      "React · Next.js",
      "Node.js · NestJS",
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
        "Buduję własny dom i chciałem mieć wszystko o nim w jednym miejscu. Build Budget dzieli budowę na etapy i przy każdym trzyma budżet, rachunki, dokumenty i zdjęcia, na bieżąco udostępnione wszystkim osobom w projekcie.",
      highlights: [
        "Tokeny JWT (access i refresh) w ciasteczkach httpOnly z cichym odświeżaniem. Wykryłem i naprawiłem wyścig (race condition), w którym równoległe żądania jednocześnie odświeżały token.",
        "Subskrypcje Stripe z webhookami weryfikowanymi podpisem. Plan darmowy jest ograniczony do jednego projektu.",
        "Raporty PDF dla banku generowane w tle (Redis + BullMQ).",
        "Współpraca w czasie rzeczywistym: członkowie projektu widzą swoje zmiany na żywo (WebSockets).",
        "Pliki wysyłane prosto do S3 przez presigned URL, do tego dziennik budowy ze zdjęciami.",
        "Interfejs po polsku i angielsku (next-intl).",
        "CI uruchamia testy jednostkowe (próg pokrycia 80% dla plików z logiką), testy e2e na prawdziwej bazie i build obu aplikacji.",
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
        summary: "Dwa produkty do testowania z AI: Reflect (Vue.js, Scala) i Visual Test (React, Next.js, NestJS).",
        results: ["Zaprojektowałem i zbudowałem (frontend i backend) wyszukiwarkę danych testu, która stała się głównym narzędziem działu wsparcia klienta.", "Zmniejszyłem liczbę podatności bezpieczeństwa o 40% dzięki regularnym audytom i aktualizacjom zależności."],
      },
      {
        period: "2022 – 2024",
        role: "Full Stack Developer",
        company: "Ampcasd",
        summary: "Prowadziłem 4-osobowy zespół, który zbudował CMS i platformę z zapisami, rezerwacjami i płatnościami dla centrum kultury w Niemczech, od analizy potrzeb do startu w około rok.",
        results: ["Platforma urosła do ponad 1600 użytkowników i ponad 1800 sprzedanych karnetów."],
      },
      {
        period: "2019 – 2022",
        role: "Electrical Supervisor",
        company: "KNAPP",
        summary: "Nadzorowałem budowę zautomatyzowanych magazynów i systemów wysyłkowych dla klientów takich jak Tiffany, Kroger, Adidas i M&S.",
        results: [],
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
  caseStudyUi: { back: "Wszystkie projekty", linksLabel: "Linki" },
  caseStudies: {
    stajnia: {
      seo: { title: "Stajnia Lauden: case study — Piotr Zięcina", description: "Jak zbudowałem aplikację produkcyjną, na której opiera się codzienna praca pensjonatu dla koni z ponad 60 boksami." },
      chips: [{ text: "Na produkcji", live: true }, { text: "Prawdziwy klient" }, { text: "2026 – obecnie" }],
      name: "Stajnia Lauden",
      tagline: "Aplikacja produkcyjna, na której opiera się codzienna praca pensjonatu dla koni z ponad 60 boksami.",
      links: [{ label: "stajnialauden.pl", href: "https://stajnialauden.pl" }],
      linksNote: "Kod jest prywatny",
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
      body: "Wśród użytkowników jest wiele osób starszych, więc interfejs trzyma się ścisłych zasad: tekst ma co najmniej 18 px, przyciski i inne elementy do dotknięcia co najmniej 48 px, a status jest zawsze opisany słowami, nigdy samym kolorem. W paszarni i przy wyjściu na padoki wiszą ekrany, które bez dotykania pokazują plan na dziś.",
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
      next: { label: "Następny projekt", name: "Build Budget", slug: "buildBudget" },
    },
    buildBudget: {
      seo: { title: "Build Budget: case study — Piotr Zięcina", description: "Jak zbudowałem Build Budget, aplikację open source do kontroli budowy domu: budżet etapów, dokumenty, raporty PDF dla banku i współpraca na żywo." },
      chips: [{ text: "Open source" }, { text: "Demo na żywo", live: true }, { text: "Projekt własny" }],
      name: "Build Budget",
      tagline: "Kontrola budowy domu: etapy, wydatki na tle budżetu, dokumenty i raporty PDF dla banku.",
      meta: [{ label: "Rola", value: "Wszystko: produkt, API, frontend, infrastruktura, CI" }, { label: "Stack", value: "Next.js · NestJS · PostgreSQL · Redis" }, { label: "Hosting", value: "Vercel (web) · Railway (API)" }],
      links: [{ label: "Demo", href: "https://build-budget-app-web.vercel.app" }, { label: "GitHub", href: "https://github.com/softdevpz/build-budget-app" }],
      linksNote: "Kod jest publiczny",
      problem: { heading: "Problem", body: "Buduję własny dom, a budowa produkuje mnóstwo informacji: telefony do wykonawców, zdjęcia z placu budowy, rachunki, faktury i pozwolenia. Każdy etap ma swój stos, a w praktyce wszystko było rozrzucone po arkuszach, galerii w telefonie i papierowych segregatorach. Chciałem jednego miejsca, w którym przechowam to wszystko, uporządkowane według etapów i obok budżetu, tak żeby znaleźć wszystko w kilka sekund i udostępnić to każdemu, kto bierze udział w budowie." },
      role: { heading: "Moja rola", body: "Wszystko od początku do końca: zakres produktu, API w NestJS, frontend w Next.js, infrastruktura i CI. Zbudowałem go jako kompletny produkt SaaS, a nie demo CRUD-a: z porządnym logowaniem, płatnościami, zadaniami w tle, przechowywaniem plików i aktualizacjami na żywo." },
      built: {
        heading: "Co zbudowałem",
        items: [
          { title: "Budżet dla każdego etapu", body: "Budowa dzieli się na etapy, a każdy etap ma własną stronę z wydatkami, dokumentami, dziennikiem i zadaniami. Wydatki są liczone na tle planowanego budżetu, z wykresem podsumowania i ostrzeżeniem przy każdym etapie, który go przekracza." },
          { title: "Dokumenty i dziennik budowy", body: "Rachunki, faktury i pozwolenia trafiają z przeglądarki prosto do S3 przez presigned URL, więc API nie przepuszcza przez siebie ich zawartości. Każdy etap ma dziennik ze zdjęciami z budowy." },
          { title: "Raporty PDF dla banku", body: "Raporty generują się w tle (Redis, BullMQ, PDFKit), więc ciężki raport nigdy nie blokuje zapytania. Użytkownik pobiera go, gdy jest gotowy." },
          { title: "Współpraca na żywo", body: "Projekt można udostępnić z rolą właściciela albo edytora. Socket.io wysyła zmiany etapów i wydatków do wszystkich, którzy mają projekt otwarty." },
          { title: "Subskrypcje", body: "Stripe Checkout z darmowym planem ograniczonym do jednego projektu. Plan zmienia się wyłącznie przez webhooki weryfikowane podpisem." },
          { title: "Przypomnienia i porównanie kosztów", body: "Codzienne zadanie wysyła e-mailem przypomnienia o zadaniach z terminem w ciągu trzech dni. Nocne zadanie liczy anonimowy koszt m² według regionu i etapu, trzyma go w Redisie i pokazuje na publicznej stronie." },
        ],
      },
      engineering: {
        heading: "Inżynieria",
        items: [
          "Monorepo: aplikacja Next.js (App Router), API w NestJS i wspólna paczka, dzięki której zasady haseł są zdefiniowane raz dla obu stron.",
          "Tokeny JWT (access i refresh) w ciasteczkach httpOnly ustawianych przez route handlery Next.js. Uwierzytelniony proxy po cichu odświeża sesję, a przed pierwszym logowaniem trzeba potwierdzić e-mail.",
          "**Testy jednostkowe z progiem pokrycia 80%** dla plików z logiką oraz **testy end-to-end**, które uruchamiają prawdziwą aplikację na osobnej bazie. CI odpala jedne i drugie oraz buduje obie aplikacje przy każdym pushu, z Postgresem i Redisem jako kontenerami usług.",
          "Wieloetapowy obraz Dockera na node:20-slim, a nie Alpine, bo silnik zapytań Prismy potrzebuje glibc i OpenSSL. Obraz zawiera tylko API.",
          "E-maile idą lokalnie przez Mailpit, a na produkcji przez HTTPS API Resend, bo Railway blokuje wychodzący SMTP.",
          "Interfejs po polsku i angielsku (next-intl).",
        ],
      },
      decision: { heading: "Kluczowa decyzja", from: "Rotacja przy każdym odświeżeniu", to: "Idempotentne odświeżanie", title: "Naprawa wyścigu przy odświeżaniu tokenu", body: "Każdy panel na stronie projektu pobiera własne dane, więc gdy token dostępu wygasa, kilka zapytań próbuje go odświeżyć w tej samej chwili. Przy rotacji przy każdym odświeżeniu pierwsze zapytanie unieważniało token, którego pozostałe jeszcze używały, i użytkownik był wylogowywany w trakcie pracy. Odświeżanie jest teraz idempotentne: refresh token zmienia się tylko na początku nowej sesji (logowanie, potwierdzenie e-maila), więc równoległe odświeżenia kończą się sukcesem na tym samym tokenie." },
      next: { label: "Następny projekt", name: "Stajnia Lauden", slug: "stajnia" },
    },
  },
  easterEgg: { toast: "Poziom mocy: ponad 9000!" },
};
