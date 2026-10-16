import { Bricolage_Grotesque, Instrument_Sans, JetBrains_Mono } from "next/font/google";

// latin-ext covers Polish letters (ą, ę, ł, ż…).
const bricolage = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-instrument",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const fontVariables = `${bricolage.variable} ${instrument.variable} ${jetbrains.variable}`;
