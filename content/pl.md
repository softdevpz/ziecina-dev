# ziecina.dev — teksty strony (PL)

> v1 zatwierdzona · 2026-10-16. Pozostałe placeholdery (opinia, zrzuty) oznaczone **[TODO: …]**. Bez numeru telefonu na stronie, jest tylko w CV.

---

## Meta

- **Tytuł:** Piotr Zięcina — Full Stack Developer (React, Next.js, NestJS, TypeScript)
- **Opis:** Full Stack Developer z Wrocławia, ponad 4 lata doświadczenia komercyjnego. Tworzę aplikacje webowe od pierwszej rozmowy z klientem aż po produkcję.

---

## Nawigacja

Projekty · Doświadczenie · Umiejętności · O mnie · Kontakt · [EN] · **Pobierz CV**

---

## Hero

**Plakietka:** Otwarty na nowe propozycje

# Piotr Zięcina

### Full Stack Developer

Tworzę aplikacje webowe od początku do końca: od rozmowy z klientem po wdrożenie na produkcję.
Na frontendzie React, Next.js i Vue; na backendzie Node.js, NestJS i SQL.
Ponad 4 lata doświadczenia komercyjnego, ostatnio w SmartBear.

**Przyciski:** Zobacz projekty · Pobierz CV · piotr@ziecina.dev
**Ikony:** GitHub · LinkedIn

**Lokalizacja:** Wrocław · praca zdalna lub hybrydowa

---

## Projekty

**Wstęp sekcji:** Dwa produkty, które samodzielnie zaprojektowałem, zbudowałem i wdrożyłem. Jeden codziennie obsługuje prawdziwą firmę, drugi jest open source.

### 1. Stajnia Lauden: system do zarządzania stajnią

**Podtytuł:** Aplikacja produkcyjna, na której opiera się codzienna praca pensjonatu dla koni z ponad 60 boksami.

**Etykiety:** Na produkcji · Prawdziwy klient · 2026 – obecnie

**Krótko (karta):**
Stajnia koordynowała usługi, karmienie i wyprowadzanie koni przez telefony i kartki. Zastąpiłem to jedną aplikacją webową. Codziennie korzystają z niej właścicielka, personel, trenerzy, właściciele koni i dzierżawcy, na telefonach, tabletach i ekranach na ścianach.

**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS · NestJS · Prisma · PostgreSQL · PWA i Web Push · Docker · Caddy · GitHub Actions · Jest · Supertest

**Przyciski:** Przeczytaj case study → · stajnialauden.pl → https://stajnialauden.pl

**Dopisek pod przyciskami:** Produkt komercyjny, kod źródłowy jest prywatny. Chętnie pokażę go i omówię na rozmowie rekrutacyjnej.

#### Strona case study

**Problem**
Stajnia z ponad 60 boksami, personel i wielu właścicieli koni. Każda prośba („dodatkowe siano dla boksu 12”, „jutro wyprowadzić o 10”) szła przez telefony, wiadomości i pamięć. Dodatkowe usługi rozliczano ręcznie na koniec miesiąca.

**Moja rola**
Wszystko: zbieranie wymagań z właścicielką, UX, backend, frontend, wdrożenie i utrzymanie. Regularnie spotykałem się z klientką, zamieniałem uwagi w małe iteracje i często wypuszczałem nowe wersje na produkcję.

**Co zbudowałem**
- **Jedna aplikacja dla pięciu ról:** właścicielka, personel, trener, właściciel konia i dzierżawca. Każda rola widzi tylko to, czego potrzebuje, a uprawnienia (RBAC) są pilnowane po stronie API.
- **Zamówienia usług:** właściciele koni zamawiają usługi jednorazowe lub w abonamencie, na dziś albo na jutro. Personel widzi je na tablicy zadań odświeżanej na bieżąco, gdzie je przyjmuje, wykonuje lub odwołuje.
- **Komunikaty o karmieniu i wyprowadzaniu:** właściciele wybierają gotowe komunikaty z katalogu, a personel widzi plan dnia dla każdego boksu. Personel może zmienić godziny tylko na bieżący dzień.
- **Rozliczenia:** pensjonat, kamery i dzierżawy co miesiąc, usługi jednorazowe i abonamentowe, ceny netto/brutto z VAT ustawiane dla boksu (koń „na firmę”), osobne salda gotówki i przelewów. Cena zapisuje się na zamówieniu, więc późniejsza zmiana cennika nie zmienia historii.
- **Zadania cykliczne (cron):** codzienne zadania z abonamentów, comiesięczne opłaty i przypomnienia o płatnościach.
- **Powiadomienia Web Push** z licznikiem na ikonie aplikacji, dla personelu i właścicieli, działające także przy zamkniętej aplikacji.

**Zaprojektowane dla prawdziwych użytkowników**
Część użytkowników ma ponad 70 lat, więc interfejs trzyma się ścisłych zasad: tekst co najmniej 18 px, przyciski co najmniej 48 px, status zawsze opisany tekstem, a nie samym kolorem. W paszarni i przy wyjściu na padoki wiszą ekrany, które bez dotykania pokazują plan na dziś.

**Inżynieria**
- REST API w NestJS + Prisma/PostgreSQL z weryfikacją e-mail, resetem hasła i bezpiecznym przesyłaniem zdjęć.
- **Ponad 130 testów jednostkowych i ponad 100 testów end-to-end** (Jest, Supertest), które sprawdzają też uprawnienia („dzierżawca nie zobaczy cudzych opłat”).
- CI/CD w GitHub Actions → Docker Compose na VPS. Caddy daje automatyczny HTTPS, przed każdym wdrożeniem robi się kopia bazy, a migracje nie niszczą danych.
- Dziennik decyzji: każda istotna zmiana jest zapisana razem z powodem i odrzuconymi opcjami.

**Kluczowa decyzja: PWA zamiast aplikacji natywnej**
Zacząłem od aplikacji w React Native (Expo). Po tym, jak zobaczyłem, jak właścicielka naprawdę korzysta z telefonu, przeszliśmy na jedną aplikację webową, którą można zainstalować na ekranie głównym. Jeden kod dla każdego urządzenia, bez sklepu z aplikacjami i z natychmiastowymi aktualizacjami. To była dobra decyzja i podjąłbym ją ponownie.

**Opinia klientki**
> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
> — Lorem Ipsum, właścicielka, Stajnia Lauden

[TODO: podmienić na prawdziwą opinię właścicielki (cytat + imię)]

**Zrzuty ekranu (zatwierdzone, tylko dane demo):** tablica zadań personelu (tablet), zamawianie usługi przez właściciela (telefon), ekran w paszarni, rozliczenia.
[TODO: Piotr przegląda układ elementów w systemie, zrzuty robimy po tym przeglądzie]

---

### 2. Build Budget: budżet budowy domu

**Podtytuł:** Kontrola budowy domu: etapy, wydatki na tle budżetu, dokumenty i raporty PDF dla banku.

**Etykiety:** Open source · Demo na żywo

**Krótko (karta):**
Budując dom, żongluje się arkuszami, paragonami i raportami dla banku. Build Budget trzyma budżet, dokumenty i dziennik budowy w jednym miejscu i na bieżąco udostępnia je wszystkim osobom w projekcie.

**Stack:** Next.js · TypeScript · Tailwind CSS · TanStack Query · NestJS · Prisma · PostgreSQL · Redis · BullMQ · Socket.io · Stripe · AWS S3 · Docker · GitHub Actions

**Przyciski:** Demo → build-budget-app-web.vercel.app · Kod na GitHubie → github.com/softdevpz/build-budget-app

**Najciekawsze elementy:**
- Tokeny JWT (access i refresh) w ciasteczkach httpOnly z cichym odświeżaniem. Wykryłem i naprawiłem wyścig (race condition), w którym równoległe żądania jednocześnie odświeżały token.
- Subskrypcje Stripe z webhookami weryfikowanymi podpisem. Plan darmowy jest ograniczony do jednego projektu.
- Raporty PDF dla banku generowane w tle (Redis + BullMQ).
- Współpraca w czasie rzeczywistym: członkowie projektu widzą swoje zmiany na żywo (WebSockets).
- Pliki wysyłane prosto do S3 przez presigned URL, do tego dziennik budowy ze zdjęciami.
- Interfejs po polsku i angielsku (next-intl).
- CI uruchamia testy jednostkowe (próg pokrycia 80% dla plików z logiką), testy e2e na prawdziwej bazie i build obu aplikacji.
- W repozytorium jest opis architektury, który wyjaśnia, *dlaczego* projekt jest zbudowany właśnie tak.

---

## Doświadczenie

### Software Developer · SmartBear · 2024 – obecnie

**Reflect: platforma do automatycznego testowania z AI** (15 miesięcy)
Vue.js · TypeScript · Scala · MySQL · AWS · Terraform
- Dodałem wgrywanie plików CSV do wsadowego uruchamiania testów z podstawianiem zmiennych, dla klientów z testami opartymi na danych.
- Samodzielnie zaprojektowałem i zbudowałem (frontend i backend) wyszukiwarkę danych testu, która stała się głównym narzędziem działu wsparcia klienta.
- Wdrożyłem analitykę Amplitude, zbierając dane o użyciu z różnych produktów SmartBear w jednym miejscu.
- Zbudowałem około 10 komponentów wielokrotnego użytku dla Reflect Design System na podstawie projektów w Figmie.

**Visual Test: narzędzie do wizualnego porównywania obrazów z AI** (9 miesięcy)
React · Next.js · NestJS · MySQL · AWS
- Zmniejszyłem liczbę podatności bezpieczeństwa o 40% dzięki regularnym audytom i aktualizacjom zależności.
- Dodałem testy jednostkowe obejmujące około 70% kodu, co zmniejszyło dług techniczny o 35%.
- Analizowałem zgłoszenia klientów i razem z product managerami zamieniałem je w zadania w backlogu.

### Full Stack Developer · Ampcasd · 2022 – 2024
Next.js · Strapi · NestJS · GraphQL · MySQL · Tailwind CSS
- Prowadziłem 4-osobowy zespół, który zbudował CMS i platformę webową dla centrum kultury w Niemczech, od analizy potrzeb do startu produkcyjnego w około rok.
- Zapisy na zajęcia, karnety, rezerwacje sal i bilety na koncerty, z integracjami PayPal, polecenia zapłaty SEPA i niemieckiego systemu fiskalnego.
- Platforma urosła do ponad 1600 użytkowników i ponad 1800 sprzedanych karnetów.

### Electrical Supervisor · KNAPP · 2019 – 2022
- Nadzorowałem budowę zautomatyzowanych magazynów i systemów wysyłkowych dla klientów takich jak Tiffany, Kroger, Adidas i M&S.

**Link:** Pełne CV (PDF) →

---

## Umiejętności

- **Frontend:** React, Next.js, Vue.js, TypeScript, Tailwind CSS, PWA, SSR/ISR
- **Backend:** Node.js, NestJS, Prisma, TypeORM, PostgreSQL, MySQL, REST, GraphQL, WebSockets, Redis, BullMQ, Scala (komercyjnie)
- **Chmura i DevOps:** AWS, Docker, Terraform, GitHub Actions, Caddy, VPS
- **Jakość:** Jest, Supertest, testy jednostkowe i e2e, audyt zależności
- **Integracje:** Stripe, PayPal, SEPA Direct Debit, Amplitude, Web Push
- **Narzędzia:** Figma, Jira, Git

---

## O mnie

Zanim zająłem się oprogramowaniem, byłem kierownikiem robót elektrycznych w KNAPP i budowałem zautomatyzowane magazyny dla światowych marek. Tam nauczyłem się pracować pod terminy i specyfikacje oraz dogadywać się z ludźmi na budowie. Mam tytuł inżyniera elektroniki i telekomunikacji Politechniki Wrocławskiej.

Dziś tworzę aplikacje webowe, a najbardziej lubię cały cykl: zrozumieć, czego klient naprawdę potrzebuje, zbudować to i zobaczyć, że ludzie używają tego na co dzień. Zależy mi na testach, przemyślanych decyzjach i oprogramowaniu, które jest proste dla użytkowników.

**Języki:** polski (ojczysty) · angielski (B2)

---

## Kontakt

### Porozmawiajmy

Szukam pracy jako full stack lub frontend developer. Jeśli uważasz, że pasowałbym do Twojego zespołu, napisz do mnie.

**piotr@ziecina.dev** · LinkedIn · GitHub · Pobierz CV

---

## Stopka

© 2026 Piotr Zięcina · Zbudowane w Next.js · Kod na GitHubie
