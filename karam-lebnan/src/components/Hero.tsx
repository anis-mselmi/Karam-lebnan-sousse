import { motion } from 'motion/react'
import { restaurant } from '../data/restaurant'
import { StarRating } from './StarRating'
import { Wordmark } from './Wordmark'
import { SunburstRays } from './SunburstRays'
import { springs } from '../motion'
import { formatNumber } from '../utils/format'

const container = {
  hidden: {},
  shown: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 16 },
  shown: { opacity: 1, y: 0, transition: springs.soft },
}

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-b from-rouge via-rouge to-rouge-deep text-white"
    >
      {/* Lueur chaude dorée */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[75vh] bg-[radial-gradient(60%_55%_at_50%_0%,rgba(240,180,41,0.35),transparent_70%)]"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute left-6 top-1/4 select-none font-arabic text-[7rem] leading-none text-white/[0.06] sm:text-[11rem]"
        dir="rtl"
        lang="ar"
        aria-hidden="true"
      >
        {restaurant.nameArabic}
      </span>

      <div className="u-container relative flex flex-1 flex-col items-center justify-center pb-20 pt-28 text-center">
        <motion.div variants={container} initial="hidden" animate="shown" className="flex flex-col items-center">
          <motion.span
            variants={item}
            className="rounded-full border border-white/25 px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/85"
          >
            {restaurant.cuisine} · {restaurant.city} · Depuis toujours
          </motion.span>

          {/* Logotype dans l'éclat */}
          <div className="relative mt-10 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.82, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ ...springs.snappy, delay: 0.15 }}
              className="pointer-events-none absolute inset-0 flex items-center justify-center"
              aria-hidden="true"
            >
              <SunburstRays className="h-[30rem] w-[30rem] text-white/30 sm:h-[38rem] sm:w-[38rem]" />
            </motion.div>

            <motion.div variants={item} className="relative">
              <Wordmark
                className="text-6xl text-white sm:text-8xl"
                cedarClassName="h-14 w-14 sm:h-20 sm:w-20"
              />
            </motion.div>
          </div>

          <motion.p variants={item} className="mt-6 font-script text-3xl font-semibold text-or-light sm:text-4xl">
            {restaurant.tagline}
          </motion.p>

          <motion.p variants={item} className="mt-4 max-w-xl text-base text-white/80 sm:text-lg">
            Chawarma tranché minute, brochettes au feu de bois et mezzés préparés chaque jour.
            Cuisine 100 % halal, ouverte 7 j/7 jusqu’à 2 h du matin.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <motion.a
              href="#menu"
              whileTap={{ scale: 0.96 }}
              transition={springs.soft}
              className="rounded-full bg-white px-8 py-4 text-[0.95rem] font-bold text-rouge shadow-chip transition-colors hover:bg-canvas"
            >
              Voir le menu
            </motion.a>
            <motion.a
              href={restaurant.links.glovo}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.96 }}
              transition={springs.soft}
              className="rounded-full bg-or px-8 py-4 text-[0.95rem] font-bold text-rouge-dark shadow-chip transition-colors hover:bg-or-light"
            >
              Commander sur Glovo
            </motion.a>
          </motion.div>

          <motion.div variants={item} className="mt-6 flex items-center justify-center gap-2.5 text-sm text-white/85">
            <StarRating value={restaurant.rating.value} size={16} emptyColor="rgba(255,255,255,0.3)" />
            <span>
              <strong className="font-semibold text-white">{formatNumber(restaurant.rating.value)}</strong> · {restaurant.rating.count} avis Google
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Indicateur de défilement */}
      <motion.a
        href="#apropos"
        aria-label="Découvrir la suite"
        className="absolute inset-x-0 bottom-6 mx-auto flex w-max flex-col items-center gap-1 text-white/70 transition-colors hover:text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 7, 0] }}
        transition={{ opacity: { delay: 1, duration: 0.6 }, y: { delay: 1, duration: 1.8, repeat: Infinity, ease: 'easeInOut' } }}
      >
        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.16em]">Découvrir</span>
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
        </svg>
      </motion.a>
    </section>
  )
}
