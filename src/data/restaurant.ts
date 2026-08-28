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

  heroImage: '/images/hero-shawarma.jpg',
  bandImage: '/images/about-grill.jpg',
  storyImage: '/images/about-interior.jpg',

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
 * Galerie photo haute définition. Chaque image bascule sur un repli
 * illustré si le réseau échoue, pour ne jamais afficher d'image cassée.
 */
export const gallery: GalleryPhoto[] = [
  {
    src: '/images/gallery-chawarma-viande.jpg',
    alt: 'Assiette de chawarma de viande garnie de légumes frais',
    label: 'Chawarma viande',
  },
  {
    src: '/images/gallery-chich-taouk.jpg',
    alt: 'Brochettes de poulet grillées au feu de bois',
    label: 'Chich taouk',
  },
  {
    src: '/images/gallery-mezzes.jpg',
    alt: 'Assortiment de mezzés libanais avec houmous et pain',
    label: 'Mezzés à partager',
  },
  {
    src: '/images/gallery-falafel.jpg',
    alt: 'Falafels dorés et croustillants avec sauce',
    label: 'Falafel maison',
  },
  {
    src: '/images/gallery-fattouche.jpg',
    alt: 'Salade fattouche colorée aux légumes croquants',
    label: 'Salade fattouche',
  },
  {
    src: '/images/gallery-poulet-grille.jpg',
    alt: 'Poulet grillé entier servi avec sa garniture',
    label: 'Poulet grillé',
  },
  {
    src: '/images/gallery-houmous.jpg',
    alt: 'Bol de houmous crémeux avec huile d’olive et pain libanais',
    label: 'Houmous & pain chaud',
  },
  {
    src: '/images/gallery-kefta.jpg',
    alt: 'Brochettes de kefta grillées au charbon',
    label: 'Kefta grillée',
  },
]
