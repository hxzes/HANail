"use client"

import { useEffect } from "react"

export default function ScrollAnimations() {
  useEffect(() => {
    // Funkcia na kontrolu, či je element v viewporte
    const isInViewport = (element: Element) => {
      const rect = element.getBoundingClientRect()
      return rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 && rect.bottom >= 0
    }

    // Funkcia na animáciu elementov pri scrollovaní
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll")

      elements.forEach((element) => {
        if (isInViewport(element)) {
          element.classList.add("animated")
        }
      })
    }

    // Inicializácia animácií
    animateOnScroll()

    // Pridanie event listenera pre scroll
    window.addEventListener("scroll", animateOnScroll)

    return () => {
      window.removeEventListener("scroll", animateOnScroll)
    }
  }, [])

  return null
}

