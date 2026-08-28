import { restaurant } from '../data/restaurant'
import { ImageWithFallback } from './ImageWithFallback'

/** Grande photo de plat, pleine largeur et seule (façon bande photo AlBaik). */
export function PlatBand() {
  return (
    <ImageWithFallback
      src={restaurant.heroImage}
      alt="Chawarma généreux servi avec frites, crudités et pain libanais"
      label="Grillé au feu de bois, chaque jour"
      className="h-[62vh] w-full sm:h-[74vh]"
    />
  )
}
