import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { menu } from '../data/menu'
import type { PouletItem, SandwichItem } from '../types/menu'
import { restaurant } from '../data/restaurant'
import { MenuCard } from './MenuCard'
import { Mosaic } from './Mosaic'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'
import { springs } from '../motion'
import { formatPrice } from '../utils/format'

export function Menu() {
  const [activeId, setActiveId] = useState(menu[0].id)
  const active = menu.find((category) => category.id === activeId) ?? menu[0]

  return (
    <section id="menu" className="section-pad scroll-mt-24">
      <div className="u-container">
        <Reveal>
          <SectionHeading
            eyebrow="Notre carte"
            title="Le menu, du mezzé au grand plateau."
            description="Un aperçu en images, puis toute la carte et les prix, en dinars tunisiens."
          />
        </Reveal>

        {/* Mosaïque de plats (style « Our Menu » AlBaik) */}
        <Reveal delay={0.08} className="mt-10">
          <Mosaic />
        </Reveal>

        <Reveal delay={0.1} className="mt-6 flex justify-center">
          <motion.a
            href={restaurant.links.glovo}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.96 }}
            transition={springs.soft}
            className="btn-gold"
          >
            Commander sur Glovo
          </motion.a>
        </Reveal>

        {/* Toute la carte & les prix */}
        <h3 className="mt-16 text-center font-script text-3xl font-bold text-or-light">Toute la carte</h3>
        <p className="mb-2 mt-1 text-center text-white/75">Les incontournables sont signalés d’un badge.</p>

        {/* Contrôle segmenté (indicateur qui glisse au ressort) */}
        <div
          className="sticky top-[4.75rem] z-30 mx-auto mt-10 w-max max-w-full overflow-x-auto rounded-full bg-white p-1.5 shadow-float [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="tablist"
          aria-label="Catégories du menu"
        >
          <div className="flex w-max gap-1">
            {menu.map((category) => {
              const selected = category.id === activeId
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveId(category.id)}
                  className="relative whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors"
                >
                  {selected && (
                    <motion.span
                      layoutId="menu-pill"
                      transition={springs.pill}
                      className="absolute inset-0 rounded-full bg-rouge shadow-chip"
                    />
                  )}
                  <span className={`relative z-10 ${selected ? 'text-white' : 'text-ink-soft'}`}>
                    {category.label}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Panneau de la catégorie active */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            role="tabpanel"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8"
          >
            <div className="mb-5 flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1 text-center">
              <h3 className="font-display text-2xl font-bold text-white">{active.label}</h3>
              {active.note ? <p className="text-sm text-white/70">{active.note}</p> : null}
            </div>

            {active.variant === 'simple' ? (
              <div className="grid gap-4 sm:grid-cols-2">
                {splitInTwo(active.items).map((group, i) => (
                  <div key={i} className="overflow-hidden rounded-4xl border border-line bg-canvas-card shadow-soft">
                    <div className="divide-y divide-line">
                      {group.map((item) => (
                        <MenuCard key={item.name} item={item} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : null}

            {active.variant === 'sandwich' ? (
              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                {active.items.map((item) => (
                  <SandwichCard key={item.name} item={item} />
                ))}
              </div>
            ) : null}

            {active.variant === 'poulet' ? (
              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                {active.items.map((item) => (
                  <PouletCard key={item.name} item={item} />
                ))}
              </div>
            ) : null}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

/** Répartit une liste en deux colonnes équilibrées (première un peu plus longue). */
function splitInTwo<T>(items: T[]): [T[], T[]] {
  const half = Math.ceil(items.length / 2)
  return [items.slice(0, half), items.slice(half)]
}

const sandwichColumns: { key: keyof Omit<SandwichItem, 'name' | 'popular'>; label: string }[] = [
  { key: 'nature', label: 'Nature' },
  { key: 'fromage', label: '+ Fromage' },
  { key: 'oeuf', label: '+ Œuf' },
  { key: 'oeufFromage', label: '+ Œuf & fromage' },
]

function PriceChip({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl bg-canvas px-3 py-2">
      <div className="text-[0.68rem] font-medium uppercase tracking-wide text-ink-mute">{label}</div>
      <div className="font-display font-bold tabular-nums text-ink">{formatPrice(value)}</div>
    </div>
  )
}

function SandwichCard({ item }: { item: SandwichItem }) {
  return (
    <article className="rounded-4xl border border-line bg-canvas-card p-5 shadow-soft">
      <div className="flex items-center gap-2">
        <h4 className="font-display text-lg font-bold text-ink">{item.name}</h4>
        {item.popular ? (
          <span className="rounded-full bg-rouge-soft px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wide text-rouge-deep">
            Populaire
          </span>
        ) : null}
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {sandwichColumns.map((col) => (
          <PriceChip key={col.key} label={col.label} value={item[col.key]} />
        ))}
      </div>
    </article>
  )
}

function PouletCard({ item }: { item: PouletItem }) {
  return (
    <article className="rounded-4xl border border-line bg-canvas-card p-5 shadow-soft">
      <h4 className="font-display text-lg font-bold text-ink">{item.name}</h4>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <PriceChip label="Sans garniture" value={item.sansGarniture} />
        <PriceChip label="Avec garniture" value={item.avecGarniture} />
      </div>
    </article>
  )
}
