import {
  JetBrains_Mono as FontMono,
  Nunito as FontNunito,
  Inter as FontSans,
} from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const fontNunito = FontNunito({
  subsets: ["latin"],
})
