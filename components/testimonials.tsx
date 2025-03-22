"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Katarína M.",
    language: "SK",
    rating: 5,
    text: "Najlepšie nechtové štúdio, aké som kedy navštívila! Profesionálny prístup, kreatívne nápady a príjemná atmosféra. Moje nechty nikdy nevyzerali lepšie.",
  },
  {
    name: "Lucia K.",
    language: "SK",
    rating: 5,
    text: "Pravidelne navštevujem toto štúdio už od otvorenia a vždy odchádzam spokojná. Kvalitné materiály, precízna práca a vždy aktuálne trendy.",
  },
  {
    name: "Eszter B.",
    language: "HU",
    rating: 5,
    text: "Nagyon elégedett vagyok a szolgáltatással. A körmeim gyönyörűek lettek, és sokáig tartanak. Mindenképpen visszatérek!",
  },
  {
    name: "Viktória N.",
    language: "HU",
    rating: 5,
    text: "Kiváló minőségű szolgáltatás, barátságos személyzet. A legjobb körömszalon, amit valaha kipróbáltam. Mindenkinek ajánlom!",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [direction, setDirection] = useState<"next" | "prev">("next")

  const nextTestimonial = () => {
    if (animating) return
    setDirection("next")
    setAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      setAnimating(false)
    }, 500)
  }

  const prevTestimonial = () => {
    if (animating) return
    setDirection("prev")
    setAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
      setAnimating(false)
    }, 500)
  }

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Dekoratívne prvky */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#FFC0CB]/10 -z-10"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-[#FFC0CB]/10 -z-10"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#FFC0CB]/5 -z-10"></div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="animate-on-scroll from-bottom">
          <h2 className="section-title">REFERENCIE</h2>
          <p className="text-center max-w-2xl mx-auto mb-12 text-gray-600">Čo o nás hovoria naše klientky</p>
        </div>

        <div className="animate-on-scroll zoom max-w-4xl mx-auto relative">
          <div className="relative h-[350px] md:h-[300px]">
            {/* Veľká úvodzovka na pozadí */}
            <div className="absolute top-0 left-0 text-[#FFC0CB]/10 z-0">
              <Quote size={120} strokeWidth={1} />
            </div>

            {/* Testimonial karty */}
            <div
              className={`absolute inset-0 bg-gradient-to-r from-[#FFC0CB]/20 to-[#FFC0CB]/5 p-8 rounded-lg shadow-lg transition-all duration-500 flex flex-col items-center justify-center ${
                animating ? (direction === "next" ? "animate-slide-out-left" : "animate-slide-out-right") : ""
              }`}
            >
              <div className="flex items-center mb-6">
                <span className="px-3 py-1 bg-pink-dark/20 text-pink-dark rounded-full text-sm font-medium mr-4">
                  {testimonials[currentIndex].language}
                </span>
                <div className="flex">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-pink-dark text-pink-dark" />
                  ))}
                </div>
              </div>

              <p className="text-gray-700 italic mb-6 text-center text-lg relative z-10">
                "{testimonials[currentIndex].text}"
              </p>

              <div className="flex flex-col items-center">
                <div className="w-12 h-1 bg-gradient-to-r from-[#ff6b8b] to-[#ffc0cb] rounded-full mb-3"></div>
                <p className="font-bold text-pink-dark text-xl">{testimonials[currentIndex].name}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "bg-pink-dark w-6" : "bg-gray-300"
                }`}
                onClick={() => {
                  if (index > currentIndex) {
                    setDirection("next")
                  } else if (index < currentIndex) {
                    setDirection("prev")
                  }
                  setCurrentIndex(index)
                }}
              />
            ))}
          </div>

          <button
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 bg-white rounded-full p-3 shadow-md hover:bg-pink-dark hover:text-white transition-colors z-20"
            onClick={prevTestimonial}
            aria-label="Predchádzajúca referencia"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 bg-white rounded-full p-3 shadow-md hover:bg-pink-dark hover:text-white transition-colors z-20"
            onClick={nextTestimonial}
            aria-label="Nasledujúca referencia"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

