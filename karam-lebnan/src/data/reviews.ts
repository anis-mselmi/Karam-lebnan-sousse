import type { Review } from '../types/menu'

/** Avis clients réels (Google), adaptés en français. */
export const reviews: Review[] = [
  {
    quote:
      'La meilleure cuisine libanaise : qualité au top, équipe adorable. Toujours un plaisir de commander.',
    author: 'Dirk M.',
    role: 'Local Guide',
    rating: 5,
  },
  {
    quote: 'Bons sandwichs. On a essayé la kefta et le chawarma, on n’a pas été déçus.',
    author: 'Mahmoud F.',
    role: 'Local Guide',
    rating: 5,
  },
  {
    quote:
      'Bonne nourriture et personnel sympathique. Le poulet entier est un excellent rapport qualité-prix, idéal pour un groupe de trois.',
    author: 'Hazem K.',
    role: 'Local Guide',
    rating: 4,
  },
]
