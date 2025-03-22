"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulácia načítania stránky s postupným progress barom
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setLoading(false)
          }, 300)
          return 100
        }
        return prev + 5
      })
    }, 100)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div
      className={`loading-screen flex flex-col items-center justify-center bg-white ${loading ? "" : "exit-animation"}`}
      style={{ visibility: loading ? "visible" : "hidden" }}
    >
      <div className="relative w-40 h-40 mb-4">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-vXtbVvwkTNzlf5tFWGN2ho3qhGhXA2.png"
          alt="HA NAIL logo"
          fill
          className="object-contain"
        />
      </div>
      <h1 className="text-2xl font-bold text-pink-dark mb-6">HA NAIL STUDIO</h1>
      <div className="w-64 h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#ff6b8b] to-[#ffc0cb] transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  )
}

