import { createNavigation } from 'next-intl/navigation';

export const {
  Link,
  redirect,
  usePathname,
  useRouter,
  getPathname
} = createNavigation({
  locales: ['es', 'en'],
  defaultLocale: 'es',
  localePrefix: 'as-needed' // o 'always' si prefieres que siempre aparezca /es, /en en la URL
});
