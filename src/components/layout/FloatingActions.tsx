import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { restaurant } from '../../data/restaurant'
import { useT } from '../../i18n/strings'
import { springs } from '../../motion'

/** Barre d'actions flottante (mobile) : apparaît après le héros, façon verre. */
export function FloatingActions() {
  const t = useT()
  const [shown, setShown] = useState(false)

  useEffect(() => {
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => setShown(window.scrollY > 560))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <AnimatePresence>
      {shown && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={springs.snappy}
          className="fixed inset-x-0 bottom-0 z-40 lg:hidden"
        >
          <div className="mx-3 mb-[max(0.75rem,env(safe-area-inset-bottom))] flex gap-2 rounded-full bg-white p-1.5">
            <a
              href={restaurant.phoneHref}
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-ink/[0.06] px-4 py-3 text-sm font-semibold text-ink"
            >
              <PhoneIcon /> {t.floating.call}
            </a>
            <a
              href={restaurant.links.glovo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-[1.5] items-center justify-center gap-2 rounded-full bg-or px-4 py-3 text-sm font-bold text-rouge-dark"
            >
              {t.floating.orderGlovo}
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function PhoneIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.5 5.5A2 2 0 0 1 4.5 3.5h2a1 1 0 0 1 1 .76l.9 3.6a1 1 0 0 1-.5 1.1l-1.6.9a12 12 0 0 0 5.3 5.3l.9-1.6a1 1 0 0 1 1.1-.5l3.6.9a1 1 0 0 1 .76 1v2a2 2 0 0 1-2 2A16 16 0 0 1 2.5 5.5Z"
      />
    </svg>
  )
}
