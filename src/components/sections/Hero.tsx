import { motion } from 'motion/react'
import { restaurant } from '../../data/restaurant'
import { Wordmark } from '../ui/Wordmark'
import { SunburstRays } from '../ui/SunburstRays'
import { useT } from '../../i18n/strings'
import { springs } from '../../motion'

export function Hero() {
  const t = useT()
  return (
    <section id="accueil" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden text-white">
      <span
        className="pointer-events-none absolute left-6 top-1/4 select-none font-arabic text-[7rem] leading-none text-white/[0.06] sm:text-[11rem]"
        dir="rtl"
        lang="ar"
        aria-hidden="true"
      >
        {restaurant.nameArabic}
      </span>

      <div className="relative flex flex-col items-center px-5 pt-20 text-center">
        {/* Emblème dans l'éclat */}
        <div className="relative flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.82, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ ...springs.snappy, delay: 0.1 }}
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
            aria-hidden="true"
          >
            <SunburstRays className="h-[32rem] w-[32rem] text-white/30 sm:h-[42rem] sm:w-[42rem]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springs.soft, delay: 0.25 }}
            className="relative"
          >
            <Wordmark className="text-6xl text-white sm:text-8xl" cedarClassName="h-14 w-14 sm:h-20 sm:w-20" />
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springs.soft, delay: 0.45 }}
          className="mt-6 font-script text-3xl font-bold italic text-or-light sm:text-4xl"
        >
          {t.hero.subtitle}
        </motion.p>
      </div>

      {/* Indicateur de défilement */}
      <motion.a
        href="#apropos"
        aria-label={t.hero.discoverAria}
        className="absolute inset-x-0 bottom-6 mx-auto flex w-max flex-col items-center gap-1 text-white/70 transition-colors hover:text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 7, 0] }}
        transition={{ opacity: { delay: 1, duration: 0.6 }, y: { delay: 1, duration: 1.8, repeat: Infinity, ease: 'easeInOut' } }}
      >
        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.16em]">{t.hero.discover}</span>
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
        </svg>
      </motion.a>
    </section>
  )
}
