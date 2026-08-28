import { features, restaurant, services } from '../data/restaurant'
import type { Service } from '../data/restaurant'
import { Cedar } from './Cedar'
import { Reveal } from './Reveal'
import { Panel } from './Panel'
import { ImageWithFallback } from './ImageWithFallback'
import { StarRating } from './StarRating'
import { formatNumber } from '../utils/format'

const stats = [
  { value: `${formatNumber(restaurant.rating.value)}/5`, label: `${restaurant.rating.count} avis` },
  { value: '7j/7', label: 'jusqu’à 2 h' },
  { value: '100%', label: 'halal' },
  { value: '10–20', label: 'DT / pers.' },
]

export function About() {
  return (
    <section id="apropos" className="section-pad scroll-mt-20">
      <div className="u-container space-y-6">
        {/* Carte « Notre histoire » */}
        <Reveal>
          <Panel tone="rouge" className="p-7 shadow-hero ring-1 ring-white/10 sm:p-12">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <span className="font-script text-3xl font-bold text-or-light">Notre histoire</span>
                <h2 className="mt-1 text-3xl font-bold text-white sm:text-[2.6rem]">
                  Une cuisine libanaise, généreuse et sans détour.
                </h2>
                <div className="mt-5 space-y-4 text-white/85">
                  <p>
                    Chez {restaurant.name}, on cuisine le Liban comme à la maison : des marinades qui
                    prennent leur temps, du charbon pour les grillades et des mezzés préparés le jour même.
                  </p>
                  <p>
                    À deux pas de Khzema Ouest, la salle est climatisée et l’ambiance reste calme —
                    étudiants, familles et voyageurs de passage y trouvent la même table.
                  </p>
                </div>

                <div className="mt-7 grid grid-cols-4 gap-2 sm:gap-3">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl bg-white/10 px-2 py-3 text-center">
                      <div className="font-display text-xl font-bold text-white sm:text-2xl">{stat.value}</div>
                      <div className="mt-0.5 text-[0.7rem] text-white/70">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <StarRating value={restaurant.rating.value} size={18} emptyColor="rgba(255,255,255,0.3)" />
                  <span className="text-sm text-white/85">
                    {formatNumber(restaurant.rating.value)} sur 5 · {restaurant.rating.count} avis Google
                  </span>
                </div>
              </div>

              <div className="relative">
                <ImageWithFallback
                  src={restaurant.storyImage}
                  alt="Ambiance chaleureuse en salle chez Karam Lebnan"
                  label="En salle"
                  className="aspect-[4/3] rounded-4xl shadow-float ring-4 ring-white/15"
                />
                <div className="absolute -bottom-4 -left-4 flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-chip">
                  <Cedar className="h-5 w-5 text-cedre" />
                  <span className="text-xs font-bold uppercase tracking-wide text-ink">100 % Halal</span>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-white/15 pt-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="mr-1 font-script text-2xl font-bold text-or-light">Ce qu’on aime ici :</span>
                {features.map((feature) => (
                  <span key={feature} className="rounded-full bg-white/12 px-3.5 py-1.5 text-sm text-white/90">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </Panel>
        </Reveal>

        {/* Carte « Nos services » */}
        <Reveal delay={0.08}>
          <Panel tone="rouge" className="p-7 shadow-hero ring-1 ring-white/10 sm:p-10">
            <span className="font-script text-3xl font-bold text-or-light">À votre service</span>
            <h3 className="mt-1 text-2xl font-bold text-white sm:text-3xl">Quatre façons de se régaler.</h3>
            <ul className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <li key={service.key} className="rounded-4xl bg-white/10 p-6">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-rouge">
                    <ServiceIcon service={service.key} />
                  </span>
                  <div className="mt-4 font-display text-lg font-bold text-white">{service.title}</div>
                  <p className="mt-1 text-sm text-white/75">{service.description}</p>
                </li>
              ))}
            </ul>
          </Panel>
        </Reveal>
      </div>
    </section>
  )
}

function ServiceIcon({ service }: { service: Service['key'] }) {
  switch (service) {
    case 'sur-place':
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M6 8V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3M7 8v12M17 8v12M4 20h16" />
        </svg>
      )
    case 'emporter':
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 8h12l-1 12H7L6 8Zm3 0V6a3 3 0 0 1 6 0v2" />
        </svg>
      )
    case 'drive':
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v-3l2-5h12l2 5v3M4 16h16M4 16v2M20 16v2M7.5 16h.01M16.5 16h.01" />
        </svg>
      )
    case 'livraison':
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h11v8H3zM14 10h4l3 3v2h-7M7 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
        </svg>
      )
  }
}
