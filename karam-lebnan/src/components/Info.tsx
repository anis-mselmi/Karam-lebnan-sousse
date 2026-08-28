import { motion } from 'motion/react'
import { restaurant } from '../data/restaurant'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'
import { springs } from '../motion'

export function Info() {
  return (
    <section id="infos" className="section-pad scroll-mt-20">
      <div className="u-container">
        <Reveal>
          <SectionHeading
            eyebrow="Contactez-nous"
            title="Nous trouver & commander."
            description="Ouvert tous les jours, midi comme tard le soir. Passez, appelez ou commandez en livraison."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* Coordonnées */}
          <Reveal className="flex flex-col gap-6">
            <div className="rounded-4xl bg-white p-7 shadow-float">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="flex items-center gap-2 font-display text-lg font-bold text-ink">
                    <ClockIcon /> Horaires
                  </h3>
                  <p className="mt-2 font-display text-3xl font-bold text-ink">{restaurant.hours.range}</p>
                  <p className="text-sm text-ink-mute">{restaurant.hours.detail}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-cedre-soft px-3 py-1 text-xs font-bold text-cedre-deep">
                  <span className="h-2 w-2 rounded-full bg-cedre" /> {restaurant.hours.label}
                </span>
              </div>

              <div className="mt-6 border-t border-line pt-6">
                <h3 className="flex items-center gap-2 font-display text-lg font-bold text-ink">
                  <PinIcon /> Adresse
                </h3>
                <address className="mt-2 not-italic text-ink-soft">
                  {restaurant.address.line1}
                  <br />
                  {restaurant.address.line2}
                </address>
                <p className="mt-3">
                  <a href={restaurant.phoneHref} className="font-display text-2xl font-bold text-rouge">
                    {restaurant.phoneDisplay}
                  </a>
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <motion.a whileTap={{ scale: 0.96 }} transition={springs.soft} href={restaurant.phoneHref} className="btn-quiet px-5 py-3 text-[0.85rem]">
                  Appeler
                </motion.a>
                <motion.a
                  whileTap={{ scale: 0.96 }}
                  transition={springs.soft}
                  href={restaurant.links.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-quiet px-5 py-3 text-[0.85rem]"
                >
                  Itinéraire
                </motion.a>
                <motion.a
                  whileTap={{ scale: 0.96 }}
                  transition={springs.soft}
                  href={restaurant.links.glovo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold px-5 py-3 text-[0.85rem]"
                >
                  Commander sur Glovo
                </motion.a>
              </div>
            </div>
          </Reveal>

          {/* Carte */}
          <Reveal delay={0.1} className="min-h-[380px]">
            <div className="h-full overflow-hidden rounded-4xl shadow-float">
              <iframe
                title={`Localisation de ${restaurant.name} sur Google Maps`}
                src={restaurant.links.mapsEmbed}
                className="h-full min-h-[380px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function ClockIcon() {
  return (
    <svg className="h-5 w-5 text-cedre" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg className="h-5 w-5 text-cedre" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}
