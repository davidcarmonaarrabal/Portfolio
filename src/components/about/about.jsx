'use client';

import { useTranslations } from 'next-intl';
import FadeIn from '../animations/fadeIn';

export default function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="py-24 px-6 bg-white dark:bg-gray-950">
      <FadeIn>
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wide text-sm">
              Sobre mí
            </span>

            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mt-3">
              {t('title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-8 shadow-sm">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
                {t.rich('paragraph1', {
                  tech: (chunks) => (
                    <strong className="text-gray-900 dark:text-white">
                      {chunks}
                    </strong>
                  ),
                })}
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
                {t.rich('paragraph2', {
                  age: (chunks) => (
                    <strong className="text-gray-900 dark:text-white">
                      {chunks}
                    </strong>
                  ),
                  curious: (chunks) => (
                    <em className="text-blue-600 dark:text-blue-400">
                      {chunks}
                    </em>
                  ),
                })}
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {t.rich('paragraph3', {
                  backend: (chunks) => (
                    <strong className="text-gray-900 dark:text-white">
                      {chunks}
                    </strong>
                  ),
                  java: (chunks) => (
                    <strong className="text-gray-900 dark:text-white">
                      {chunks}
                    </strong>
                  ),
                  python: (chunks) => (
                    <strong className="text-gray-900 dark:text-white">
                      {chunks}
                    </strong>
                  ),
                  cross: (chunks) => (
                    <strong className="text-gray-900 dark:text-white">
                      {chunks}
                    </strong>
                  ),
                })}
              </p>
            </div>

            <div className="rounded-3xl bg-blue-600 text-white p-8 shadow-xl shadow-blue-600/20">
              <h3 className="text-2xl font-bold mb-4">Stack principal</h3>

              <div className="flex flex-wrap gap-2">
                {['Next.js', 'React', 'TypeScript', 'Prisma', 'PostgreSQL', 'Java', 'Python'].map(
                  (item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full bg-white/15 text-sm font-medium"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}