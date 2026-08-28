import type { ReactNode } from 'react'
import { Cedar } from './Cedar'

interface PanelProps {
  children: ReactNode
  className?: string
  /** Teinte du panneau. */
  tone?: 'rouge' | 'cedre'
}

/**
 * Grand panneau arrondi et coloré, avec un filigrane de cèdres en ton sur ton
 * (transpose la trame de mascotte d'AlBaik à l'identité Karam Lebnan).
 */
export function Panel({ children, className, tone = 'rouge' }: PanelProps) {
  const bg = tone === 'rouge' ? 'bg-rouge text-white' : 'bg-cedre-deep text-white'
  return (
    <div className={`relative overflow-hidden rounded-6xl ${bg} ${className ?? ''}`}>
      {/* Filigrane : cèdres en ton sur ton */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]" aria-hidden="true">
        <Cedar className="absolute -right-6 -top-8 h-52 w-52 rotate-6" />
        <Cedar className="absolute -bottom-10 left-1/3 h-40 w-40 -rotate-12" />
        <Cedar className="absolute -left-8 top-1/4 h-32 w-32 rotate-3" />
      </div>
      <div className="relative">{children}</div>
    </div>
  )
}
