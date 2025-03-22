"use client"

import { useState } from "react"
import { Users, Ticket, Coffee } from "lucide-react"
import Link from "next/link"

export default function Promotion() {
  const [isExpanded, setIsExpanded] = useState(false)

  // Nová zlatá farba
  const goldColor = "#d4a76a"
  // Tmavšia zlatá farba pre lepší kontrast
  const darkGoldColor = "#b8860b"

  return (
    <section id="promotion" className="section-padding bg-gradient-to-r from-[#FFC0CB]/30 to-[#FFC0CB]/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="animate-on-scroll from-bottom">
          <h2 className="section-title">AKTUÁLNA AKCIA</h2>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-sm shadow-lg overflow-hidden">
          {/* Hlavička s titulkom */}
          <div className="pink-gradient text-white p-6 text-center">
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-2">Krásne nechty a odmena k tomu!</h3>
            <p className="text-white/90 font-light">Od 1. apríla 2025</p>
          </div>

          {/* Hlavný obsah */}
          <div className="p-6 md:p-8">
            <div className="animate-on-scroll from-bottom">
              <p className="text-gray-700 text-center mb-8 max-w-2xl mx-auto">
                V našom nechtovom štúdiu Ha Nail, B. Bartóka 8/20, Rimavská Sobota, Vás čaká nielen perfektná
                starostlivosť o nechty, ale aj <span className="font-bold text-pink-dark">DARČEK navyše</span>!
              </p>

              <div className="bg-[#FFC0CB]/10 p-6 rounded-sm mb-8">
                <h4 className="text-xl font-playfair text-center text-pink-dark mb-4">
                  Stačí si dopriať 5 návštev v našom nechtovom štúdiu a môžete si vybrať:
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-white p-5 rounded-sm shadow-md flex flex-col items-center text-center">
                    <div className="bg-pink-dark/10 p-3 rounded-full mb-4">
                      <Ticket className="w-8 h-8 text-pink-dark" />
                    </div>
                    <h5 className="text-lg font-playfair font-medium text-pink-dark mb-2">
                      Zľavu 6 € na ďalšiu návštevu
                    </h5>
                    <p className="text-gray-600 text-sm">Ušetrite na vašej ďalšej návšteve v našom štúdiu</p>
                  </div>

                  <div className="bg-white p-5 rounded-sm shadow-md flex flex-col items-center text-center">
                    <div className="bg-pink-dark/10 p-3 rounded-full mb-4">
                      <Coffee className="w-8 h-8 text-pink-dark" />
                    </div>
                    <h5 className="text-lg font-playfair font-medium text-pink-dark mb-2">Obedové menu zdarma</h5>
                    <p className="text-gray-600 text-sm">
                      V našej reštaurácii Thien Ha Quan (oproti Kauflandu, Nám. Š. M. Daxnera 4162, Rimavská Sobota)
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-b border-gray-200 py-6 mb-8">
                <h4 className="text-xl font-playfair text-center text-pink-dark mb-4">A EŠTE NIEČO NAVYŠE:</h4>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
                  <div className="bg-gold-light/20 p-4 rounded-sm flex items-center">
                    <Users className="w-6 h-6 text-gold-dark mr-3 flex-shrink-0" />
                    <p className="text-gray-700">
                      <span className="font-medium">Ak privediete kamarátku</span> (novú zákazníčku)
                    </p>
                  </div>
                  <div className="hidden md:block text-gold-dark font-bold">→</div>
                  <div className="bg-gold-light/20 p-4 rounded-sm">
                    <p className="text-gray-700">
                      <span className="font-medium">Vy získate 5 € zľavu</span> na nové nechty!
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Link
                  href="#contact"
                  className="px-8 py-3 rounded-full text-white font-medium hover:opacity-90 transition-opacity text-base uppercase tracking-wider inline-block font-playfair"
                  style={{ backgroundColor: darkGoldColor }}
                >
                  Rezervovať termín
                </Link>
              </div>
            </div>
          </div>

          {/* Pätička s dodatočnými informáciami */}
          <div className="bg-gray-50 p-4 text-center text-gray-500 text-sm border-t border-gray-200">
            <p>Akcia platí od 1.4.2025 do odvolania. Nie je možné kombinovať s inými zľavami.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

