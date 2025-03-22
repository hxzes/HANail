"use client"

import { useState } from "react"
import Image from "next/image"

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3269-o85y9iZVkKcA1MbOU9crjLTPSP7AcD.jpeg",
    alt: "Ružové nechty s kvetinovými vzormi",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3268-3GG4RoMaOYVIgVXiEssfbWetyiQGWr.jpeg",
    alt: "Ružové nechty s bielymi vzormi",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3273-YjI3NWD690PD3Yi9p7hoWKenWFFIOO.jpeg",
    alt: "Biele mramorové nechty so striebornými detailmi",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3271-GlwcxPG5uI831Puq4HplIxWxXg0REr.jpeg",
    alt: "Červeno-ružové nechty s ozdobnými prvkami",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3270-gUYL233qIz0MenvT9Al1hLLX4cEo9o.jpeg",
    alt: "Zlaté metalické nechty",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3266-tSXuoIYBM769TmEQsFYpqY2S9keAiA.jpeg",
    alt: "Ružové nechty s francúzskou manikúrou a trblietavými detailmi",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3267-FgRU7V1PH4Jz2PuLlqzdcnz7b2p2aB.jpeg",
    alt: "Elegantné nechty v kombinácii ružovej, čiernej a striebornej",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3272-ClK9zUm9Y3WGJiedFXlNiJquXSAqys.jpeg",
    alt: "Klasická francúzska manikúra v ružovej farbe",
  },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="gallery" className="section-padding bg-[#FFC0CB]/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="animate-on-scroll from-bottom">
          <h2 className="section-title">GALÉRIA</h2>
          <p className="text-center max-w-2xl mx-auto mb-12 text-gray-600">
            Pozrite si ukážky našich prác a nechajte sa inšpirovať pre vašu ďalšiu návštevu.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`animate-on-scroll zoom delay-${(index % 4) * 100} relative aspect-square overflow-hidden cursor-pointer group`}
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-pink-dark/30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                  Zobraziť
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Zväčšený obrázok"
                width={1000}
                height={800}
                className="object-contain w-full h-full"
              />
              <button
                className="absolute top-4 right-4 text-white bg-pink-dark/50 rounded-full p-2 hover:bg-pink-dark transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage(null)
                }}
              >
                X
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

