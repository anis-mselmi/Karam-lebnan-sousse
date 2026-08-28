/** Informations réelles du restaurant, centralisées et typées. */

export interface Service {
  key: 'sur-place' | 'emporter' | 'drive' | 'livraison'
  title: string
  description: string
}

export interface GalleryPhoto {
  /** Photo d'illustration (placeholder Unsplash en attendant les vraies photos). */
  src: string
  /** Texte alternatif descriptif (accessibilité). */
  alt: string
  /** Libellé affiché en surimpression et en repli si l'image ne charge pas. */
  label: string
}

export const restaurant = {
  name: 'Karam Lebnan',
  nameArabic: 'كرم لبنان',
  tagline: 'Les saveurs authentiques du Liban à Sousse',
  cuisine: 'Restaurant libanais',
  city: 'Sousse',

  phoneDisplay: '93 239 069',
  phoneHref: 'tel:+21693239069',

  address: {
    line1: 'Khzema Ouest, Rue Khalifa Karoui',
    line2: 'Sousse 4000, Tunisie',
  },

  priceRange: '10–20 DT / personne',

  heroImage: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=1100&q=80&auto=format&fit=crop',
  bandImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=1600&q=80&auto=format&fit=crop',
  storyImage: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1000&q=80&auto=format&fit=crop',

  rating: {
    value: 4.5,
    count: 64,
  },

  hours: {
    label: 'Ouvert tous les jours',
    range: '11h30 – 02h00',
    detail: '7j/7, du lundi au dimanche',
  },

  links: {
    glovo: 'https://glovoapp.com',
    maps: 'https://www.google.com/maps/place/Karam+lebnan+sousse/@35.8421153,10.6009146,17z',
    mapsEmbed: 'https://www.google.com/maps?q=Karam%20lebnan%20sousse&z=16&output=embed',
    instagram: '#',
    facebook: '#',
  },
} as const

export const services: Service[] = [
  { key: 'sur-place', title: 'Sur place', description: 'Salle climatisée, ambiance calme, service à table.' },
  { key: 'emporter', title: 'À emporter', description: 'Commande prête en quelques minutes.' },
  { key: 'drive', title: 'Drive', description: 'Récupérez votre commande sans descendre de voiture.' },
  { key: 'livraison', title: 'Livraison Glovo', description: 'Livraison sans contact, où que vous soyez.' },
]

/** Caractéristiques et ambiance mises en avant sous forme de puces. */
export const features: string[] = [
  'Plats 100 % halal',
  'Salle climatisée',
  'Ambiance calme',
  'Idéal en famille',
  'Groupes & solo bienvenus',
  'Service traiteur',
  'Parking gratuit dans la rue',
]

/**
 * Galerie photo (placeholders Unsplash). Chaque image bascule sur un repli
 * illustré si le réseau échoue, pour ne jamais afficher d'image cassée.
 */
export const gallery: GalleryPhoto[] = [
  {
    src: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=900&q=80&auto=format&fit=crop',
    alt: 'Assiette de chawarma de viande garnie de légumes frais',
    label: 'Chawarma viande',
  },
  {
    src: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=900&q=80&auto=format&fit=crop',
    alt: 'Brochettes de poulet grillées au feu de bois',
    label: 'Chich taouk',
  },
  {
    src: 'https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?w=900&q=80&auto=format&fit=crop',
    alt: 'Assortiment de mezzés libanais avec houmous et pain',
    label: 'Mezzés à partager',
  },
  {
    src: 'https://images.unsplash.com/photo-1593001874117-c99c800e3eb7?w=900&q=80&auto=format&fit=crop',
    alt: 'Falafels dorés et croustillants avec sauce',
    label: 'Falafel maison',
  },
  {
    src: 'https://images.unsplash.com/photo-1662116765994-1e4200c43589?w=900&q=80&auto=format&fit=crop',
    alt: 'Salade fattouche colorée aux légumes croquants',
    label: 'Salade fattouche',
  },
  {
    src: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=900&q=80&auto=format&fit=crop',
    alt: 'Poulet grillé entier servi avec sa garniture',
    label: 'Poulet grillé',
  },
  {
    src: 'https://images.unsplash.com/photo-1547058951-51de49f0c0e0?w=900&q=80&auto=format&fit=crop',
    alt: 'Bol de houmous crémeux avec huile d’olive et pain libanais',
    label: 'Houmous & pain chaud',
  },
  {
    src: 'https://images.unsplash.com/photo-1529059997568-3d847b1154f0?w=900&q=80&auto=format&fit=crop',
    alt: 'Brochettes de kefta grillées au charbon',
    label: 'Kefta grillée',
  },
]
