"use client"

import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react"
import { FaTiktok } from "react-icons/fa"
import Link from "next/link"

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-[#FFC0CB]/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="animate-on-scroll from-bottom">
          <h2 className="section-title">KONTAKT</h2>
          <p className="text-center max-w-2xl mx-auto mb-12 text-gray-600">
            Kontaktujte nás s akýmikoľvek otázkami alebo nás navštívte v našom štúdiu
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="animate-on-scroll from-left space-y-6">
            <div className="bg-white p-8 rounded-sm shadow-md">
              <h3 className="text-xl font-bold mb-6 uppercase text-pink-dark">Kontaktné informácie</h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-pink-dark flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Adresa</p>
                    <p className="text-gray-600">Béla Bartóka 8/20, 979 01 Rimavská Sobota</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="text-pink-dark flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Telefón</p>
                    <p className="text-gray-600">0902 098 964</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="text-pink-dark flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">info@hanail.sk</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-md">
              <h3 className="text-xl font-bold mb-6 uppercase text-pink-dark">Sledujte nás</h3>
              <div className="flex space-x-6">
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pink-gradient text-white p-3 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center"
                >
                  <Instagram size={24} />
                </Link>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pink-gradient text-white p-3 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center"
                >
                  <Facebook size={24} />
                </Link>
                <Link
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pink-gradient text-white p-3 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center"
                >
                  <FaTiktok size={22} />
                </Link>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll from-right space-y-6">
            <div className="bg-white p-8 rounded-sm shadow-md">
              <h3 className="text-xl font-bold mb-6 uppercase text-pink-dark">Otváracie hodiny</h3>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Pondelok - Piatok</span>
                  <span className="font-medium">9:00 - 19:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sobota</span>
                  <span className="font-medium">9:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Nedeľa</span>
                  <span className="font-medium">Zatvorené</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-md">
              <h3 className="text-xl font-bold mb-6 uppercase text-pink-dark">Rezervácie</h3>
              <p className="text-gray-600 mb-4">
                Online rezervačný systém bude čoskoro k dispozícii. Zatiaľ nás môžete kontaktovať telefonicky alebo
                emailom.
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Telefón:</span> 0902 098 964
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Email:</span> info@hanail.sk
              </p>
            </div>
          </div>
        </div>

        {/* Mapa na celú šírku */}
        <div className="animate-on-scroll zoom w-full mt-8 rounded-sm overflow-hidden shadow-md h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.0025494161!2d20.00939867673961!3d48.22731937129307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47401c9c1a2f8c3f%3A0x400f7671cf6d800!2zQsOpbGEgQmFydMOza2EgOC8yMCwgOTc5IDAxIFJpbWF2c2vDoSBTb2JvdGE!5e0!3m2!1sen!2ssk!4v1711042962788!5m2!1sen!2ssk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa s lokáciou nechtového štúdia"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

