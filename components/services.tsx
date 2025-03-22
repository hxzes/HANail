import { Clock, Heart } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <Clock className="w-10 h-10 text-pink-dark" />,
      title: "Manikúra",
      description:
        "Klasická aj japonská manikúra pre zdravé a upravené nechty. Starostlivosť o nechtovú kožičku a výživu nechtov.",
    },
    {
      icon: <Heart className="w-10 h-10 text-pink-dark" />,
      title: "Pedikúra",
      description:
        "Kompletná starostlivosť o vaše chodidlá a nechty na nohách. Relaxačný zážitok s profesionálnym výsledkom.",
    },
  ]

  return (
    <section id="services" className="section-padding bg-[#FFC0CB]/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="animate-on-scroll from-bottom">
          <h2 className="section-title">SLUŽBY</h2>
          <p className="text-center max-w-2xl mx-auto mb-10 text-gray-600 text-sm">
            Ponúkame profesionálne služby manikúry a pedikúry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`animate-on-scroll from-bottom delay-${index * 100} bg-white p-6 rounded-sm shadow-md hover:shadow-lg transition-shadow`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-3">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-pink-dark">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

