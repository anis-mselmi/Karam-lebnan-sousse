import { restaurant } from '../data/restaurant'
import { Cedar } from './Cedar'
import { Wordmark } from './Wordmark'

const navLinks = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#menu', label: 'Menu' },
  { href: '#apropos', label: 'Notre histoire' },
  { href: '#avis', label: 'Avis' },
  { href: '#infos', label: 'Infos pratiques' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-rouge-dark text-white/75">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden="true">
        <Cedar className="absolute -right-10 -top-10 h-64 w-64 rotate-6" />
      </div>
      <div className="u-container relative grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Wordmark className="text-3xl text-white" cedarClassName="h-6 w-6" />
          <p className="mt-2 font-arabic text-lg text-or-light/90" dir="rtl" lang="ar">
            {restaurant.nameArabic}
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed">{restaurant.tagline}</p>
        </div>

        <div>
          <h3 className="font-script text-2xl font-bold text-or-light">Contact</h3>
          <address className="mt-3 space-y-2 text-sm not-italic">
            <p>
              {restaurant.address.line1}
              <br />
              {restaurant.address.line2}
            </p>
            <p>
              <a href={restaurant.phoneHref} className="transition-colors hover:text-white">
                {restaurant.phoneDisplay}
              </a>
            </p>
            <p>
              {restaurant.hours.label}
              <br />
              {restaurant.hours.range}
            </p>
          </address>
        </div>

        <div>
          <h3 className="font-script text-2xl font-bold text-or-light">Navigation</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-script text-2xl font-bold text-or-light">Commander</h3>
          <a
            href={restaurant.links.glovo}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex w-full items-center justify-center rounded-full bg-or px-5 py-3 text-sm font-bold text-rouge-dark transition-colors hover:bg-or-light"
          >
            Livraison Glovo
          </a>
          <div className="mt-4 flex gap-3">
            <a
              href={restaurant.links.instagram}
              aria-label="Instagram (bientôt)"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10"
            >
              <InstagramIcon />
            </a>
            <a
              href={restaurant.links.facebook}
              aria-label="Facebook (bientôt)"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="u-container flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/55 sm:flex-row">
          <p>© {year} {restaurant.name} · {restaurant.address.line2}</p>
          <p>Restaurant libanais halal · {restaurant.priceRange}</p>
        </div>
      </div>
    </footer>
  )
}

function InstagramIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14 9h3l.5-3H14V4.5c0-.9.3-1.5 1.6-1.5H17V.3C16.7.2 15.8 0 14.7 0 12.3 0 10.7 1.5 10.7 4.2V6H8v3h2.7v9H14V9Z" />
    </svg>
  )
}
