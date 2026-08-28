import type { MenuCategory } from '../types/menu'

/**
 * Source unique du menu. Pour mettre à jour un prix ou un plat, il suffit de
 * modifier ce fichier — aucun texte n'est codé en dur dans les composants.
 * Prix exprimés en dinars tunisiens (DT).
 */
export const menu: MenuCategory[] = [
  {
    id: 'entrees',
    label: 'Les entrées',
    note: 'Mezzés à partager, servis frais',
    variant: 'simple',
    items: [
      { name: 'Hommos', price: 6, description: 'Purée de pois chiches, tahini, citron et huile d’olive.' },
      { name: 'Thoumia', price: 5, description: 'Crème d’ail montée, généreuse et onctueuse.' },
      { name: 'Baba Ganoush', price: 6, description: 'Caviar d’aubergine fumée au tahini.' },
      { name: 'Salade Fattouche', price: 6, description: 'Légumes croquants, sumac et pain grillé.' },
      { name: 'Falafel', price: 6, description: '8 pièces dorées et croustillantes.' },
      { name: 'Keba', price: 4 },
      { name: 'Sambousek', price: 7, description: 'Chaussons feuilletés, garniture maison.' },
      { name: 'Tabbouleh', price: 5, description: 'Persil, boulgour, tomate et citron.' },
      { name: 'Salade Coleslaw', price: 6 },
      { name: 'Soupe de lentilles', price: 3, description: 'Lentilles corail, cumin et citron.' },
      { name: 'Frites', price: 4 },
    ],
  },
  {
    id: 'sandwichs',
    label: 'Sandwichs',
    note: 'Roulés minute dans du pain libanais — décliné nature, fromage, œuf ou les deux',
    variant: 'sandwich',
    items: [
      { name: 'Falafel', nature: 7, fromage: 9, oeuf: 7.5, oeufFromage: 9.5 },
      { name: 'Chawarma Poulet', nature: 10, fromage: 12, oeuf: 10.5, oeufFromage: 12.5 },
      { name: 'Chich Taouk', nature: 10, fromage: 12, oeuf: 10.5, oeufFromage: 12.5 },
      { name: 'Foie de Poulet', nature: 10, fromage: 12, oeuf: 10.5, oeufFromage: 12.5 },
      { name: 'Kefta Poulet', nature: 10, fromage: 12, oeuf: 10.5, oeufFromage: 12.5 },
      { name: 'Poulet Crispy', nature: 10, fromage: 12, oeuf: 10.5, oeufFromage: 12.5 },
      { name: 'Kefta Viande', nature: 12.5, fromage: 14.5, oeuf: 13, oeufFromage: 15, popular: true },
      { name: 'Chawarma Viande', nature: 15, fromage: 17, oeuf: 15.5, oeufFromage: 17.5 },
    ],
  },
  {
    id: 'plats',
    label: 'Les plats',
    note: 'Plat complet, servi avec garniture',
    variant: 'simple',
    items: [
      { name: 'Plat Falafel', price: 17 },
      { name: 'Escalope Grillée', price: 23 },
      { name: 'Chawarma Poulet', price: 23 },
      {
        name: 'Chich Taouk',
        price: 23,
        popular: true,
        description: 'Brochettes de poulet mariné, grillées au feu de bois.',
      },
      { name: 'Foie de Poulet', price: 23 },
      { name: 'Kefta Poulet', price: 23 },
      { name: 'Poulet Crispy', price: 24 },
      { name: 'Kefta Viande', price: 26.5 },
      {
        name: 'Chawarma Viande',
        price: 28,
        popular: true,
        description: 'Émincé de viande mariné, tranché minute.',
      },
      { name: 'Plat Sportif', price: 14, description: 'Version légère et protéinée.' },
    ],
  },
  {
    id: 'mixtes',
    label: 'Plats mixtes',
    note: 'Pour partager à plusieurs',
    variant: 'simple',
    items: [
      { name: 'Mix 2 types de Poulet', price: 35 },
      { name: 'Mix Poulet + Viande', price: 39 },
      { name: 'Mix 2 types de Viande', price: 44 },
      {
        name: 'Plat Mixte Karam Lebnan',
        price: 74,
        description: 'Le grand plateau de la maison, pour la table entière.',
      },
    ],
  },
  {
    id: 'bowls',
    label: 'Bowls Crispy',
    note: 'Riz, falafel, frites et poulet crispy — composez votre box',
    variant: 'simple',
    items: [
      { name: 'Box 2 choix', price: 12.5 },
      { name: 'Box 3 choix', price: 16 },
      { name: 'Box 4 choix', price: 19 },
    ],
  },
  {
    id: 'poulet',
    label: 'Poulet entier',
    note: 'Grillé, à emporter — seul ou avec garniture',
    variant: 'poulet',
    items: [
      { name: 'Demi Poulet', sansGarniture: 11, avecGarniture: 19 },
      { name: 'Poulet Complet', sansGarniture: 18, avecGarniture: 28 },
    ],
  },
  {
    id: 'supplements',
    label: 'Suppléments',
    note: 'À ajouter à votre commande',
    variant: 'simple',
    items: [
      { name: 'Chawarma Poulet', price: 5.5 },
      { name: 'Kefta Poulet', price: 5.5 },
      { name: 'Foie de Poulet', price: 5.5 },
      { name: 'Chich Taouk', price: 5.5 },
      { name: 'Poulet Crispy', price: 6.5 },
      { name: 'Kefta Viande', price: 7 },
      { name: 'Chawarma Viande', price: 7.8 },
      { name: 'Frites', price: 3 },
      { name: 'Riz', price: 5 },
      { name: 'Œuf', price: 0.7 },
      { name: 'Mozzarella', price: 3 },
      { name: 'Gruyère', price: 3 },
      { name: 'Cheddar', price: 3 },
    ],
  },
  {
    id: 'boissons',
    label: 'Boissons',
    variant: 'simple',
    items: [
      { name: 'Eau ½ litre', price: 1 },
      { name: 'Eau 1 litre', price: 2.5 },
      { name: 'Boisson gazeuse', price: 2.5 },
      { name: 'Laban Ayran', price: 2.5, description: 'Yaourt à boire salé, rafraîchissant.' },
    ],
  },
]
