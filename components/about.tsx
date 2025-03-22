export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="animate-on-scroll from-bottom">
          <h2 className="section-title">O NÁS</h2>
          <p className="text-center max-w-2xl mx-auto mb-12 text-gray-600">
            Vitajte v HA Nail Studio, kde sa krása a profesionalita stretávajú
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="animate-on-scroll from-left">
            <h3 className="text-lg font-semibold mb-3 text-pink-dark">Naša vízia</h3>
            <p className="text-gray-600 mb-5 text-sm leading-relaxed">
              V HA Nail Studio veríme, že každá žena si zaslúži dokonalé nechty, ktoré odrážajú jej jedinečnú osobnosť a
              štýl. Naším cieľom je poskytnúť vám nielen krásne nechty, ale aj relaxačný zážitok v príjemnom prostredí.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Používame len kvalitné materiály a najnovšie techniky, aby sme zabezpečili, že vaše nechty budú nielen
              krásne, ale aj zdravé a odolné.
            </p>
          </div>

          <div className="animate-on-scroll from-right">
            <h3 className="text-lg font-semibold mb-3 text-pink-dark">Prečo si vybrať nás</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start">
                <span className="text-pink-dark font-bold mr-2">✓</span>
                <span>Profesionálny a priateľský personál s dlhoročnými skúsenosťami</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-dark font-bold mr-2">✓</span>
                <span>Používame len kvalitné a certifikované produkty</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-dark font-bold mr-2">✓</span>
                <span>Čisté a moderné prostredie s príjemnou atmosférou</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-dark font-bold mr-2">✓</span>
                <span>Široká škála služieb a najnovšie trendy v nechtovom dizajne</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-dark font-bold mr-2">✓</span>
                <span>Flexibilné termíny a osobný prístup ku každej klientke</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

