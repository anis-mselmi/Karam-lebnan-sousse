import { useId } from 'react'
import { formatNumber } from '../utils/format'

interface StarRatingProps {
  value: number
  /** Taille d'une étoile en pixels. */
  size?: number
  className?: string
  /** Couleur du remplissage vide (utile sur fond sombre). */
  emptyColor?: string
}

const STAR_PATH =
  'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z'

/** Note en étoiles avec demi-étoiles, accessible via aria-label. */
export function StarRating({ value, size = 18, className, emptyColor = 'rgba(200,150,62,0.28)' }: StarRatingProps) {
  const id = useId()

  return (
    <div
      className={`inline-flex items-center gap-0.5 ${className ?? ''}`}
      role="img"
      aria-label={`Note de ${formatNumber(value)} sur 5`}
    >
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.max(0, Math.min(1, value - i))
        const gradientId = `${id}-star-${i}`
        return (
          <svg key={i} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
            <defs>
              <linearGradient id={gradientId}>
                <stop offset={`${fill * 100}%`} stopColor="#e2b962" />
                <stop offset={`${fill * 100}%`} stopColor={emptyColor} />
              </linearGradient>
            </defs>
            <path d={STAR_PATH} fill={`url(#${gradientId})`} />
          </svg>
        )
      })}
    </div>
  )
}
