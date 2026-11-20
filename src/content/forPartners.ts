import type { ForPartners } from "./types";

// First version, to be filled in step by step. The commission rate is agreed
// one to one, so no number is published here yet.
export const forPartners: ForPartners = {
  seo: {
    title: "Współpraca dla biur rachunkowych i partnerów — Piotr Zięcina",
    description:
      "Polecasz klientom system, który automatyzuje procesy i obieg danych w ich firmie. Ja zajmuję się resztą, a za polecenie zakończone wdrożeniem wypłacam prowizję.",
  },
  hero: {
    eyebrow: "Partnerzy",
    heading: "Twoi klienci przepisują dane ręcznie? Poleć mi ich.",
    lede: "Współpracuję z biurami rachunkowymi i firmami, które obsługują innych przedsiębiorców. Ty widzisz, gdzie klient traci czas. Ja projektuję i wdrażam system, który to porządkuje.",
    points: [
      "Bez sprzedawania z Twojej strony",
      "Prowizja za polecenie zakończone wdrożeniem",
      "Gotowy opis oferty do przekazania dalej",
    ],
    book: "Umów rozmowę o współpracy",
    call: "albo zadzwoń:",
    secondary: { label: "Tekst do przekazania ↓", href: "#tekst" },
  },
  who: {
    eyebrow: "Dla kogo",
    heading: "Kto może polecać",
    items: [
      "biura rachunkowe i księgowe",
      "firmy obsługujące komputery i sieci w firmach",
      "partnerzy programów księgowych i magazynowych",
      "doradcy pracujący z przedsiębiorcami",
    ],
    note: "Zyskujesz też Ty: system klienta może przekazywać dane do programu księgowego, więc w biurze jest mniej przepisywania.",
  },
  signals: {
    eyebrow: "Komu polecać",
    heading: "Sygnały, że klientowi przyda się system",
    intro: "Najczęściej widać je właśnie z perspektywy księgowości:",
    items: [
      "te same dane trafiają do biura z kilku arkuszy i trzeba je przepisywać",
      "dokumenty i rozliczenia przychodzą na koniec miesiąca w pośpiechu i z błędami",
      "firma szuka kogoś do „wprowadzania danych” albo z „biegłą znajomością Excela”",
      "klient narzeka, że gotowy program nie pasuje do jego sposobu pracy",
    ],
  },
  steps: {
    eyebrow: "Jak to działa",
    heading: "Trzy kroki",
    steps: [
      {
        title: "Przekazujesz kontakt",
        body: "Wysyłasz klientowi link do mojej strony albo tekst poniżej, a mnie jego kontakt, jeśli się zgodzi.",
      },
      {
        title: "Bezpłatna rozmowa",
        body: "Rozmawiam z klientem 15–30 minut. Mówię wprost, czy własny system ma sens, czy wystarczy gotowy program.",
      },
      {
        title: "Prowizja",
        body: "Jeśli dojdzie do wdrożenia, wypłacam Ci prowizję od jego wartości.",
      },
    ],
  },
  commission: {
    eyebrow: "Prowizja",
    heading: "Zasady ustalamy przed pierwszym poleceniem",
    body: "Prowizja jest liczona od wartości wdrożenia. Jej wysokość, termin wypłaty i formę rozliczenia ustalamy indywidualnie, na piśmie, zanim polecisz pierwszą firmę.",
  },
  pitch: {
    eyebrow: "Tekst do przekazania",
    heading: "Gotowy opis oferty",
    intro: "Możesz go wysłać klientowi w całości albo we fragmentach.",
    text: `Automatyzacja procesów i obiegu danych w firmie

Nazywam się Piotr Zięcina. Od ponad 4 lat zawodowo tworzę oprogramowanie, a teraz projektuję, wdrażam i utrzymuję systemy dla firm produkcyjnych, handlowych i usługowych. Pomagam tam, gdzie:

• te same dane wpisuje się kilka razy: w magazynie, na produkcji, w biurze i w księgowości,
• nie widać na bieżąco, co jest na stanie, co jest w realizacji i co wyjechało do klienta,
• raporty i rozliczenia składa się ręcznie z arkuszy i notatek,
• informacja między działami krąży mailem i telefonem, a ważne rzeczy giną po drodze,
• gotowy program nie pasuje do sposobu pracy firmy.

Tworzę system dopasowany do procesów firmy i łączę go z tym, czego firma już używa, np. z programem księgowym. Pracownik wpisuje dane raz, w miejscu, w którym pracuje, a stany, raporty i rozliczenia liczą się same. System działa na komputerze, tablecie i telefonie, także na hali i w magazynie.

Jak zaczynamy:
1. Bezpłatna rozmowa, 15–30 minut. Mówię wprost, czy własny system ma sens, czy wystarczy gotowy program.
2. Analiza procesu na miejscu lub online i pisemna wycena z zakresem i terminem (od 1000 zł netto, odliczane od wdrożenia).
3. Budowa małymi krokami, z pokazem postępów co 1–2 tygodnie, potem wdrożenie i szkolenie zespołu.

Więcej informacji: ziecina.dev/dla-firm
Kontakt: 725 696 313, piotr@ziecina.dev`,
    labels: { copy: "Kopiuj tekst", copied: "Skopiowano", copyFallback: "Zaznaczono tekst, skopiuj go skrótem klawiszowym" },
  },
  contact: {
    eyebrow: "Kontakt",
    heading: "Porozmawiajmy o współpracy",
    lead: "Zadzwoń albo umów krótką rozmowę. Opowiem, jak pracuję, i ustalimy zasady polecania.",
    book: "Umów rozmowę o współpracy",
    call: "Zadzwoń",
    write: "Napisz",
    area: "Piotr Zięcina, Wrocław. Współpracuję z partnerami z całej Polski.",
  },
};
