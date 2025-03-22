"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [titleVisible, setTitleVisible] = useState(false)
  const [subtitleVisible, setSubtitleVisible] = useState(false)
  const [buttonsVisible, setButtonsVisible] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    // Detekcia mobilného zariadenia
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Inicializácia a event listener pre zmenu veľkosti okna
    checkMobile()
    window.addEventListener("resize", checkMobile)

    // Postupné zobrazovanie prvkov s oneskorením
    const titleTimer = setTimeout(() => setTitleVisible(true), 300)
    const subtitleTimer = setTimeout(() => setSubtitleVisible(true), 800)
    const buttonsTimer = setTimeout(() => setButtonsVisible(true), 1300)

    return () => {
      window.removeEventListener("resize", checkMobile)
      clearTimeout(titleTimer)
      clearTimeout(subtitleTimer)
      clearTimeout(buttonsTimer)
    }
  }, [])

  // Nová zlatá farba
  const goldColor = "#d4a76a"
  // Tmavšia zlatá farba pre lepší kontrast
  const darkGoldColor = "#b8860b"

  // Pozícia obrázka - rôzna pre mobil a desktop
  const imagePosition = isMobile
    ? "calc(50% - 0.1cm) center" // Doľava na mobile
    : "center center" // Centrované na desktope

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Ružové pozadie s novým obrázkom - rozmazanie na všetkých zariadeniach a posunuté podľa zariadenia */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/ha-nails-hero.png"
          alt="HA NAILS logo background"
          fill
          priority
          quality={100}
          className="object-cover blur-[6px]"
          sizes="100vw"
          style={{ objectPosition: imagePosition }}
        />
      </div>

      {/* Obsah */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <div className={`transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0 translate-y-10"}`}>
          <div className="flex flex-col items-center w-full">
            {/* Text bez pozadia - rovnaký pre mobil aj desktop */}
            <div className="mb-6 w-full">
              <h1
                className={`text-5xl md:text-6xl font-bold mb-1 transition-all duration-700 transform font-playfair tracking-wider ${
                  titleVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
                }`}
                style={{
                  fontFamily: "var(--font-playfair)",
                  letterSpacing: "0.05em",
                  color: goldColor,
                  textShadow: "0px 2px 4px rgba(0,0,0,0.3)",
                }}
              >
                HA NAILS
              </h1>
              <h2
                className={`text-2xl md:text-3xl font-semibold transition-all duration-700 transform font-playfair ${
                  subtitleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  fontFamily: "var(--font-playfair)",
                  color: goldColor,
                  textShadow: "0px 1px 2px rgba(0,0,0,0.3)",
                }}
              >
                Nechtové Štúdio
              </h2>
            </div>

            {/* Tlačidlá - rôzne pre mobil a desktop */}
            {isMobile ? (
              <div
                className={`flex flex-col items-center gap-5 transition-all duration-700 transform ${
                  buttonsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <Link
                  href="#contact"
                  className="px-8 py-3 rounded-full text-white font-medium hover:opacity-90 transition-opacity text-sm uppercase tracking-wider w-64 mx-auto font-playfair"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    backgroundColor: darkGoldColor,
                  }}
                >
                  Rezervovať termín
                </Link>
                <Link
                  href="#services"
                  className="bg-white px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors text-sm uppercase tracking-wider border border-gold-light/30 w-48 mx-auto font-playfair"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    color: darkGoldColor,
                  }}
                >
                  Naše služby
                </Link>
              </div>
            ) : (
              <div
                className={`flex flex-row gap-6 justify-center mt-8 transition-all duration-700 transform ${
                  buttonsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <Link
                  href="#contact"
                  className="px-8 py-3 rounded-full text-white font-medium hover:opacity-90 transition-opacity text-base uppercase tracking-wider w-64 font-playfair"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    backgroundColor: goldColor,
                  }}
                >
                  Rezervovať termín
                </Link>
                <Link
                  href="#services"
                  className="bg-white px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors text-base uppercase tracking-wider border w-48 font-playfair"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    color: goldColor,
                    borderColor: `${goldColor}30`,
                  }}
                >
                  Naše služby
                </Link>
              </div>
            )}

            {isMobile && (
              <div
                className={`mt-5 w-24 h-0.5 transition-all duration-700 ${
                  buttonsVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{ backgroundColor: `${darkGoldColor}30` }}
              ></div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

