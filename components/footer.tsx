import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react"
import { FaTiktok } from "react-icons/fa"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo a popis */}
          <div>
            <div className="flex items-center mb-4">
              <div className="relative w-14 h-14 mr-3">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-vXtbVvwkTNzlf5tFWGN2ho3qhGhXA2.png"
                  alt="HA NAIL logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="text-2xl font-bold">HA Nail Studio</h2>
            </div>
            <p className="text-gray-400 mb-4">
              Profesionálne nechtové štúdio v Rimavskej Sobote, kde sa krása a kvalita stretávajú.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-dark transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-dark transition-colors"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-dark transition-colors"
              >
                <FaTiktok size={18} />
              </Link>
            </div>
          </div>

          {/* Služby */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold mb-3 text-white">Služby</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#services" className="text-gray-400 hover:text-pink-dark transition-colors">
                  Manikúra
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-400 hover:text-pink-dark transition-colors">
                  Pedikúra
                </Link>
              </li>
            </ul>
          </div>

          {/* Rýchle odkazy */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold mb-3 text-white">Rýchle odkazy</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-pink-dark transition-colors">
                  Domov
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-400 hover:text-pink-dark transition-colors">
                  O nás
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-400 hover:text-pink-dark transition-colors">
                  Služby
                </Link>
              </li>
              <li>
                <Link href="/#gallery" className="text-gray-400 hover:text-pink-dark transition-colors">
                  Galéria
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-400 hover:text-pink-dark transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-3 text-white">Kontakt</h3>
            <div className="flex items-start space-x-2">
              <MapPin size={18} className="text-pink-dark flex-shrink-0 mt-1" />
              <p className="text-gray-400">Béla Bartóka 8/20, 979 01 Rimavská Sobota</p>
            </div>
            <div className="flex items-start space-x-2">
              <Phone size={18} className="text-pink-dark flex-shrink-0 mt-1" />
              <p className="text-gray-400">0902 098 964</p>
            </div>
            <div className="flex items-start space-x-2">
              <Mail size={18} className="text-pink-dark flex-shrink-0 mt-1" />
              <p className="text-gray-400">info@hanail.sk</p>
            </div>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} HA Nail Studio. Všetky práva vyhradené.
          </p>
          <p className="text-gray-400 text-sm">
            Website made by{" "}
            <Link
              href="https://haze.sk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-dark hover:text-pink-medium transition-colors"
            >
              HAZE
            </Link>
            Design
          </p>
        </div>
      </div>
    </footer>
  )
}

