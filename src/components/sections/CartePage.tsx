import { useEffect } from 'react'
import { motion } from 'motion/react'
import { menu } from '../../data/menu'
import { menuAr } from '../../data/menuAr'
import { restaurant } from '../../data/restaurant'
import { Reveal } from '../ui/Reveal'
import { ImageWithFallback } from '../ui/ImageWithFallback'
import { useLang } from '../../i18n/LanguageContext'
import { useT } from '../../i18n/strings'
import { springs } from '../../motion'

/**
 * Page « carte complète » : toute la carte présentée en mosaïque de photos.
 * Chaque plat est une simple photo (sans texte), accessible via le bouton
 * « Voir toute la carte » (route #/carte).
 */
export function CartePage() {
  const { lang } = useLang()
  const t = useT()
  const data = lang === 'ar' ? menuAr : menu

  // Ouvre la page en haut, quelle que soit la position de défilement précédente.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen pb-20">
      {/* Titre de page */}
      <div className="u-container pt-12 text-center sm:pt-16">
        <span className="eyebrow-script">{t.carte.eyebrow}</span>
        <h1 className="mt-1 text-4xl font-extrabold text-white sm:text-5xl">{t.carte.title}</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/80">{t.carte.sub}</p>
      </div>

      {/* Catégories — mosaïque de photos */}
      <div className="u-container mt-12 space-y-14">
        {data.map((category) => (
          <Reveal key={category.id}>
            <section aria-labelledby={`cat-${category.id}`}>
              <div className="mb-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h2 id={`cat-${category.id}`} className="font-display text-2xl font-extrabold text-white sm:text-3xl">
                  {category.label}
                </h2>
                {category.note ? <p className="text-sm text-white/70">{category.note}</p> : null}
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                {(category.items as ReadonlyArray<{ name: string; image?: string }>).map((item) => (
                  <PhotoCard key={item.name} src={item.image} alt={item.name} />
                ))}
              </div>
            </section>
          </Reveal>
        ))}
      </div>

      {/* Appel à l'action */}
      <div className="u-container mt-16 flex flex-col items-center gap-4">
        <motion.a
          href={restaurant.links.glovo}
          target="_blank"
          rel="noopener noreferrer"
          whileTap={{ scale: 0.96 }}
          transition={springs.soft}
          className="btn-gold"
        >
          {t.menu.orderGlovo}
        </motion.a>
        <a href="#accueil" className="text-sm font-semibold text-white/70 underline-offset-4 hover:text-white hover:underline">
          {t.carte.back}
        </a>
      </div>
    </main>
  )
}

/** Carte photo pure : grande image en ratio uniforme, sans texte, zoom doux au survol. */
function PhotoCard({ src, alt }: { src?: string; alt: string }) {
  return (
    <article className="group overflow-hidden rounded-[2rem] bg-white/5 shadow-[0_24px_60px_-32px_rgba(20,4,5,0.85)] ring-1 ring-white/10 transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform hover:-translate-y-1.5 hover:shadow-[0_40px_80px_-30px_rgba(20,4,5,0.95)] hover:ring-white/25 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <div className="aspect-[4/3] w-full overflow-hidden">
        <ImageWithFallback
          src={src ?? ''}
          alt={alt}
          label=""
          className="h-full w-full"
          imgClassName="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </div>
    </article>
  )
}

