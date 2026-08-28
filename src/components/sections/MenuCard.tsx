import type { SimpleItem } from '../../types/menu'
import { useT } from '../../i18n/strings'
import { formatPrice } from '../../utils/format'

interface MenuCardProps {
  item: SimpleItem
}

/** Ligne de carte classique : nom … prix, reliés par une ligne pointillée. */
export function MenuCard({ item }: MenuCardProps) {
  const t = useT()
  return (
    <article className="flex items-baseline gap-2 py-3">
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <h4 className="font-display font-bold text-ink">{item.name}</h4>
          {item.popular ? (
            <span className="rounded-full bg-or px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wide text-rouge-dark">
              {t.menu.popular}
            </span>
          ) : null}
        </div>
        {item.description ? <p className="mt-0.5 text-sm leading-snug text-ink-mute">{item.description}</p> : null}
      </div>
      <span className="mb-1 flex-1 border-b-2 border-dotted border-ink/20" aria-hidden="true" />
      <span className="shrink-0 font-display text-lg font-extrabold tabular-nums text-rouge">{formatPrice(item.price)}</span>
    </article>
  )
}
