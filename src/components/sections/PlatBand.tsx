import { restaurant } from '../../data/restaurant'
import { ImageWithFallback } from '../ui/ImageWithFallback'
import { useT } from '../../i18n/strings'

/** Grande photo de plat, pleine largeur et seule (façon bande photo AlBaik). */
export function PlatBand() {
  const t = useT()
  return (
    <ImageWithFallback
      src={restaurant.heroImage}
      alt={t.platBand.alt}
      label={t.platBand.label}
      className="h-screen w-full"
    />
  )
}
