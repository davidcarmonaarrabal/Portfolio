'use client';

import Image from 'next/image';
import FadeIn from '../animations/fadeIn';
import LanguageSwitcher from '../animations/languageSwitcher';
import { ThemeToggle } from '@/app/theme-toggle';
import { useTranslations } from 'next-intl';

export default function Hero() {
    const t = useTranslations('hero');

    return (
        <section
            id="hero"
            className="relative min-h-screen overflow-hidden flex flex-col justify-center px-6 bg-[radial-gradient(circle_at_top,#dbeafe,transparent_35%),linear-gradient(to_bottom,#ffffff,#f3f4f6)] dark:bg-[radial-gradient(circle_at_top,#1e3a8a,transparent_35%),linear-gradient(to_bottom,#030712,#111827)]"
        >
            <div className="absolute top-6 right-6 z-20 flex items-center gap-3">
                <LanguageSwitcher />
                <ThemeToggle />
            </div>

            <FadeIn>
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300 text-sm font-medium shadow-sm">
                        Full Stack Developer · Portfolio
                    </div>

                    <div className="mb-8">
                        <Image
                            src="/img/me.jpeg"
                            alt="Foto de David Carmona Arrabal"
                            width={180}
                            height={180}
                            priority
                            className="rounded-full border-4 border-white dark:border-gray-800 shadow-2xl mx-auto object-cover ring-4 ring-blue-500/30"
                        />
                    </div>

                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-gray-900 dark:text-white mb-6">
                        {t('greeting')}
                    </h1>

                    <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
                        {t('description')}
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="#projects"
                            className="px-7 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-lg shadow-blue-600/25 hover:bg-blue-700 hover:-translate-y-0.5 transition"
                        >
                            Ver proyectos
                        </a>

                        <a
                            href="#contact"
                            className="px-7 py-3 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white font-semibold border border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:-translate-y-0.5 transition backdrop-blur"
                        >
                            Contactar
                        </a>
                    </div>
                </div>
            </FadeIn>
        </section>
    );
}