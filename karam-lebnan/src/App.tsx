import { MotionConfig } from 'motion/react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { PlatBand } from './components/PlatBand'
import { About } from './components/About'
import { Menu } from './components/Menu'
import { Reviews } from './components/Reviews'
import { Info } from './components/Info'
import { Footer } from './components/Footer'
import { FloatingActions } from './components/FloatingActions'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#menu"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-rouge"
      >
        Aller au menu
      </a>

      <Navbar />

      <main>
        <Hero />
        <PlatBand />
        <About />
        <Menu />
        <Reviews />
        <Info />
      </main>

      <Footer />
      <FloatingActions />
    </MotionConfig>
  )
}
