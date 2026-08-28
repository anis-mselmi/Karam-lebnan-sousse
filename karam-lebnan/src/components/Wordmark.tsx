import { Cedar } from './Cedar'

interface WordmarkProps {
  className?: string
  cedarClassName?: string
}

/**
 * Logotype « Karam 🌲 Lebnan » en script, décliné en blanc sur fond rouge
 * (à la manière du logo au trait d'AlBaik). Réutilisé dans le header, le héros
 * et le pied de page pour une identité cohérente.
 */
export function Wordmark({ className, cedarClassName }: WordmarkProps) {
  return (
    <span className={`inline-flex items-center gap-1.5 font-script font-bold leading-none ${className ?? ''}`}>
      <span>Karam</span>
      <Cedar className={cedarClassName ?? 'h-[0.9em] w-[0.9em]'} title="Cèdre du Liban" />
      <span>Lebnan</span>
    </span>
  )
}
