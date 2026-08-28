import { MotionConfig } from 'motion/react'
import { LanguageProvider } from './i18n/LanguageContext'
import { useT } from './i18n/strings'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { FloatingActions } from './components/layout/FloatingActions'
import { Hero } from './components/sections/Hero'
import { PlatBand } from './components/sections/PlatBand'
import { About } from './components/sections/About'
import { Menu } from './components/sections/Menu'

export default function App() {
  return (
    <LanguageProvider>
      <MotionConfig reducedMotion="user">
        <SkipLink />

        <Navbar />

        <main>
          <Hero />
          <PlatBand />
          <About />
          <Menu />
        </main>

        <Footer />

        <FloatingActions />
      </MotionConfig>
    </LanguageProvider>
  )
}

function SkipLink() {
  const t = useT()
  return (
    <a
      href="#menu"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-rouge"
    >
      {t.menu.eyebrow}
    </a>
  )
}
