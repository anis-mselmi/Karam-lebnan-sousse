import type { Transition } from 'motion/react'

/**
 * Presets de ressort inspirés de « Designing Fluid Interfaces » (Apple).
 * bounce + duration correspondent à damping + response.
 */
export const springs = {
  /** UI par défaut : amorti critique, sans dépassement. */
  soft: { type: 'spring', bounce: 0, duration: 0.5 } satisfies Transition,
  /** Interaction avec élan (glissement, bascule) : léger rebond. */
  snappy: { type: 'spring', bounce: 0.2, duration: 0.45 } satisfies Transition,
  /** Indicateur segmenté qui glisse d'un onglet à l'autre. */
  pill: { type: 'spring', bounce: 0.18, duration: 0.5 } satisfies Transition,
}

/** Variantes d'apparition au défilement (révélation douce vers le haut). */
export const revealVariants = {
  hidden: { opacity: 0, y: 18 },
  shown: { opacity: 1, y: 0 },
}
