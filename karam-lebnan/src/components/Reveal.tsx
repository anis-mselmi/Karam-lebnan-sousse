import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import { revealVariants, springs } from '../motion'

interface RevealProps {
  children: ReactNode
  className?: string
  /** Décalage d'apparition en secondes (effet cascade). */
  delay?: number
}

/**
 * Révèle son contenu au défilement, une seule fois, avec un ressort doux.
 * Sous prefers-reduced-motion, <MotionConfig reducedMotion="user"> neutralise
 * les translations et ne garde qu'un fondu.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={revealVariants}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ ...springs.soft, delay }}
    >
      {children}
    </motion.div>
  )
}
