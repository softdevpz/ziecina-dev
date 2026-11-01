import type { ForBusiness } from "./types";

// Prices use non-breaking spaces so "12 000 zł" never wraps.
export const forBusiness: ForBusiness = {
  seo: {
    title: "Systemy dla firm szyte na miarę — Piotr Zięcina",
    description:
      "Zamówienia, grafiki, rozliczenia i kontakt z klientami w jednej aplikacji. Projektuję, buduję i utrzymuję systemy dla małych i średnich firm. Umów 15-minutowe demo.",
  },
  hero: {
    eyebrow: "Dla firm",
    heading: "Twoja firma działa na Messengerze, Excelu i pamięci? Zrobię dla niej jedną aplikację.",
    lede: "Projektuję, buduję i utrzymuję systemy szyte na miarę dla małych i średnich firm: zamówienia, grafiki, rozliczenia i komunikacja z klientami w jednym miejscu. Na telefonie, tablecie i komputerze, bez instalowania niczego ze sklepu.",
    book: "Umów 15-minutowe demo",
    example: "Zobacz przykład wdrożenia ↓",
    call: "albo zadzwoń:",
  },
  problems: {
    eyebrow: "Jakie problemy rozwiązuję",
    heading: "Brzmi znajomo?",
    intro:
      "Gotowe programy pasują do wszystkich po trochu, a do Ciebie w ogóle. Jeśli rozpoznajesz u siebie choć dwa z tych punktów, system szyty na miarę prawdopodobnie zwróci się szybciej, niż myślisz.",
    items: [
      {
        title: "Ustalenia giną w komunikatorach",
        body: "Prośby klientów i polecenia dla pracowników przychodzą przez Messengera, SMS-y i telefony. Coś się zawsze zgubi, a potem nikt nie wie, kto co obiecał.",
      },
      {
        title: "Koniec miesiąca to dzień liczenia",
        body: "Abonamenty, usługi dodatkowe i dopłaty zbierasz ręcznie z zeszytu i Excela, a potem tłumaczysz klientom każdą pozycję.",
      },
      {
        title: "Pracownicy pytają, co dziś trzeba zrobić",
        body: "Plan dnia jest w głowie właściciela albo na kartce, która nie nadąża za zmianami.",
      },
      {
        title: "Klient nie wie, na czym stoi",
        body: "Nie widzi swoich zamówień, salda ani historii płatności, więc pyta o to Ciebie.",
      },
      {
        title: "Kilka programów, które się nie dogadują",
        body: "Osobno grafik, osobno rozliczenia, osobno kontakt z klientami, a dane przepisujesz ręcznie.",
      },
      {
        title: "Gotowy program wymusza cudzy sposób pracy",
        body: "Nie da się w nim ustawić Twoich cen, Twoich usług ani Twoich zasad.",
      },
    ],
    outcome: {
      label: "Co dostajesz w zamian",
      body: "Jedną aplikację, w której każdy (właściciel, pracownik, klient) widzi tylko to, czego potrzebuje. Zamówienia trafiają od razu na listę zadań, rozliczenia liczą się same, a powiadomienia przychodzą na telefon.",
    },
  },
  audience: {
    eyebrow: "Dla kogo",
    heading: "Dla firm, które obsługują stałych klientów",
    intro:
      "Najlepiej sprawdzam się tam, gdzie są stali klienci, cykliczne opłaty, usługi dodatkowe i kilka osób, które muszą wiedzieć, co się dzieje. Na przykład:",
    items: [
      "stajnie i pensjonaty dla koni",
      "hotele dla psów i kotów",
      "szkółki sportowe",
      "szkoły tańca, pływania i języków",
      "prywatne żłobki i przedszkola",
      "ośrodki z noclegami i zajęciami",
      "wypożyczalnie sprzętu",
    ],
    note: "Nie widzisz swojej branży? Opisz mi, jak dziś wygląda Twój dzień pracy. W 15 minut powiem, czy system ma sens i ile mniej więcej będzie kosztował.",
  },
  example: {
    eyebrow: "Przykład wdrożenia · Stajnia Lauden",
    heading: "Pensjonat dla koni z ponad 60 boksami: właściciele, personel, trenerzy i klienci w jednej aplikacji",
    before: {
      label: "Jak było",
      body: "Każda prośba właściciela konia („dodatkowe siano dla boksu 12”, „jutro wyprowadzić o 10”) szła przez Messengera i pamięć personelu. Usługi dodatkowe właścicielka liczyła ręcznie na koniec miesiąca.",
    },
    changesLabel: "Co się zmieniło",
    changes: [
      {
        title: "Zamówienia bez telefonów",
        body: "Właściciele koni zamawiają usługi w aplikacji, jednorazowo albo w abonamencie. Personel widzi je od razu na tablicy zadań i odhacza po wykonaniu.",
      },
      {
        title: "Plan dnia na ścianie",
        body: "W paszarni i przy wyjściu na padoki wiszą ekrany z planem karmienia i wyprowadzania na dziś. Nikt nie musi dopytywać.",
      },
      {
        title: "Rozliczenia liczą się same",
        body: "Pensjonat, dzierżawy i usługi trafiają na konto klienta automatycznie. Każdy właściciel konia widzi swoje saldo i historię płatności.",
      },
      {
        title: "Powiadomienia na telefon",
        body: "Personel i właściciele koni dostają powiadomienia, także przy zamkniętej aplikacji, a system sam przypomina o płatnościach.",
      },
      {
        title: "Proste dla każdego",
        body: "Duży tekst, duże przyciski, statusy opisane słowami. Z aplikacji bez problemu korzystają także starsze osoby.",
      },
      {
        title: "Bez sklepu z aplikacjami",
        body: "System instaluje się na ekranie telefonu prosto ze strony i aktualizuje się sam.",
      },
    ],
    screensNote: "Zrzuty ze środowiska demo. Dane osobowe i kwoty są zamazane.",
    screens: [
      { src: "/images/stajnia/task-board.webp", alt: "Tablica zadań personelu z ponumerowanymi boksami i zadaniami", caption: "Personel · tablica zadań na tablecie", wide: true },
      { src: "/images/stajnia/feed-room.webp", alt: "Ekran w paszarni ze zmianami w karmieniu na śniadanie, obiad i kolację", caption: "Paszarnia · ekran ścienny z planem karmienia na dziś", wide: true },
      { src: "/images/stajnia/order-service.webp", alt: "Zamawianie jednorazowej usługi z katalogu", caption: "Klient · zamawianie usługi" },
      { src: "/images/stajnia/billing.webp", alt: "Rozliczenia jednego klienta z saldem i historią wpłat", caption: "Właścicielka · rozliczenia klienta" },
    ],
    caseStudy: "Przeczytaj pełne case study",
    tech: {
      label: "Technicznie",
      body: "Aplikacja webowa PWA (Next.js, NestJS, PostgreSQL), pięć ról z uprawnieniami pilnowanymi po stronie serwera, ponad 230 testów automatycznych, automatyczna kopia bazy przed każdą aktualizacją, szyfrowane połączenie HTTPS.",
    },
  },
  process: {
    eyebrow: "Jak wygląda współpraca",
    heading: "Od rozmowy do działającego systemu",
    steps: [
      {
        title: "Bezpłatna rozmowa (15–30 minut)",
        body: "Opowiadasz, jak dziś wygląda praca w firmie i co najbardziej uwiera. Mówię wprost, czy system ma sens.",
      },
      {
        title: "Analiza",
        body: "Przyjeżdżam albo spotykamy się online. Rozmawiam z Tobą i z pracownikami, bo to oni będą z systemu korzystać na co dzień.",
      },
      {
        title: "Wycena i plan",
        body: "Dostajesz zakres, cenę i termin na piśmie. Bez niespodzianek po drodze.",
      },
      {
        title: "Budowa w małych krokach",
        body: "Co tydzień lub dwa pokazuję postęp. Możesz zmieniać zdanie, zanim coś zostanie „zabetonowane”.",
      },
      {
        title: "Wdrożenie i szkolenie",
        body: "Przenoszę dane, uczę zespół i jestem pod telefonem w pierwszych tygodniach.",
      },
      {
        title: "Opieka",
        body: "Serwer, kopie zapasowe, aktualizacje i poprawki są po mojej stronie. Rozwijamy system razem z firmą.",
      },
    ],
  },
  pricing: {
    eyebrow: "Ile to kosztuje",
    heading: "Jasny model: wdrożenie plus miesięczna opieka",
    rows: [
      {
        item: "Wdrożenie (jednorazowo)",
        price: "od 12 000 zł netto",
        includes: "analiza, budowa systemu, przeniesienie danych, szkolenie zespołu",
      },
      {
        item: "Opieka (co miesiąc)",
        price: "od 400 zł netto",
        includes: "serwer, kopie zapasowe, aktualizacje, poprawki błędów, wsparcie",
      },
      {
        item: "Rozbudowa",
        price: "150 zł netto/h",
        includes: "nowe funkcje, gdy firma ich potrzebuje; większe wyceniam z góry",
      },
    ],
    note: "Dokładną cenę podaję po bezpłatnej rozmowie, na piśmie, zanim cokolwiek zaczniemy.",
  },
  faq: {
    eyebrow: "Najczęstsze pytania",
    heading: "Zanim zadzwonisz",
    items: [
      {
        q: "Czy to nie za drogie dla małej firmy?",
        a: "System ma sens, gdy oszczędza czas Twój i pracowników albo zmniejsza liczbę pomyłek w rozliczeniach. Na pierwszej rozmowie policzymy to razem. Jeśli wyjdzie, że gotowy program wystarczy, powiem to wprost.",
      },
      {
        q: "Czym to się różni od gotowego programu?",
        a: "Gotowy program trzeba dopasować do siebie. Ten jest zbudowany pod Twoje usługi, ceny i sposób pracy, a gdy firma się zmienia, system zmienia się razem z nią.",
      },
      {
        q: "Co jeśli przestaniesz się tym zajmować?",
        a: "Dane są Twoje i w każdej chwili możesz dostać ich kopię. Kod jest uporządkowany, opisany i pokryty testami, więc inny programista może przejąć utrzymanie.",
      },
      {
        q: "Czy pracownicy sobie poradzą?",
        a: "Projektuję z myślą o osobach, które nie lubią komputerów: duży tekst, mało przycisków, wszystko opisane słowami. Szkolenie zespołu jest częścią wdrożenia.",
      },
      {
        q: "Czy trzeba coś instalować?",
        a: "Nie. System działa w przeglądarce i można go dodać do ekranu telefonu jak zwykłą aplikację.",
      },
      {
        q: "Gdzie są moje dane?",
        a: "Na serwerze w Unii Europejskiej, z kopiami zapasowymi. Ich częstotliwość dobieramy do systemu: od kopii przed każdą aktualizacją po codzienne.",
      },
    ],
  },
  contact: {
    eyebrow: "Kontakt",
    heading: "Porozmawiajmy o Twojej firmie",
    lead: "Opowiedz mi w 15 minut, jak wygląda Twój dzień pracy. Powiem, co da się uprościć i ile by to kosztowało. Bez zobowiązań.",
    book: "Umów 15-minutowe demo",
    call: "Zadzwoń",
    write: "Napisz",
    area: "Piotr Zięcina, Wrocław. Pracuję zdalnie z firmami z całej Polski, a na miejsce przyjeżdżam, gdy jest taka potrzeba.",
  },
};
