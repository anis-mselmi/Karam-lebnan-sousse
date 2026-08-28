import { useState } from 'react'
import { Cedar } from './Cedar'

interface ImageWithFallbackProps {
  src: string
  alt: string
  /** Libellé affiché sur le repli si l'image ne charge pas. */
  label: string
  className?: string
  imgClassName?: string
}

/**
 * Image posée sur un repli illustré (dégradé chaud + cèdre + libellé).
 * Le repli est toujours rendu en arrière-plan : si l'image tarde, échoue ou
 * est bloquée, on n'affiche jamais une image cassée ni un cadre vide.
 */
export function ImageWithFallback({ src, alt, label, className, imgClassName }: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(false)

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-ink-soft via-ink to-canvas-deep ${className ?? ''}`}
      role="img"
      aria-label={alt}
    >
      {/* Repli toujours présent, sous l'image */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 text-center" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_120%,rgba(47,107,59,0.35),transparent_60%)]" />
        <Cedar className="relative h-8 w-8 text-cedre-soft" />
        <span className="relative font-display text-lg font-semibold text-white">{label}</span>
      </div>

      {!failed && (
        <img
          src={src}
          alt=""
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className={`relative ${imgClassName ?? 'h-full w-full object-cover'}`}
        />
      )}
    </div>
  )
}
