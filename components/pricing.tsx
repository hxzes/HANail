export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="animate-on-scroll from-bottom">
          <h2 className="section-title">CENNÍK</h2>
          <p className="text-center max-w-2xl mx-auto mb-12 text-gray-600">Transparentné ceny pre všetky naše služby</p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Manikúra a Pedikúra */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Manikúra */}
            <div className="animate-on-scroll from-left">
              <div className="bg-white rounded-sm shadow-md overflow-hidden h-full">
                <div className="pink-gradient text-white py-3 px-6">
                  <h3 className="text-lg font-medium">Manikúra</h3>
                </div>
                <div className="divide-y divide-gray-100">
                  <div className="flex justify-between py-3 px-6 bg-gray-50">
                    <span className="text-gray-800">Manikúra klasická (bez lakovania)</span>
                    <span className="font-medium text-pink-dark ml-2">10€</span>
                  </div>
                  <div className="flex justify-between py-3 px-6">
                    <span className="text-gray-800">Manikúra a lakovanie s obyč. lakom</span>
                    <span className="font-medium text-pink-dark ml-2">15€</span>
                  </div>
                  <div className="flex justify-between py-3 px-6 bg-gray-50">
                    <span className="text-gray-800">Pánska manikúra</span>
                    <span className="font-medium text-pink-dark ml-2">15€</span>
                  </div>
                  <div className="flex justify-between py-3 px-6">
                    <span className="text-gray-800">Masáž rúk (10 minút)</span>
                    <span className="font-medium text-pink-dark ml-2">7€</span>
                  </div>
                  <div className="flex justify-between py-3 px-6 bg-gray-50">
                    <span className="text-gray-800">Detská manikúra</span>
                    <span className="font-medium text-pink-dark ml-2">5€</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pedikúra */}
            <div className="animate-on-scroll from-right">
              <div className="bg-white rounded-sm shadow-md overflow-hidden h-full">
                <div className="pink-gradient text-white py-3 px-6">
                  <h3 className="text-lg font-medium">Pedikúra</h3>
                </div>
                <div className="divide-y divide-gray-100">
                  <div className="flex justify-between py-3 px-6 bg-gray-50">
                    <span className="text-gray-800">Pedikúra klasická</span>
                    <span className="font-medium text-pink-dark ml-2">20€</span>
                  </div>
                  <div className="flex justify-between py-3 px-6">
                    <span className="text-gray-800">Pedikúra s obyčajným lakom</span>
                    <span className="font-medium text-pink-dark ml-2">25€</span>
                  </div>
                  <div className="flex justify-between py-3 px-6 bg-gray-50">
                    <span className="text-gray-800">Detská pedikúra</span>
                    <span className="font-medium text-pink-dark ml-2">5€</span>
                  </div>
                  <div className="flex justify-between py-3 px-6">
                    <span className="text-gray-800">Masáž extra (10 minút)</span>
                    <span className="font-medium text-pink-dark ml-2">10€</span>
                  </div>
                  <div className="flex justify-between py-3 px-6 bg-gray-50">
                    <span className="text-gray-800">Peeling nôh</span>
                    <span className="font-medium text-pink-dark ml-2">6€</span>
                  </div>
                  <div className="flex justify-between py-3 px-6">
                    <span className="text-gray-800">Odstránenie gél laku</span>
                    <span className="font-medium text-pink-dark ml-2">5€</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lakovanie a Gél lak */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Lakovanie */}
            <div className="animate-on-scroll from-left delay-100">
              <div className="bg-white rounded-sm shadow-md overflow-hidden h-full">
                <div className="pink-gradient text-white py-3 px-6">
                  <h3 className="text-lg font-medium">Lakovanie</h3>
                </div>
                <div className="divide-y divide-gray-100">
                  <div className="flex justify-between py-3 px-6 bg-gray-50">
                    <span className="text-gray-800 pr-2">Lakovanie obyčajným lakom na vlastné nechty</span>
                    <span className="font-medium text-pink-dark whitespace-nowrap">15€</span>
                  </div>
                  <div className="flex justify-between py-3 px-6">
                    <span className="text-gray-800">Detské lakovanie</span>
                    <span className="font-medium text-pink-dark ml-2">5€</span>
                  </div>
                  <div className="flex justify-between py-3 px-6 bg-gray-50">
                    <span className="text-gray-800">Gél lak s manikúrou</span>
                    <span className="font-medium text-pink-dark ml-2">20€</span>
                  </div>
                  <div className="flex justify-between py-3 px-6">
                    <span className="text-gray-800">Francúzska špička s gél lakom</span>
                    <span className="font-medium text-pink-dark ml-2">3€</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Gél lak */}
            <div className="animate-on-scroll from-right delay-100">
              <div className="bg-white rounded-sm shadow-md overflow-hidden h-full">
                <div className="pink-gradient text-white py-3 px-6">
                  <h3 className="text-lg font-medium">Gél lak</h3>
                </div>
                <div className="divide-y divide-gray-100">
                  <div className="flex justify-between py-3 px-6 bg-gray-50">
                    <span className="text-gray-800">Gél lak</span>
                    <span className="font-medium text-pink-dark ml-2">20€</span>
                  </div>
                  <div className="flex justify-between py-3 px-6">
                    <span className="text-gray-800">Gélové nechty nové</span>
                    <span className="font-medium text-pink-dark ml-2">26€</span>
                  </div>
                  <div className="flex justify-between py-3 px-6 bg-gray-50">
                    <span className="text-gray-800">Gélové - dorábka</span>
                    <span className="font-medium text-pink-dark ml-2">24€</span>
                  </div>
                  <div className="flex justify-between py-3 px-6">
                    <span className="text-gray-800">Akrylové nechty-nové</span>
                    <span className="font-medium text-pink-dark ml-2">26€</span>
                  </div>
                  <div className="flex justify-between py-3 px-6 bg-gray-50">
                    <span className="text-gray-800">Akrylové - dorábka</span>
                    <span className="font-medium text-pink-dark ml-2">24€</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Naviac služby ku nechtom */}
          <div className="animate-on-scroll from-bottom delay-200">
            <div className="bg-white rounded-sm shadow-md overflow-hidden">
              <div className="pink-gradient text-white py-3 px-6">
                <h3 className="text-lg font-medium">Naviac služby ku nechtom</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 divide-gray-100">
                <div className="divide-y divide-gray-100">
                  <div className="flex justify-between py-3 px-6 bg-gray-50">
                    <span className="text-gray-800">Dizajnovanie</span>
                    <span className="font-medium text-pink-dark ml-2">
                      1-2€ <span className="text-xs text-gray-500">/nechtík</span>
                    </span>
                  </div>
                  <div className="flex justify-between py-3 px-6">
                    <div>
                      <span className="text-gray-800">Kamienky</span>
                      <div className="text-xs text-gray-500">0,30€/malý a 0,50€/väčší</div>
                    </div>
                  </div>
                  <div className="flex justify-between py-3 px-6 bg-gray-50">
                    <div>
                      <span className="text-gray-800">Extra kamienok</span>
                      <div className="text-xs text-gray-500">malý + veľký kamienok</div>
                    </div>
                    <span className="font-medium text-pink-dark ml-2">2€</span>
                  </div>
                  <div className="flex justify-between py-3 px-6">
                    <div>
                      <span className="text-gray-800">Dlhé nechty nad 1,5cm</span>
                      <span className="text-xs text-gray-500 ml-1">nové</span>
                    </div>
                    <span className="font-medium text-pink-dark ml-2">5€</span>
                  </div>
                  <div className="flex justify-between py-3 px-6 bg-gray-50">
                    <div>
                      <span className="text-gray-800">Dlhé nechty nad 1cm</span>
                      <span className="text-xs text-gray-500 ml-1">dorábka</span>
                    </div>
                    <span className="font-medium text-pink-dark ml-2">3€</span>
                  </div>
                </div>
                <div className="divide-y divide-gray-100">
                  <div className="flex justify-between py-3 px-6 md:bg-gray-50">
                    <span className="text-gray-800">Chróm / Cat eye / Ombré</span>
                    <span className="font-medium text-pink-dark ml-2">3€</span>
                  </div>
                  <div className="flex justify-between py-3 px-6 md:bg-white">
                    <span className="text-gray-800 pr-2">Odlakovanie a úprava nechtov podľa tvaru</span>
                    <span className="font-medium text-pink-dark whitespace-nowrap">3€</span>
                  </div>
                  <div className="flex justify-between py-3 px-6 md:bg-gray-50">
                    <span className="text-gray-800">Odstránenie gél laku rúk a nôh</span>
                    <span className="font-medium text-pink-dark ml-2">3€</span>
                  </div>
                  <div className="flex justify-between py-3 px-6 md:bg-white">
                    <span className="text-gray-800">Odlakovanie</span>
                    <span className="font-medium text-pink-dark ml-2">3€</span>
                  </div>
                  <div className="hidden md:flex justify-between py-3 px-6 bg-gray-50 invisible">
                    <span className="text-gray-800">Placeholder</span>
                    <span className="font-medium text-pink-dark ml-2"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 animate-on-scroll from-bottom">
            <p className="text-gray-600 mb-4">
              * Ceny sa môžu líšiť v závislosti od náročnosti a použitých materiálov.
            </p>
            <p className="text-gray-600">Pre viac informácií nás neváhajte kontaktovať.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

