"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Farby pre menu
  const goldColor = "#d4a76a" // Zlatá farba ako tlačidlo "Rezervovať termín"
  const darkGoldColor = "#b8860b" // Tmavšia zlatá farba
  const pinkColor = "#ff6b8b" // Ružová farba pre scrollované menu

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Inicializácia
    checkMobile()
    window.addEventListener("resize", checkMobile)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("resize", checkMobile)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-4"}`}>
      <div className="container mx-auto px-4 md:px-8">
        {/* Desktopová navigácia - centrovaná */}
        <div className="hidden md:flex justify-center items-center">
          <nav
            className={`flex space-x-8 px-8 py-3 rounded-full shadow-md transition-colors duration-300 ${
              scrolled ? "bg-pink-dark/85" : "bg-[#d4a76a]/85"
            }`}
          >
            {[
              { name: "Domov", href: "#home" },
              { name: "O nás", href: "#about" },
              { name: "Služby", href: "#services" },
              { name: "Cenník", href: "#pricing" },
              { name: "Galéria", href: "#gallery" },
              { name: "Kontakt", href: "#contact" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`nav-item-hover text-base font-medium hover:opacity-80 transition-colors`}
                style={{
                  color: "white",
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobilná navigácia - hamburger menu a logo */}
        <div className="flex md:hidden justify-between items-center">
          <div></div> {/* Prázdny div pre zachovanie flexboxu */}
          <button
            className={`md:hidden p-2 rounded-full shadow-md transition-colors duration-300 ${
              scrolled ? "bg-pink-dark/85" : "bg-[#d4a76a]/85"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            style={{ color: "white" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobilné rozbaľovacie menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 mt-4" : "max-h-0"}`}
        >
          <nav
            className={`flex flex-col space-y-4 p-4 rounded-md shadow-md ${
              scrolled ? "bg-pink-dark/85" : "bg-[#d4a76a]/85"
            }`}
          >
            {[
              { name: "Domov", href: "#home" },
              { name: "O nás", href: "#about" },
              { name: "Služby", href: "#services" },
              { name: "Cenník", href: "#pricing" },
              { name: "Galéria", href: "#gallery" },
              { name: "Kontakt", href: "#contact" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-white/80 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

