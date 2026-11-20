import type { ForProduction } from "./types";

// First version, to be filled in step by step (an interactive demo and a real
// deployment will come later). Until then it describes what the system does,
// without claiming a production client.
export const forProduction: ForProduction = {
  seo: {
    title: "System obiegu materiałów dla produkcji — Piotr Zięcina",
    description:
      "Przyjęcie dostawy, produkcja, odpad i wydanie do klienta w jednym systemie. Stany na bieżąco i śledzenie partii, obsługa na tablecie przy stanowisku. Bezpłatna rozmowa, 15–30 minut.",
  },
  hero: {
    eyebrow: "Produkcja",
    heading: "Każdy materiał, każda partia, każdy etap, na bieżąco.",
    lede: "Od dostawy, przez produkcję, po wydanie klientowi. Wiesz, co masz, ile zużyłeś i co wyjechało, bez przepisywania danych.",
    points: [
      "Stany materiałów i wyrobów na bieżąco",
      "Śledzenie partii od dostawy do klienta",
      "Prosta obsługa na tablecie przy stanowisku",
    ],
    book: "Umów bezpłatną rozmowę",
    call: "albo zadzwoń:",
    secondary: { label: "Jak to działa ↓", href: "#jak-to-dziala" },
  },
  flow: {
    eyebrow: "Jak to działa",
    heading: "Cztery etapy, jeden system",
    intro: "Pracownik wpisuje dane raz, w miejscu, w którym pracuje. Resztę system liczy sam.",
    steps: [
      {
        title: "Przyjęcie dostawy",
        body: "Dostawca, materiał i ilość wybierane z list, zdjęcie dokumentu dostawy. System nadaje numer partii.",
      },
      {
        title: "Produkcja",
        body: "Na stanowisku pracownik skanuje kod partii i wpisuje, ile materiału pobrał, ile wyrobu powstało i ile jest odpadu.",
      },
      {
        title: "Wydanie do klienta",
        body: "Klient, towar, ilość i kto wydał. Dokument wydania do wydruku, a towar schodzi ze stanu.",
      },
      {
        title: "Stany i raporty",
        body: "Stany na bieżąco, wydajność, odpad na zmianę lub pracownika i powiadomienia o niskim stanie.",
      },
    ],
  },
  traceability: {
    eyebrow: "Śledzenie partii",
    heading: "Reklamacja? Odpowiedź w minutę.",
    body: "System łączy każdą partię wyrobu z dostawą, z której powstała. Gdy klient zgłasza reklamację, sprawdzasz, skąd pochodził materiał, kto go przetwarzał i co jeszcze powstało z tej samej dostawy. Bez przekopywania arkuszy.",
  },
  floor: {
    eyebrow: "Na hali, nie w biurze",
    heading: "Zaprojektowane pod pracę przy stanowisku",
    items: [
      { title: "Duże przyciski", body: "Obsługa w rękawicach i w pośpiechu, bez małych pól i długiego pisania." },
      { title: "Kody zamiast pisania", body: "Kody QR lub kreskowe skanowane telefonem albo czytnikiem." },
      { title: "Listy wyboru", body: "Materiały, dostawcy i klienci wybierani z list, więc dane są spójne." },
      {
        title: "Tablet, telefon, komputer",
        body: "Działa w przeglądarce, bez instalowania programów na każdym stanowisku.",
      },
    ],
  },
  fit: {
    eyebrow: "Bez rewolucji",
    heading: "Uzupełnia to, co już masz",
    items: [
      {
        title: "Pod Twój proces",
        body: "Etapy produkcji, normy zużycia, rodzaje odpadu i dokumenty ustawiamy tak, jak działa Twój zakład. Listy materiałów i dostawców zmieniasz sam w panelu.",
      },
      {
        title: "Obok Twojego programu",
        body: "Nie wymieniasz programu księgowego ani magazynowego, który działa. Dokładam to, czego brakuje na hali, i przekazuję do niego dane.",
      },
      {
        title: "Wymogi Twojej branży",
        body: "Jeśli branża ma własne zasady ewidencji, na przykład BDO albo identyfikowalność partii w spożywce, uwzględniamy je w analizie.",
      },
      {
        title: "Start od pilotażu",
        body: "Zaczynamy od jednego procesu, który daje najwięcej. Pierwsza działająca wersja po kilku tygodniach.",
      },
    ],
  },
  more: {
    text: "Jak wygląda współpraca, ile to kosztuje i jak dbam o bezpieczeństwo danych:",
    link: "zobacz pełną ofertę dla firm",
  },
  contact: {
    eyebrow: "Kontakt",
    heading: "Porozmawiajmy o Twojej produkcji",
    lead: "Opowiedz, jak dziś przepływa materiał w Twoim zakładzie. W 15–30 minut powiem, co da się uprościć i od czego zacząć.",
    book: "Umów bezpłatną rozmowę",
    call: "Zadzwoń",
    write: "Napisz",
    area: "Piotr Zięcina, Wrocław. Pracuję z firmami z całej Polski, a na miejsce przyjeżdżam, gdy proces trzeba zobaczyć.",
  },
};
