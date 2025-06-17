export const locales = ['es', 'en'] as const;
export const defaultLocale = 'es';
export const localePrefix = 'always'; // Usa /es, /en en TODAS las rutas

export const routing = {
  locales,
  defaultLocale,
  localePrefix,
};
