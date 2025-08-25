'use client';

import Image from "next/image";
import FadeIn from "../animations/fadeIn";
import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations('projects');

  const projects = [
    {
      title: t('items.0.title'),
      description: t('items.0.description'),
      url: "https://davidca.es",
      image: "/img/portfolio.png",
    },
    {
      title: t('items.1.title'),
      description: t('items.1.description'),
      url: "https://tcgshopfinder.es",
      image: "/img/LOGO_TCG-04.svg",
    },
    {
      title: t('items.2.title'),
      description: t('items.2.description'),
      url: "https://github.com/davidcarmonaarrabal/JuegoCartasMemoria",
      image: "/img/egipto.png",
    },
    {
      title: t('items.3.title'),
      description: t('items.3.description'),
      url: "https://github.com/davidcarmonaarrabal/CardPNGMaker",
      image: "/img/pngmaker.png",
    },
    {
      title: t('items.4.title'),
      description: t('items.4.description'),
      url: "https://github.com/davidcarmonaarrabal/KBFSilversoul",
      image: "/img/KBF.png",
    },
    {
      title: t('items.5.title'),
      description: t('items.5.description'),
      url: "https://github.com/davidcarmonaarrabal/UTDRSpriteWeb",
      image: "/img/Undertale.png",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <FadeIn>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-10">
            {t('title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((proj, i) => (
              <a
                key={i}
                href={proj.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition hover:scale-[1.02]"
              >
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={proj.image}
                    alt={`Imagen de ${proj.title}`}
                    fill
                    className="object-contain"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    priority={i === 0}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                    {proj.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {proj.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
