/**
 * Modèle de données du menu.
 * Chaque catégorie a une « variante » qui décrit la forme de ses articles,
 * ce qui permet au composant <Menu> de choisir le bon rendu tout en gardant
 * un typage strict (aucun `any`).
 */

/** Article à prix unique : entrées, plats, boissons, suppléments… */
export interface SimpleItem {
  name: string
  price: number
  /** Courte description facultative affichée sous le nom. */
  description?: string
  /** Met en avant l'article avec un badge « Populaire ». */
  popular?: boolean
  /** Photo du plat. */
  image?: string
}

/** Sandwich décliné en quatre garnitures. */
export interface SandwichItem {
  name: string
  nature: number
  fromage: number
  oeuf: number
  oeufFromage: number
  popular?: boolean
  /** Photo du sandwich. */
  image?: string
}

/** Poulet entier, avec ou sans garniture. */
export interface PouletItem {
  name: string
  sansGarniture: number
  avecGarniture: number
  /** Photo du plat. */
  image?: string
}

export type MenuVariant = 'simple' | 'sandwich' | 'poulet'

interface BaseCategory {
  /** Identifiant stable utilisé pour les ancres et le filtrage. */
  id: string
  /** Libellé affiché dans les onglets. */
  label: string
  /** Sous-titre facultatif affiché sous le titre de la catégorie. */
  note?: string
}

export interface SimpleCategory extends BaseCategory {
  variant: 'simple'
  items: SimpleItem[]
}

export interface SandwichCategory extends BaseCategory {
  variant: 'sandwich'
  items: SandwichItem[]
}

export interface PouletCategory extends BaseCategory {
  variant: 'poulet'
  items: PouletItem[]
}

export type MenuCategory = SimpleCategory | SandwichCategory | PouletCategory

/** Avis client affiché dans la section témoignages. */
export interface Review {
  quote: string
  author: string
  role: string
  /** Note sur 5 laissée par le client. */
  rating: number
}
