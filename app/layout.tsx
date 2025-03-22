import type React from "react"
import type { Metadata } from "next"
import { Poppins, Playfair_Display } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "HA Nail Studio - Profesionálne nechtové štúdio",
  description: "Luxusné nechtové štúdio v Rimavskej Sobote, kde sa krása stretáva s profesionalitou.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sk" className="scroll-smooth">
      <body className={`${poppins.variable} ${playfair.variable} font-sans`}>{children}</body>
    </html>
  )
}



import './globals.css'