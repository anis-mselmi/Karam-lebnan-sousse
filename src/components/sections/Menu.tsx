import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { menu } from '../../data/menu'
import { menuAr } from '../../data/menuAr'
import type { PouletItem, SandwichItem } from '../../types/menu'
import { restaurant } from '../../data/restaurant'
import { MenuCard } from './MenuCard'
import { Mosaic } from './Mosaic'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { useLang } from '../../i18n/LanguageContext'
import { useT } from '../../i18n/strings'
import { springs } from '../../motion'
import { formatPrice } from '../../utils/format'

export function Menu() {
  const { lang } = useLang()
  const t = useT()
  const data = lang === 'ar' ? menuAr : menu
  const [activeId, setActiveId] = useState(data[0].id)
  const active = data.find((category) => category.id === activeId) ?? data[0]

  return (
    <section id="menu" className="section-pad scroll-mt-24">
      <div className="u-container">
        <Reveal>
          <SectionHeading eyebrow={t.menu.eyebrow} title={t.menu.title} description={t.menu.description} />
        </Reveal>
      </div>

      {/* Mosaïque de plats — pleine largeur, révélée plat par plat au défilement */}
      <div className="mt-10 w-full px-4 sm:px-6">
        <Mosaic />
      </div>

      <div className="u-container">
        <Reveal delay={0.1} className="mt-8 flex justify-center">
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
        </Reveal>

        {/* Toute la carte & les prix */}
        <div className="mt-16 text-center">
          <span className="eyebrow-script">{t.menu.priceEyebrow}</span>
          <h3 className="mt-1 text-3xl font-extrabold text-white sm:text-4xl">{t.menu.priceTitle}</h3>
          <p className="mt-2 text-white/75">{t.menu.priceSub}</p>
        </div>

        {/* Carnet de la carte : un seul panneau blanc */}
        <Reveal delay={0.06} className="mx-auto mt-8 max-w-4xl">
          <div className="rounded-6xl bg-white p-5 text-ink shadow-[0_40px_90px_-40px_rgba(60,8,10,0.6)] ring-1 ring-black/[0.04] sm:p-8">
            {/* Onglets */}
            <div
              className="-mx-1 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              role="tablist"
              aria-label={t.menu.priceTitle}
            >
              <div className="flex w-max gap-1 px-1">
                {data.map((category) => {
                  const selected = category.id === activeId
                  return (
                    <button
                      key={category.id}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      onClick={() => setActiveId(category.id)}
                      className="relative whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors hover:text-rouge"
                    >
                      {selected && (
                        <motion.span layoutId="menu-pill" transition={springs.pill} className="absolute inset-0 rounded-full bg-rouge shadow-[0_8px_20px_-8px_rgba(210,31,40,0.7)]" />
                      )}
                      <span className={`relative z-10 transition-colors ${selected ? 'text-white' : 'text-ink-soft'}`}>{category.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Contenu de la catégorie */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                role="tabpanel"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 border-t border-ink/10 pt-6"
              >
                <div className="mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-display text-2xl font-extrabold text-ink">{active.label}</h3>
                  {active.note ? <p className="text-sm text-ink-mute">{active.note}</p> : null}
                </div>

                {active.variant === 'simple' ? (
                  <div className="grid gap-x-12 sm:grid-cols-2">
                    {splitInTwo(active.items).map((group, i) => (
                      <div key={i} className="divide-y divide-ink/10">
                        {group.map((item) => (
                          <MenuCard key={item.name} item={item} />
                        ))}
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
        </Reveal>
      </div>
    </section>
  )
}

/** Répartit une liste en deux colonnes équilibrées (première un peu plus longue). */
function splitInTwo<T>(items: T[]): [T[], T[]] {
  const half = Math.ceil(items.length / 2)
  return [items.slice(0, half), items.slice(half)]
}

const sandwichKeys: (keyof Omit<SandwichItem, 'name' | 'popular'>)[] = ['nature', 'fromage', 'oeuf', 'oeufFromage']

function PriceChip({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl bg-white px-3 py-2 shadow-sm ring-1 ring-ink/5 transition-shadow duration-300 group-hover/card:shadow-md">
      <div className="text-[0.68rem] font-medium uppercase tracking-wide text-ink-mute">{label}</div>
      <div className="font-display font-bold tabular-nums text-ink">{formatPrice(value)}</div>
    </div>
  )
}

function SandwichCard({ item }: { item: SandwichItem }) {
  const t = useT()
  return (
    <article className="group/card rounded-3xl bg-canvas p-5 ring-1 ring-ink/[0.06] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(60,8,10,0.35)] hover:ring-rouge/15">
      <div className="flex items-center gap-2">
        <h4 className="font-display text-lg font-bold text-ink">{item.name}</h4>
        {item.popular ? (
          <span className="rounded-full bg-rouge-soft px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wide text-rouge-deep">
            {t.menu.popular}
          </span>
        ) : null}
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {sandwichKeys.map((key) => (
          <PriceChip key={key} label={t.menu.chips[key]} value={item[key]} />
        ))}
      </div>
    </article>
  )
}

function PouletCard({ item }: { item: PouletItem }) {
  const t = useT()
  return (
    <article className="group/card rounded-3xl bg-canvas p-5 ring-1 ring-ink/[0.06] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(60,8,10,0.35)] hover:ring-rouge/15">
      <h4 className="font-display text-lg font-bold text-ink">{item.name}</h4>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <PriceChip label={t.menu.chips.sansGarniture} value={item.sansGarniture} />
        <PriceChip label={t.menu.chips.avecGarniture} value={item.avecGarniture} />
      </div>
    </article>
  )
}
