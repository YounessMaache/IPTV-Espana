export const translations = {
  en: {
    nav: {
      features: 'Features',
      pricing: 'Pricing',
      faq: 'FAQ',
      contact: 'Contact',
    },
  },
  es: {
    nav: {
      features: 'Características',
      pricing: 'Precios',
      faq: 'FAQ',
      contact: 'Contacto',
    },
  },
};

export type TranslationKey = keyof typeof translations.en;
