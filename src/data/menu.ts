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
      { name: 'Hommos', price: 6, description: 'Purée de pois chiches, tahini, citron et huile d’olive.', image: '/images/gallery-houmous.jpg' },
      { name: 'Thoumia', price: 5, description: 'Crème d’ail montée, généreuse et onctueuse.', image: '/images/menu-thoumia.jpg' },
      { name: 'Baba Ganoush', price: 6, description: 'Caviar d’aubergine fumée au tahini.', image: '/images/menu-baba-ganoush.jpg' },
      { name: 'Salade Fattouche', price: 6, description: 'Légumes croquants, sumac et pain grillé.', image: '/images/gallery-fattouche.jpg' },
      { name: 'Falafel', price: 6, description: '8 pièces dorées et croustillantes.', image: '/images/gallery-falafel.jpg' },
      { name: 'Keba', price: 4, description: 'Kibbeh libanaise croustillante farcie.', image: '/images/menu-keba.jpg' },
      { name: 'Sambousek', price: 7, description: 'Chaussons feuilletés, garniture maison.', image: '/images/menu-sambousek.jpg' },
      { name: 'Tabbouleh', price: 5, description: 'Persil, boulgour, tomate et citron.', image: '/images/menu-tabbouleh.jpg' },
      { name: 'Salade Coleslaw', price: 6, description: 'Chou croquant et carottes râpées.', image: '/images/menu-coleslaw.jpg' },
      { name: 'Soupe de lentilles', price: 3, description: 'Lentilles corail, cumin et citron.', image: '/images/menu-soupe-lentilles.jpg' },
      { name: 'Frites', price: 4, description: 'Portion de frites dorées croustillantes.', image: '/images/menu-frites.jpg' },
    ],
  },
  {
    id: 'sandwichs',
    label: 'Sandwichs',
    note: 'Roulés minute dans du pain libanais — décliné nature, fromage, œuf ou les deux',
    variant: 'sandwich',
    items: [
      { name: 'Falafel', nature: 7, fromage: 9, oeuf: 7.5, oeufFromage: 9.5, image: '/images/menu-sandwich-falafel.jpg' },
      { name: 'Chawarma Poulet', nature: 10, fromage: 12, oeuf: 10.5, oeufFromage: 12.5, image: '/images/menu-sandwich-chawarma.jpg' },
      { name: 'Chich Taouk', nature: 10, fromage: 12, oeuf: 10.5, oeufFromage: 12.5, image: '/images/gallery-chich-taouk.jpg' },
      { name: 'Foie de Poulet', nature: 10, fromage: 12, oeuf: 10.5, oeufFromage: 12.5, image: '/images/menu-plat-escalope.jpg' },
      { name: 'Kefta Poulet', nature: 10, fromage: 12, oeuf: 10.5, oeufFromage: 12.5, image: '/images/gallery-kefta.jpg' },
      { name: 'Poulet Crispy', nature: 10, fromage: 12, oeuf: 10.5, oeufFromage: 12.5, image: '/images/menu-plat-crispy.jpg' },
      { name: 'Kefta Viande', nature: 12.5, fromage: 14.5, oeuf: 13, oeufFromage: 15, popular: true, image: '/images/gallery-kefta.jpg' },
      { name: 'Chawarma Viande', nature: 15, fromage: 17, oeuf: 15.5, oeufFromage: 17.5, image: '/images/gallery-chawarma-viande.jpg' },
    ],
  },
  {
    id: 'plats',
    label: 'Les plats',
    note: 'Plat complet, servi avec garniture',
    variant: 'simple',
    items: [
      { name: 'Plat Falafel', price: 17, description: 'Falafels dorés, houmous, salade, pickles et pain chaud.', image: '/images/gallery-falafel.jpg' },
      { name: 'Escalope Grillée', price: 23, description: 'Filet de poulet mariné grillé avec frites et salade.', image: '/images/menu-plat-escalope.jpg' },
      { name: 'Chawarma Poulet', price: 23, description: 'Émincé de poulet mariné avec frites et crème d’ail.', image: '/images/hero-shawarma.jpg' },
      {
        name: 'Chich Taouk',
        price: 23,
        popular: true,
        description: 'Brochettes de poulet mariné, grillées au feu de bois.',
        image: '/images/gallery-chich-taouk.jpg',
      },
      { name: 'Foie de Poulet', price: 23, description: 'Foie de poulet sauté au citron et mélasse de grenade.', image: '/images/menu-plat-escalope.jpg' },
      { name: 'Kefta Poulet', price: 23, description: 'Brochettes de poulet haché aux herbes et épices.', image: '/images/gallery-kefta.jpg' },
      { name: 'Poulet Crispy', price: 24, description: 'Tenders de poulet extra croustillants avec frites et sauces.', image: '/images/menu-plat-crispy.jpg' },
      { name: 'Kefta Viande', price: 26.5, description: 'Brochettes de bœuf et agneau grillées au charbon.', image: '/images/gallery-kefta.jpg' },
      {
        name: 'Chawarma Viande',
        price: 28,
        popular: true,
        description: 'Émincé de viande mariné, tranché minute.',
        image: '/images/gallery-chawarma-viande.jpg',
      },
      { name: 'Plat Sportif', price: 14, description: 'Version légère et protéinée avec poulet grillé et salade.', image: '/images/menu-plat-escalope.jpg' },
    ],
  },
  {
    id: 'mixtes',
    label: 'Plats mixtes',
    note: 'Pour partager à plusieurs',
    variant: 'simple',
    items: [
      { name: 'Mix 2 types de Poulet', price: 35, description: 'Chich taouk et chawarma de poulet avec accompagnements.', image: '/images/about-grill.jpg' },
      { name: 'Mix Poulet + Viande', price: 39, description: 'Duo de chawarma et grillades poulet et viande.', image: '/images/hero-shawarma.jpg' },
      { name: 'Mix 2 types de Viande', price: 44, description: 'Chawarma viande et kefta d’agneau grillée au charbon.', image: '/images/gallery-chawarma-viande.jpg' },
      {
        name: 'Plat Mixte Karam Lebnan',
        price: 74,
        description: 'Le grand plateau de la maison, pour la table entière.',
        image: '/images/gallery-mezzes.jpg',
      },
    ],
  },
  {
    id: 'bowls',
    label: 'Bowls Crispy',
    note: 'Riz, falafel, frites et poulet crispy — composez votre box',
    variant: 'simple',
    items: [
      { name: 'Box 2 choix', price: 12.5, description: 'Base riz ou frites + 2 garnitures au choix.', image: '/images/menu-plat-crispy.jpg' },
      { name: 'Box 3 choix', price: 16, description: 'Base riz ou frites + 3 garnitures au choix.', image: '/images/menu-plat-crispy.jpg' },
      { name: 'Box 4 choix', price: 19, description: 'Base riz ou frites + 4 garnitures au choix.', image: '/images/menu-plat-crispy.jpg' },
    ],
  },
  {
    id: 'poulet',
    label: 'Poulet entier',
    note: 'Grillé, à emporter — seul ou avec garniture',
    variant: 'poulet',
    items: [
      { name: 'Demi Poulet', sansGarniture: 11, avecGarniture: 19, image: '/images/gallery-poulet-grille.jpg' },
      { name: 'Poulet Complet', sansGarniture: 18, avecGarniture: 28, image: '/images/gallery-poulet-grille.jpg' },
    ],
  },
  {
    id: 'supplements',
    label: 'Suppléments',
    note: 'À ajouter à votre commande',
    variant: 'simple',
    items: [
      { name: 'Chawarma Poulet', price: 5.5, image: '/images/hero-shawarma.jpg' },
      { name: 'Kefta Poulet', price: 5.5, image: '/images/gallery-kefta.jpg' },
      { name: 'Foie de Poulet', price: 5.5, image: '/images/menu-plat-escalope.jpg' },
      { name: 'Chich Taouk', price: 5.5, image: '/images/gallery-chich-taouk.jpg' },
      { name: 'Poulet Crispy', price: 6.5, image: '/images/menu-plat-crispy.jpg' },
      { name: 'Kefta Viande', price: 7, image: '/images/gallery-kefta.jpg' },
      { name: 'Chawarma Viande', price: 7.8, image: '/images/gallery-chawarma-viande.jpg' },
      { name: 'Frites', price: 3, image: '/images/menu-frites.jpg' },
      { name: 'Riz', price: 5, image: '/images/about-grill.jpg' },
      { name: 'Œuf', price: 0.7, image: '/images/menu-sambousek.jpg' },
      { name: 'Mozzarella', price: 3, image: '/images/menu-sambousek.jpg' },
      { name: 'Gruyère', price: 3, image: '/images/menu-sambousek.jpg' },
      { name: 'Cheddar', price: 3, image: '/images/menu-sambousek.jpg' },
    ],
  },
  {
    id: 'boissons',
    label: 'Boissons',
    variant: 'simple',
    items: [
      { name: 'Eau ½ litre', price: 1, image: '/images/menu-tabbouleh.jpg' },
      { name: 'Eau 1 litre', price: 2.5, image: '/images/menu-tabbouleh.jpg' },
      { name: 'Boisson gazeuse', price: 2.5, image: '/images/hero-shawarma.jpg' },
      { name: 'Laban Ayran', price: 2.5, description: 'Yaourt à boire salé, rafraîchissant.', image: '/images/menu-thoumia.jpg' },
    ],
  },
]
