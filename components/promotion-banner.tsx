"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import Link from "next/link"

export default function PromotionBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  // Tmavšia zlatá farba pre lepší kontrast
  const darkGoldColor = "#b8860b"

  useEffect(() => {
    // Kontrola, či už bol banner zatvorený v tejto session
    const bannerDismissed = sessionStorage.getItem("promotionBannerDismissed")

    if (!bannerDismissed) {
      // Zobrazíme banner po 3 sekundách
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [])

  const dismissBanner = () => {
    setIsVisible(false)
    // Po animácii nastavíme dismissed
    setTimeout(() => {
      setIsDismissed(true)
      sessionStorage.setItem("promotionBannerDismissed", "true")
    }, 300)
  }

  if (isDismissed) return null

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-pink-dark text-white p-4 z-40 shadow-lg transition-transform duration-300 md:hidden ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <button
        onClick={dismissBanner}
        className="absolute top-2 right-2 text-white/80 hover:text-white"
        aria-label="Zatvoriť oznámenie"
      >
        <X size={18} />
      </button>

      <p className="text-center font-medium mb-2">Krásne nechty a odmena k tomu!</p>
      <p className="text-center text-sm mb-3">5 návštev = darček alebo zľava 6€</p>

      <div className="flex justify-center">
        <Link
          href="#promotion"
          onClick={dismissBanner}
          className="text-pink-dark px-4 py-2 rounded-full text-sm font-medium"
          style={{ backgroundColor: "white", color: darkGoldColor }}
        >
          Zobraziť akciu
        </Link>
      </div>
    </div>
  )
}

