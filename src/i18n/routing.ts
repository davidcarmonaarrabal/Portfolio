// src/i18n/routing.ts
export const locales = ['es', 'en'] as const;

export const routing = {
  locales,
  defaultLocale: 'es',
  localePrefix: 'always'
} as const;
