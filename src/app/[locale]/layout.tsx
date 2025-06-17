// src/app/[locale]/layout.tsx

import '../globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n/routing';
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

// 👇 define un tipo basado en tus locales
type Locale = (typeof locales)[number];

export const metadata = {
  title: 'David Carmona Arrabal',
  description: 'Portfolio'
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: 'es' | 'en' }> | { locale: 'es' | 'en' }; // acepta Promise o objeto normal
}) {
  // Resuelve params si es Promise
  const resolvedParams = params instanceof Promise ? await params : params;
  const locale = resolvedParams.locale;

  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

