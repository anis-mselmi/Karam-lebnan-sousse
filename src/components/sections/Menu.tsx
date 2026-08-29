import { motion } from 'motion/react'
import { restaurant } from '../../data/restaurant'
import { Mosaic } from './Mosaic'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { useT } from '../../i18n/strings'
import { springs } from '../../motion'

export function Menu() {
  const t = useT()

  return (
    <section id="menu" className="section-pad scroll-mt-24">
      <div className="u-container">
        <Reveal>
          <SectionHeading eyebrow={t.menu.eyebrow} title={t.menu.title} description={t.menu.description} />
        </Reveal>

        {/* Bouton principal : ouvre la carte complète (page dédiée). */}
        <Reveal delay={0.06} className="mt-8 flex justify-center">
          <motion.a href="#/carte" whileTap={{ scale: 0.96 }} transition={springs.soft} className="btn-white">
            {t.menu.viewMenu}
          </motion.a>
        </Reveal>
      </div>

      {/* Mosaïque de plats — pleine largeur, révélée plat par plat au défilement */}
      <div className="mt-12 w-full px-4 sm:px-6">
        <Mosaic />
      </div>

      <div className="u-container">
        <Reveal delay={0.1} className="mt-10 flex justify-center">
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
      </div>
    </section>
  )
}
