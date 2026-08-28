import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { restaurant } from '../data/restaurant'
import { Wordmark } from './Wordmark'
import { springs } from '../motion'

const links = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#menu', label: 'Menu' },
  { href: '#apropos', label: 'Notre histoire' },
  { href: '#avis', label: 'Avis' },
  { href: '#infos', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => setScrolled(window.scrollY > 8))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-shadow duration-300 ${scrolled ? 'shadow-[0_10px_30px_-18px_rgba(124,15,22,0.8)]' : ''}`}
        style={{ background: scrolled ? 'rgba(165,20,28,0.95)' : 'rgba(210,31,40,0.9)', backdropFilter: 'blur(16px) saturate(160%)' }}
      >
        <nav className="u-container relative flex h-[4.75rem] items-center justify-between gap-4" aria-label="Navigation principale">
          <a href="#accueil" className="flex items-center" aria-label={`${restaurant.name} — accueil`}>
            <Wordmark className="text-[1.7rem] text-white" cedarClassName="h-6 w-6" />
          </a>

          {/* Liens de section centrés, façon AlBaik */}
          <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[0.95rem] font-semibold text-white/85 transition-colors hover:text-or-light"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={restaurant.phoneHref}
              className="hidden items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-[0.9rem] font-semibold text-white transition-colors hover:bg-white/15 md:inline-flex"
            >
              <PhoneIcon className="h-4 w-4" />
              {restaurant.phoneDisplay}
            </a>
            <motion.a
              href={restaurant.links.glovo}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.96 }}
              transition={springs.soft}
              className="hidden rounded-full bg-or px-5 py-2.5 text-[0.85rem] font-bold text-rouge-dark shadow-chip transition-colors hover:bg-or-light sm:inline-flex"
            >
              Commander
            </motion.a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white lg:hidden"
            >
              {open ? <CloseIcon className="h-5 w-5" /> : <BurgerIcon className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={springs.soft}
            className="mx-3 mt-2 overflow-hidden rounded-4xl bg-rouge shadow-float lg:hidden"
          >
            <ul className="flex flex-col gap-1 p-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-base font-semibold text-white/90 hover:bg-white/15"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-1 flex flex-col gap-2 p-1">
                <a href={restaurant.phoneHref} className="flex w-full items-center justify-center gap-2 rounded-full bg-white/15 px-4 py-3 text-sm font-semibold text-white">
                  <PhoneIcon className="h-4 w-4" /> Appeler le {restaurant.phoneDisplay}
                </a>
                <a
                  href={restaurant.links.glovo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center rounded-full bg-or px-4 py-3 text-sm font-bold text-rouge-dark"
                >
                  Commander sur Glovo
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.5 5.5A2 2 0 0 1 4.5 3.5h2a1 1 0 0 1 1 .76l.9 3.6a1 1 0 0 1-.5 1.1l-1.6.9a12 12 0 0 0 5.3 5.3l.9-1.6a1 1 0 0 1 1.1-.5l3.6.9a1 1 0 0 1 .76 1v2a2 2 0 0 1-2 2A16 16 0 0 1 2.5 5.5Z"
      />
    </svg>
  )
}

function BurgerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  )
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}
