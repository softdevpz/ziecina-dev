import type { ForBusiness } from "./types";

// Written for owners and managers of firms with roughly 10–100 people: concrete
// effects (goods, people, time, money), no tech jargon outside the "Technicznie" note.
// Prices use non-breaking spaces so "1 000 zł" never wraps.
export const forBusiness: ForBusiness = {
  seo: {
    title: "Automatyzacja procesów i systemy dla firm — Piotr Zięcina",
    description:
      "Systemy dopasowane do procesów firmy: obieg materiałów, zlecenia, rozliczenia i raporty w jednym miejscu, zintegrowane z programem księgowym. Bezpłatna rozmowa, 15–30 minut.",
  },
  hero: {
    eyebrow: "Dla firm",
    heading: "Dane z hali, magazynu i biura w jednym systemie.",
    lede: "Projektuję i wdrażam systemy szyte na miarę Twojej firmy: to system dopasowuje się do tego, jak pracujecie, a nie odwrotnie. Pracownik wpisuje dane raz, w miejscu, w którym pracuje, a stany, raporty i rozliczenia liczą się same.",
    points: [
      "Etapy, pola, dokumenty i raporty ustawione pod Twój proces",
      "Mniej ręcznego przepisywania między działami",
      "Aktualny obraz stanów, zleceń i wysyłek",
      "Integracja z programem, którego już używasz",
    ],
    book: "Umów bezpłatną rozmowę",
    call: "albo zadzwoń:",
    secondary: { label: "Zobacz przykłady ↓", href: "#przyklady" },
  },
  problems: {
    eyebrow: "Problemy, które rozwiązuję",
    heading: "Gdzie firma traci czas i pieniądze",
    items: [
      {
        title: "Te same dane wpisywane kilka razy",
        body: "Magazyn, produkcja, biuro i księgowość prowadzą własne arkusze i przepisują je między sobą.",
      },
      {
        title: "Brak aktualnego obrazu",
        body: "Żeby wiedzieć, co jest na stanie, co w realizacji i co wyjechało, trzeba kogoś zapytać.",
      },
      {
        title: "Raporty składane ręcznie",
        body: "Zużycie, wydajność, odpad i rozliczenia klientów liczy się pod koniec miesiąca z notatek.",
      },
      {
        title: "Informacja ginie między działami",
        body: "Zlecenia i zmiany krążą mailem i telefonem, a błędy wychodzą dopiero u klienta.",
      },
      {
        title: "Proces zależy od jednej osoby",
        body: "Kiedy jej nie ma, nikt nie wie, jak coś policzyć albo gdzie szukać.",
      },
      {
        title: "Gotowy program nie pasuje",
        body: "Firma dopasowuje się do programu albo obchodzi go w Excelu.",
      },
    ],
  },
  services: {
    eyebrow: "Co robię",
    heading: "Trzy obszary, w których pomagam",
    items: [
      {
        title: "Obieg materiałów i produkcji",
        body: "Przyjęcie dostawy, zużycie i wyprodukowana ilość na każdym etapie, odpad, wydanie do klienta. Stany na bieżąco i śledzenie partii: wiesz, z której dostawy powstał towar, który pojechał do klienta. Na hali działa na tablecie lub telefonie, z kodami QR i dużymi przyciskami.",
        more: "Więcej o systemach dla produkcji",
      },
      {
        title: "Zlecenia, grafiki i rozliczenia",
        body: "Zamówienia od klientów trafiają od razu na listę zadań zespołu. Grafiki, abonamenty i usługi dodatkowe rozliczają się automatycznie, a klient widzi swoje saldo i historię.",
      },
      {
        title: "Integracje i automatyzacja",
        body: "Połączenie z programem księgowym lub magazynowym, eksport dokumentów dla biura rachunkowego, automatyczne raporty i powiadomienia. Nie zastępuję tego, co działa, tylko dokładam to, czego brakuje.",
      },
    ],
  },
  tailored: {
    eyebrow: "Szyte na miarę",
    heading: "System dopasowany do firmy, nie firma do systemu",
    intro:
      "Gotowy program zakłada, że każda firma pracuje tak samo. Ja zaczynam od tego, jak pracuje Twoja, i prawie każdy element ustawiamy pod Wasze warunki.",
    items: [
      {
        title: "Twoje etapy i nazwy",
        body: "Kolejne kroki procesu, statusy i nazewnictwo takie, jakich używacie na co dzień, a nie wymyślone przez producenta programu.",
      },
      {
        title: "Twoje dokumenty i pola",
        body: "Formularze mają tylko te pola, których potrzebujecie. Dokumenty wydania, protokoły i zestawienia wyglądają tak, jak Wasze dziś.",
      },
      {
        title: "Twoje zasady liczenia",
        body: "Cenniki, rabaty, normy zużycia i sposób rozliczania klientów działają według Waszych reguł, także tych nietypowych.",
      },
      {
        title: "Twoje role i ekrany",
        body: "Magazynier, brygadzista, biuro i właściciel widzą każdy swój ekran, z tym, czego naprawdę potrzebują.",
      },
      {
        title: "Ustawienia w Twoich rękach",
        body: "To, co często się zmienia, na przykład ceny, listy materiałów, usługi czy pracowników, zmieniasz sam w panelu, bez dzwonienia do mnie.",
      },
      {
        title: "Rośnie razem z firmą",
        body: "Nowy produkt, nowy dział, inny sposób pracy? System zmienia się razem z Wami, zamiast blokować zmiany.",
      },
    ],
    example:
      "Przykład: w Stajni Lauden zmiany w karmieniu pokazują się na telewizorze w paszarni, a prośby właścicieli na ekranie przy wyjściu na padok, bo tam personel ich potrzebuje. Takich ekranów nie ma żaden gotowy program dla stajni.",
  },
  audience: {
    eyebrow: "Dla kogo",
    heading: "Z kim pracuję",
    intro:
      "Z firmami produkcyjnymi, handlowymi i usługowymi, zwykle od 10 do 100 osób, w których o zmianach decyduje właściciel albo kierownik.",
    columns: ["Branża", "Typowy problem, który rozwiązuję"],
    rows: [
      { industry: "Produkcja i przetwórstwo", problem: "Ile materiału weszło, ile wyszło wyrobu, gdzie jest odpad" },
      {
        industry: "Hurtownie, dystrybucja, magazyny",
        problem: "Stany, przyjęcia i wydania widoczne na bieżąco dla biura i handlowców",
      },
      {
        industry: "Firmy instalacyjne i budowlane",
        problem: "Zlecenia, ekipy, materiały i protokoły w jednym miejscu zamiast w arkuszu",
      },
      {
        industry: "Firmy usługowe z abonamentami",
        problem: "Grafiki, usługi dodatkowe i miesięczne rozliczenia klientów liczone automatycznie",
      },
    ],
    note: "Nie widzisz swojej branży? Opowiedz, jak wygląda Twój proces. W rozmowie ocenimy, czy własny system ma sens.",
  },
  example: {
    eyebrow: "Przykłady",
    heading: "Jak to wygląda w praktyce",
    scenario: {
      label: "Scenariusz demonstracyjny",
      title: "Obieg materiałów w zakładzie",
      intro: "Tak może wyglądać dzień pracy z systemem:",
      steps: [
        "Przyjeżdża dostawa. Magazynier wybiera dostawcę i materiał z listy, wpisuje ilość i robi zdjęcie dokumentu. System nadaje numer partii.",
        "Pracownik na stanowisku skanuje kod partii, wpisuje, ile materiału pobrał, ile wyrobu powstało i ile jest odpadu.",
        "Przy wysyłce wybiera klienta i towar, a system drukuje dokument wydania i zdejmuje towar ze stanu.",
        "Właściciel widzi na bieżąco stany, wydajność i odpad, a przy reklamacji w minutę sprawdza, z której dostawy pochodził towar.",
      ],
      more: "Więcej o systemach dla produkcji",
    },
    stajnia: {
      label: "Wdrożenie · Stajnia Lauden",
      title: "Pensjonat dla koni, ponad 60 boksów",
      before: {
        label: "Było",
        body: "Excel, papier, prośby klientów przez Messengera i pamięć personelu, usługi dodatkowe liczone ręcznie na koniec miesiąca.",
      },
      now: {
        label: "Jest",
        body: "Klienci zamawiają usługi w aplikacji, personel pracuje z tablicy zadań i ekranów w budynku, rozliczenia i salda liczą się automatycznie.",
      },
      result: {
        label: "Efekt",
        body: "Cała stajnia przeszła na pracę w aplikacji w niecałe dwa tygodnie. Korzystają z niej osoby w wieku od 12 do 82 lat.",
      },
      testimonial: {
        quote:
          "Wcześniej działaliśmy w Excelu i na papierze, a teraz mamy wszystko w jednym miejscu. Od początku rozumiał nasze potrzeby i potrafił przełożyć je na konkretne, praktyczne rozwiązania. […] Wszystko jest przemyślane, wygodne i dopasowane do specyfiki naszej działalności.",
        author: "Właścicielka, Stajnia Lauden",
        link: "Przeczytaj całą opinię",
      },
      photosNote:
        "Tak to działa w stajni: tablet dla personelu i telewizory, na których każdy od razu widzi, co się zmieniło. Imiona koni są zamazane.",
      photos: [
        { src: "/images/stajnia/photo-tablet.webp", alt: "Tablet przymocowany do ściany w stajni z tablicą zadań personelu", caption: "Tablet na ścianie w stajni · tablica zadań dla personelu", wide: true },
        { src: "/images/stajnia/photo-feed-room.webp", alt: "Telewizor w paszarni z planem zmian w karmieniu na śniadanie, obiad i kolację", caption: "Paszarnia · zmiany w karmieniu na dziś" },
        { src: "/images/stajnia/photo-walk-out.webp", alt: "Telewizor przy wyjściu na padok z prośbami właścicieli dla poszczególnych boksów", caption: "Wyjście na padok · prośby właścicieli" },
      ],
      screensNote: "Zrzuty ze środowiska demo i z działającej aplikacji. Dane osobowe i kwoty są zamazane.",
      screens: [
        { src: "/images/stajnia/order-service.webp", alt: "Zamawianie jednorazowej usługi z katalogu", caption: "Klient · zamawianie usługi" },
        { src: "/images/stajnia/billing.webp", alt: "Rozliczenia jednego klienta z saldem i historią wpłat", caption: "Właścicielka · rozliczenia klienta" },
      ],
      caseStudy: "Przeczytaj pełne case study",
      tech: {
        label: "Technicznie",
        body: "Aplikacja webowa PWA (Next.js, NestJS, PostgreSQL), pięć ról z uprawnieniami pilnowanymi po stronie serwera, ponad 230 testów automatycznych, automatyczna kopia bazy przed każdą aktualizacją, szyfrowane połączenie HTTPS.",
      },
    },
  },
  process: {
    eyebrow: "Jak wygląda współpraca",
    heading: "Od rozmowy do działającego systemu",
    steps: [
      {
        title: "Bezpłatna rozmowa, 15–30 minut",
        body: "Mówię wprost, czy własny system ma sens, czy wystarczy gotowy program.",
      },
      {
        title: "Analiza procesu, od 1 000 zł netto",
        body: "Na miejscu lub online, razem z osobami, które wykonują pracę. Dostajesz opis procesu, zakres, cenę i termin na piśmie. Koszt analizy odliczam od wdrożenia.",
      },
      {
        title: "Pilotaż jednego procesu",
        body: "Zaczynamy od tego, co daje najwięcej. Pierwsza działająca wersja po kilku tygodniach.",
      },
      {
        title: "Budowa małymi krokami",
        body: "Pokaz postępów co 1–2 tygodnie, zmiany na bieżąco.",
      },
      {
        title: "Wdrożenie",
        body: "Przeniesienie danych, szkolenie zespołu, wsparcie w pierwszych tygodniach.",
      },
      {
        title: "Utrzymanie i rozwój",
        body: "Serwer, kopie zapasowe, poprawki i kolejne funkcje, gdy firma ich potrzebuje.",
      },
    ],
  },
  pricing: {
    eyebrow: "Ile to kosztuje",
    heading: "Najpierw analiza, potem cena na piśmie",
    rows: [
      { item: "Rozmowa wstępna", price: "bezpłatnie", includes: "15–30 minut, telefonicznie lub online" },
      {
        item: "Analiza procesu i wycena",
        price: "od 1 000 zł",
        includes: "opis procesu, zakres, cena i termin na piśmie; koszt odliczam od wdrożenia",
      },
      {
        item: "Wdrożenie",
        price: "po analizie",
        includes: "cenę ustalamy podczas planowania systemu, na podstawie zakresu z analizy",
      },
      { item: "Utrzymanie", price: "od 400 zł / mies.", includes: "serwer, kopie zapasowe, poprawki i wsparcie" },
      { item: "Rozbudowa", price: "150 zł / h", includes: "nowe funkcje; większe zmiany wyceniam z góry" },
    ],
    note: "Ceny netto. Cenę wdrożenia dostajesz na piśmie, zanim cokolwiek zaczniemy.",
  },
  security: {
    eyebrow: "Bezpieczeństwo i formalności",
    heading: "System należy do Twojej firmy",
    items: [
      {
        title: "Prawa autorskie",
        body: "Umowa przenosi je na firmę, a kod jest w repozytorium, do którego masz dostęp.",
      },
      {
        title: "Dane",
        body: "Serwer w Unii Europejskiej, szyfrowane połączenie, automatyczne kopie zapasowe. Podpisujemy umowę powierzenia przetwarzania danych (RODO).",
      },
      {
        title: "Dostępy",
        body: "Każdy pracownik widzi tylko to, czego potrzebuje. Uprawnienia są sprawdzane po stronie serwera.",
      },
      {
        title: "Jakość",
        body: "Testy automatyczne przed każdą aktualizacją i kopia bazy przed wdrożeniem zmian.",
      },
      {
        title: "Ciągłość",
        body: "Dokumentacja i testy pozwalają przejąć system innemu programiście. Dane możesz wyeksportować w każdej chwili.",
      },
      {
        title: "Reakcja na awarię",
        body: "Zgłaszasz awarię telefonicznie lub mailowo, a ja zajmuję się nią od razu.",
      },
    ],
  },
  faq: {
    eyebrow: "Najczęstsze pytania",
    heading: "Zanim zadzwonisz",
    items: [
      {
        q: "Mamy już program księgowy lub magazynowy. Musimy go wymienić?",
        a: "Nie. Zwykle dokładam to, czego brakuje, i przekazuję dane do programu, którego używacie.",
      },
      {
        q: "Czym to się różni od gotowego programu?",
        a: "Gotowy program ma z góry ustalone etapy, pola i raporty, więc to firma musi się do niego dopasować. Tu jest odwrotnie: system powstaje pod Wasz proces, a to, co często się zmienia, ustawiacie sami w panelu.",
      },
      {
        q: "Czy to się opłaca?",
        a: "Opłaca się, gdy oszczędza godziny pracy co miesiąc albo ogranicza kosztowne błędy. Liczymy to w analizie. Jeśli wystarczy gotowy program, powiem to wprost.",
      },
      {
        q: "Ile trwa wdrożenie?",
        a: "Pilotaż jednego procesu zwykle kilka tygodni. Czas pełnego systemu zależy od zakresu i ustalamy go na piśmie po analizie.",
      },
      {
        q: "Czy pracownicy na hali sobie poradzą?",
        a: "Tak. Ekrany projektuję pod szybką pracę: duże przyciski, listy wyboru, skanowanie kodów zamiast pisania. Szkolenie zespołu jest w cenie.",
      },
      {
        q: "Co, jeśli przestaniesz się tym zajmować?",
        a: "Kod i dane należą do firmy, są udokumentowane i przetestowane, więc system może przejąć inny programista.",
      },
      {
        q: "Czy trzeba coś instalować?",
        a: "Nie. System działa w przeglądarce na komputerze, tablecie i telefonie i można go dodać do ekranu głównego.",
      },
    ],
  },
  contact: {
    eyebrow: "Kontakt",
    heading: "Porozmawiajmy o Twoim procesie",
    lead: "Opowiedz, jak dziś przepływają dane w Twojej firmie. W 15–30 minut powiem, co da się skrócić i ile może to kosztować.",
    book: "Umów bezpłatną rozmowę",
    call: "Zadzwoń",
    write: "Napisz",
    area: "Piotr Zięcina, Wrocław. Pracuję z firmami z całej Polski, a na miejsce przyjeżdżam, gdy proces trzeba zobaczyć.",
    partners: {
      text: "Prowadzisz biuro rachunkowe albo obsługujesz innych przedsiębiorców?",
      link: "Zobacz współpracę dla partnerów",
    },
  },
};
