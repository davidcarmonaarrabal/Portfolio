'use client';
import { useTranslations } from 'next-intl';
import FadeIn from '../animations/fadeIn';

export default function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="py-20 px-6 bg-gray-100 dark:bg-gray-900">
      <FadeIn>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
            {t('title')}
          </h2>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            {t.rich('paragraph1', {
              tech: (chunks) => <strong>{chunks}</strong>
            })}
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            {t.rich('paragraph2', {
              age: (chunks) => <strong>{chunks}</strong>,
              curious: (chunks) => <em>{chunks}</em>
            })}
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            {t.rich('paragraph3', {
              backend: (chunks) => <strong>{chunks}</strong>,
              java: (chunks) => <strong>{chunks}</strong>,
              python: (chunks) => <strong>{chunks}</strong>,
              cross: (chunks) => <strong>{chunks}</strong>
            })}
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
