import { motion } from 'motion/react'
import { restaurant } from '../../data/restaurant'
import { Wordmark } from '../ui/Wordmark'
import { Reveal } from '../ui/Reveal'
import { useT } from '../../i18n/strings'
import { springs } from '../../motion'

/** Clôture simple : l'emblème, une invitation à appeler, puis la mention légale. */
export function Footer() {
  const t = useT()
  return (
    <footer id="contact" className="section-pad scroll-mt-24">
      <div className="u-container flex flex-col items-center text-center">
        <Reveal>
          <a href="#accueil" aria-label={t.footer.topAria} className="inline-flex">
            <Wordmark className="text-4xl text-white sm:text-5xl" cedarClassName="h-9 w-9 sm:h-11 sm:w-11" />
          </a>
        </Reveal>

        <Reveal delay={0.06}>
          <p className="mt-4 max-w-sm text-white/70">{t.footer.invite}</p>
        </Reveal>

        <Reveal delay={0.12}>
          <motion.a
            href={restaurant.phoneHref}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={springs.snappy}
            className="btn-gold mt-7 shadow-[0_16px_40px_-16px_rgba(240,180,41,0.7)]"
          >
            <PhoneIcon />
            {t.footer.contact}
          </motion.a>
        </Reveal>

        <div className="mt-10 h-px w-full max-w-xs bg-white/15" />

        <p className="mt-5 text-sm text-white/55">
          © {new Date().getFullYear()} {restaurant.name} · {restaurant.city}
        </p>
      </div>
    </footer>
  )
}

function PhoneIcon() {
  return (
    <svg className="h-[1.05rem] w-[1.05rem]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.5 5.5A2 2 0 0 1 4.5 3.5h2a1 1 0 0 1 1 .76l.9 3.6a1 1 0 0 1-.5 1.1l-1.6.9a12 12 0 0 0 5.3 5.3l.9-1.6a1 1 0 0 1 1.1-.5l3.6.9a1 1 0 0 1 .76 1v2a2 2 0 0 1-2 2A16 16 0 0 1 2.5 5.5Z"
      />
    </svg>
  )
}
