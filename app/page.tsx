import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Pricing from "@/components/pricing"
import Gallery from "@/components/gallery"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import LoadingScreen from "@/components/loading-screen"
import ScrollReveal from "@/components/scroll-reveal"
import Navigation from "@/components/navigation"
import Promotion from "@/components/promotion"
import PromotionBanner from "@/components/promotion-banner"

export default function Home() {
  return (
    <main>
      <LoadingScreen />
      <Navigation />
      <Hero />
      <About />
      <Promotion />
      <Services />
      <Pricing />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollReveal />
      <PromotionBanner />
    </main>
  )
}

