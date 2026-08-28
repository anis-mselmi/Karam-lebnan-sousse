import { motion } from 'motion/react'
import { gallery } from '../../data/restaurant'
import { ImageWithFallback } from '../ui/ImageWithFallback'
import { useT } from '../../i18n/strings'

// Rythme éditorial : deux grandes vignettes, une bande de quatre, deux grandes.
const spans = [
  'sm:col-span-2 sm:row-span-2',
  'sm:col-span-2',
  'sm:col-span-2',
  'sm:col-span-1',
  'sm:col-span-1',
  'sm:col-span-2',
  'sm:col-span-2',
  'sm:col-span-2',
]

// Chaque carte glisse vers le haut en fondu ; le parent orchestre le décalage.
const gridVariants = {
  hidden: {},
  shown: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}
const cardVariants = {
  hidden: { opacity: 0, y: 34, scale: 0.94 },
  shown: { opacity: 1, y: 0, scale: 1 },
}

/** Cartes de plats séparées, plus grandes, révélées plat par plat au défilement. */
export function Mosaic() {
  const t = useT()
  return (
    <motion.div
      className="grid grid-cols-1 gap-4 sm:auto-rows-[200px] sm:grid-cols-4 sm:gap-5 lg:auto-rows-[248px] xl:auto-rows-[270px]"
      variants={gridVariants}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.12 }}
    >
      {gallery.map((photo, index) => {
        const tr = t.gallery[index] ?? { label: photo.label, alt: photo.alt }
        return (
        <motion.div
          key={photo.src}
          variants={cardVariants}
          transition={{ type: 'spring', bounce: 0.24, duration: 0.65 }}
          className={`group relative overflow-hidden rounded-[1.75rem] shadow-[0_22px_55px_-26px_rgba(60,8,10,0.8)] ring-1 ring-white/15 transition-shadow duration-500 ease-out hover:shadow-[0_34px_75px_-28px_rgba(60,8,10,0.85)] max-sm:aspect-[4/3] ${spans[index % spans.length]}`}
          whileHover={{ y: -8 }}
        >
          <ImageWithFallback
            src={photo.src}
            alt={tr.alt}
            label={tr.label}
            className="h-full w-full"
            imgClassName="h-full w-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
          />

          {/* Voile dégradé pour la lisibilité du libellé */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Libellé + accent doré (signature de la carte) */}
          <div className="pointer-events-none absolute inset-x-5 bottom-4">
            <span className="block h-[3px] w-8 rounded-full bg-or transition-all duration-500 ease-out group-hover:w-16" />
            <div className="mt-2.5 flex items-end justify-between gap-3">
              <span className="font-display text-lg font-bold leading-tight text-white [text-shadow:0_1px_10px_rgba(0,0,0,0.45)] sm:text-xl">
                {tr.label}
              </span>
              <span className="flex h-8 w-8 shrink-0 translate-y-1 items-center justify-center rounded-full bg-or text-rouge-dark opacity-0 shadow-lg transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M9 7h8v8" />
                </svg>
              </span>
            </div>
          </div>
        </motion.div>
        )
      })}
    </motion.div>
  )
}
