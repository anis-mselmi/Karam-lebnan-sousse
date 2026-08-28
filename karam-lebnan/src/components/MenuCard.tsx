import type { SimpleItem } from '../types/menu'
import { formatPrice } from '../utils/format'

interface MenuCardProps {
  item: SimpleItem
}

/** Ligne réutilisable pour un article à prix unique, façon liste groupée iOS. */
export function MenuCard({ item }: MenuCardProps) {
  return (
    <article className="flex items-start gap-4 px-5 py-4 transition-colors hover:bg-ink/[0.02] sm:px-6">
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-medium text-ink">{item.name}</h3>
          {item.popular ? (
            <span className="rounded-full bg-rouge-soft px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wide text-rouge-deep">
              Populaire
            </span>
          ) : null}
        </div>
        {item.description ? <p className="mt-0.5 text-sm leading-snug text-ink-mute">{item.description}</p> : null}
      </div>
      <div className="shrink-0 pt-0.5 font-display text-lg font-semibold tabular-nums text-ink">
        {formatPrice(item.price)}
      </div>
    </article>
  )
}
