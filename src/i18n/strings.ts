import { useLang, type Lang } from './LanguageContext'

/** Tout le texte d'interface, en français et en arabe. */
export const strings = {
  fr: {
    nav: {
      homeAria: 'Karam Lebnan — accueil',
      langAria: 'Langue',
      openMenu: 'Ouvrir le menu',
      closeMenu: 'Fermer le menu',
      links: [
        { href: '#apropos', label: 'Notre histoire' },
        { href: '#menu', label: 'Notre carte' },
        { href: '#contact', label: 'Contact' },
      ],
    },
    hero: {
      subtitle: 'Les saveurs du Liban · Sousse',
      discover: 'Découvrir',
      discoverAria: 'Découvrir la suite',
    },
    platBand: {
      label: 'Grillé au feu de bois, chaque jour',
      alt: 'Chawarma généreux servi avec frites, crudités et pain libanais',
    },
    about: {
      storyEyebrow: 'Notre histoire',
      storyTitle: 'Le Liban, cuisiné comme à la maison.',
      storyText:
        'Des marinades qui prennent leur temps, du charbon pour les grillades et des mezzés préparés le jour même. Rien de compliqué : des produits francs et beaucoup de générosité dans l’assiette, à deux pas de Khzema Ouest.',
      rating: (value: string, count: number) => `${value} sur 5 · ${count} avis Google`,
      halalEyebrow: 'Halal & fait maison',
      halalTitle: 'Ouvert tard, généreux toujours.',
      halalText:
        'Chawarma tranché minute, brochettes au feu de bois, poulet grillé et mezzés frais. Cuisine 100 % halal, salle climatisée et ambiance calme — 7 jours sur 7, jusqu’à 2 h du matin.',
      storyImageAlt: 'Ambiance chaleureuse en salle chez Karam Lebnan',
      storyImageLabel: 'En salle',
      grillImageAlt: 'Grillades libanaises préparées au feu de bois',
      grillImageLabel: 'Au feu de bois',
      values: ['100 % Halal', 'Climatisé', 'En famille', 'Groupes & solo', 'Traiteur', 'Parking gratuit'],
    },
    menu: {
      eyebrow: 'Notre carte',
      title: 'Le menu, du mezzé au grand plateau.',
      description: 'Un aperçu en images, puis toute la carte et les prix, en dinars tunisiens.',
      viewMenu: 'Voir toute la carte',
      orderGlovo: 'Commander sur Glovo',
      priceEyebrow: 'À la carte',
      priceTitle: 'Tous nos plats & prix',
      priceSub: 'Les incontournables sont signalés d’un badge.',
      popular: 'Populaire',
      mustTry: 'Incontournable',
      toShare: 'À partager',
      portion: 'Portion',
      chips: {
        nature: 'Nature',
        fromage: '+ Fromage',
        oeuf: '+ Œuf',
        oeufFromage: '+ Œuf & fromage',
        sansGarniture: 'Sans garniture',
        avecGarniture: 'Avec garniture',
      },
    },
    carte: {
      back: 'Retour',
      eyebrow: 'La carte complète',
      title: 'Tous nos plats & prix',
      sub: 'En dinars tunisiens. Les incontournables sont signalés d’un badge.',
    },
    footer: {
      invite: 'Une envie de mezzés ou d’un grand plateau ? Appelez-nous, on s’occupe du reste.',
      contact: 'Contactez-nous',
      topAria: 'Karam Lebnan — haut de page',
    },
    floating: {
      call: 'Appeler',
      orderGlovo: 'Commander sur Glovo',
    },
    gallery: [
      { label: 'Chawarma viande', alt: 'Assiette de chawarma de viande garnie de légumes frais' },
      { label: 'Chich taouk', alt: 'Brochettes de poulet grillées au feu de bois' },
      { label: 'Mezzés à partager', alt: 'Assortiment de mezzés libanais avec houmous et pain' },
      { label: 'Falafel maison', alt: 'Falafels dorés et croustillants avec sauce' },
      { label: 'Salade fattouche', alt: 'Salade fattouche colorée aux légumes croquants' },
      { label: 'Poulet grillé', alt: 'Poulet grillé entier servi avec sa garniture' },
      { label: 'Houmous & pain chaud', alt: 'Bol de houmous crémeux avec huile d’olive et pain libanais' },
      { label: 'Kefta grillée', alt: 'Brochettes de kefta grillées au charbon' },
    ],
  },

  ar: {
    nav: {
      homeAria: 'كرم لبنان — الرئيسية',
      langAria: 'اللغة',
      openMenu: 'فتح القائمة',
      closeMenu: 'إغلاق القائمة',
      links: [
        { href: '#apropos', label: 'قصّتنا' },
        { href: '#menu', label: 'قائمتنا' },
        { href: '#contact', label: 'اتصل بنا' },
      ],
    },
    hero: {
      subtitle: 'نكهات لبنان · سوسة',
      discover: 'اكتشف',
      discoverAria: 'اكتشف المزيد',
    },
    platBand: {
      label: 'مشوي على الحطب، كل يوم',
      alt: 'شاورما وفيرة تُقدَّم مع البطاطا والخضار والخبز اللبناني',
    },
    about: {
      storyEyebrow: 'قصّتنا',
      storyTitle: 'لبنان، مطبوخ كما في البيت.',
      storyText:
        'تتبيلات تأخذ وقتها، فحم للمشاوي، ومزّات تُحضَّر في اليوم نفسه. لا شيء معقّد: مكوّنات صادقة وكرم كبير في الصحن، على بُعد خطوات من خزامة الغربية.',
      rating: (value: string, count: number) => `${value} من 5 · ${count} تقييم على Google`,
      halalEyebrow: 'حلال وبيتي',
      halalTitle: 'مفتوح حتى وقت متأخر، وكريم دائماً.',
      halalText:
        'شاورما تُقطَّع طازجة، أسياخ مشوية على الحطب، دجاج مشوي ومزّات طازجة. مطبخ حلال 100٪، صالة مكيّفة وأجواء هادئة — 7 أيام في الأسبوع، حتى الثانية بعد منتصف الليل.',
      storyImageAlt: 'أجواء دافئة في صالة كرم لبنان',
      storyImageLabel: 'في الصالة',
      grillImageAlt: 'مشاوٍ لبنانية تُحضَّر على الحطب',
      grillImageLabel: 'على الحطب',
      values: ['حلال 100٪', 'مكيّف', 'مناسب للعائلة', 'مجموعات وأفراد', 'خدمة تموين', 'موقف مجاني'],
    },
    menu: {
      eyebrow: 'قائمتنا',
      title: 'من المقبّلات إلى الصحن الكبير.',
      description: 'لمحة بالصور، ثم القائمة كاملة والأسعار بالدينار التونسي.',
      viewMenu: 'عرض القائمة كاملة',
      orderGlovo: 'اطلب عبر Glovo',
      priceEyebrow: 'قائمة الأسعار',
      priceTitle: 'كل أطباقنا وأسعارنا',
      priceSub: 'الأطباق المميّزة معلَّمة بشارة.',
      popular: 'الأكثر طلباً',
      mustTry: 'طبق مميّز',
      toShare: 'للمشاركة',
      portion: 'حصة',
      chips: {
        nature: 'عادي',
        fromage: '+ جبنة',
        oeuf: '+ بيض',
        oeufFromage: '+ بيض وجبنة',
        sansGarniture: 'بدون إضافات',
        avecGarniture: 'مع إضافات',
      },
    },
    carte: {
      back: 'رجوع',
      eyebrow: 'القائمة كاملة',
      title: 'كل أطباقنا وأسعارنا',
      sub: 'بالدينار التونسي. الأطباق المميّزة معلَّمة بشارة.',
    },
    footer: {
      invite: 'تشتهي مزّات أو صحناً كبيراً؟ اتصل بنا ونحن نتكفّل بالباقي.',
      contact: 'اتصل بنا',
      topAria: 'كرم لبنان — أعلى الصفحة',
    },
    floating: {
      call: 'اتصل',
      orderGlovo: 'اطلب عبر Glovo',
    },
    gallery: [
      { label: 'شاورما لحمة', alt: 'صحن شاورما لحمة مع خضار طازجة' },
      { label: 'شيش طاووق', alt: 'أسياخ دجاج مشوية على الحطب' },
      { label: 'مزّات للمشاركة', alt: 'تشكيلة مزّات لبنانية مع حمّص وخبز' },
      { label: 'فلافل بيتي', alt: 'فلافل ذهبية مقرمشة مع صلصة' },
      { label: 'سلطة فتّوش', alt: 'سلطة فتّوش ملوّنة بالخضار المقرمشة' },
      { label: 'دجاج مشوي', alt: 'دجاجة كاملة مشوية تُقدَّم مع الإضافات' },
      { label: 'حمّص وخبز ساخن', alt: 'صحن حمّص كريمي مع زيت الزيتون والخبز اللبناني' },
      { label: 'كفتة مشوية', alt: 'أسياخ كفتة مشوية على الفحم' },
    ],
  },
} as const

export function useT() {
  return strings[useLang().lang]
}

export function tOf(lang: Lang) {
  return strings[lang]
}
