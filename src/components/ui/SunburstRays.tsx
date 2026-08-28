interface SunburstRaysProps {
  className?: string
  /** Nombre de rayons. */
  count?: number
}

/**
 * Éclat de rayons rayonnant depuis le centre (clin d'œil au « sunburst »).
 * Longueurs alternées et extrémités arrondies pour un rendu vivant, dessiné.
 */
export function SunburstRays({ className, count = 32 }: SunburstRaysProps) {
  const cx = 100
  const cy = 100
  const inner = 42
  const rays = Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * Math.PI * 2
    const long = i % 2 === 0
    const len = long ? 46 : 30
    const x1 = cx + Math.cos(angle) * inner
    const y1 = cy + Math.sin(angle) * inner
    const x2 = cx + Math.cos(angle) * (inner + len)
    const y2 = cy + Math.sin(angle) * (inner + len)
    return { x1, y1, x2, y2, w: long ? 3 : 2.2 }
  })

  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true" fill="none">
      {rays.map((r, i) => (
        <line
          key={i}
          x1={r.x1}
          y1={r.y1}
          x2={r.x2}
          y2={r.y2}
          stroke="currentColor"
          strokeWidth={r.w}
          strokeLinecap="round"
        />
      ))}
    </svg>
  )
}
