'use client';

import Image from 'next/image';
import FadeIn from '../animations/fadeIn';
import { useTranslations } from 'next-intl';

export default function Projects() {
  const t = useTranslations('projects');

  const projects = [
    {
      title: t('items.0.title'),
      description: t('items.0.description'),
      url: 'https://davidca.es',
      image: '/img/portfolio.png',
    },
    {
      title: t('items.1.title'),
      description: t('items.1.description'),
      url: 'https://tcgshopfinder.es',
      image: '/img/LOGO_TCG-04.svg',
    },
    {
      title: t('items.5.title'),
      description: t('items.5.description'),
      url: 'https://www.utdrsprites.xyz/',
      image: '/img/Undertale.png',
    },
    {
      title: t('items.2.title'),
      description: t('items.2.description'),
      url: 'https://github.com/davidcarmonaarrabal/JuegoCartasMemoria',
      image: '/img/egipto.png',
    },
    {
      title: t('items.3.title'),
      description: t('items.3.description'),
      url: 'https://github.com/davidcarmonaarrabal/CardPNGMaker',
      image: '/img/pngmaker.png',
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-gray-50 dark:bg-gray-900">
      <FadeIn>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wide text-sm">
              Portfolio
            </span>

            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mt-3">
              {t('title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((proj, i) => (
              <a
                key={i}
                href={proj.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white/80 dark:bg-gray-950/80 backdrop-blur rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative w-full aspect-[16/10] bg-gray-100 dark:bg-gray-800 overflow-hidden">
                  <Image
                    src={proj.image}
                    alt={`Imagen de ${proj.title}`}
                    fill
                    className="object-contain p-8 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {proj.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {proj.description}
                  </p>

                  <div className="mt-5 text-blue-600 dark:text-blue-400 font-semibold">
                    Ver proyecto →
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}