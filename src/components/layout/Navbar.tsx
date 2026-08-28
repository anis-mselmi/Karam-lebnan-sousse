import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Wordmark } from '../ui/Wordmark'
import { useLang } from '../../i18n/LanguageContext'
import { useT } from '../../i18n/strings'
import { springs } from '../../motion'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { lang, setLang } = useLang()
  const t = useT()
  const links = t.nav.links

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="relative flex min-h-[7rem] w-full items-start justify-between gap-4 px-14 pt-9 sm:px-32 sm:pt-10" aria-label={t.nav.homeAria}>
        <a href="#accueil" className="flex items-center" aria-label={t.nav.homeAria}>
          <Wordmark className="text-[2.35rem] text-white sm:text-[2.55rem]" cedarClassName="h-9 w-9 sm:h-10 sm:w-10" />
        </a>

        <ul className="absolute left-1/2 top-9 hidden -translate-x-1/2 items-center gap-2 sm:top-10 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="inline-flex items-center rounded-full bg-white/10 px-7 py-3.5 text-[1.05rem] font-semibold text-white/90 ring-1 ring-white/15 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/20 hover:text-or hover:ring-white/30"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-start gap-3">
          {/* Bascule de langue FR / AR */}
          <div className="hidden items-center rounded-full border border-white/30 p-1 sm:flex" role="group" aria-label={t.nav.langAria}>
            <button
              type="button"
              onClick={() => setLang('fr')}
              aria-pressed={lang === 'fr'}
              className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                lang === 'fr' ? 'bg-white text-rouge-dark' : 'text-white/70 hover:text-white'
              }`}
            >
              FR
            </button>
            <button
              type="button"
              onClick={() => setLang('ar')}
              aria-pressed={lang === 'ar'}
              className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                lang === 'ar' ? 'bg-white text-rouge-dark' : 'text-white/70 hover:text-white'
              }`}
            >
              AR
            </button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white lg:hidden"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <BurgerIcon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={springs.soft}
            className="mx-3 mt-2 overflow-hidden rounded-4xl bg-rouge lg:hidden"
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
              <li className="mt-1 flex items-center gap-2 px-2 pt-2">
                <span className="rounded-full border border-white/25 p-1">
                  <button
                    type="button"
                    onClick={() => setLang('fr')}
                    aria-pressed={lang === 'fr'}
                    className={`rounded-full px-4 py-1.5 text-sm font-bold transition-colors ${
                      lang === 'fr' ? 'bg-white text-rouge-dark' : 'text-white/70'
                    }`}
                  >
                    FR
                  </button>
                  <button
                    type="button"
                    onClick={() => setLang('ar')}
                    aria-pressed={lang === 'ar'}
                    className={`rounded-full px-4 py-1.5 text-sm font-bold transition-colors ${
                      lang === 'ar' ? 'bg-white text-rouge-dark' : 'text-white/70'
                    }`}
                  >
                    AR
                  </button>
                </span>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
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
