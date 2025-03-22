"use client"

import { useEffect } from "react"

export default function ScrollReveal() {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll")

      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top
        const windowHeight = window.innerHeight

        // Keď je element vo viewporte (s malým offsetom pre lepší timing)
        if (elementPosition < windowHeight - 100) {
          element.classList.add("animated")
        }
      })
    }

    // Spustíme animáciu pri načítaní stránky
    setTimeout(() => {
      animateOnScroll()
    }, 500)

    // Pridáme event listener pre scroll
    window.addEventListener("scroll", animateOnScroll)

    // Cleanup
    return () => {
      window.removeEventListener("scroll", animateOnScroll)
    }
  }, [])

  return null // Tento komponent nevracia žiadny UI, len pridáva funkcionalitu
}

