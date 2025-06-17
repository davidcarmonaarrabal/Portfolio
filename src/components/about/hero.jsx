'use client';

import Image from "next/image";
import FadeIn from "../animations/fadeIn";
import LanguageSwitcher from "../animations/languageSwitcher";
import { ThemeToggle } from "@/app/theme-toggle";
import { useTranslations } from "next-intl";

export default function Hero() {
    const t = useTranslations('hero');

    return (
        <section
            id="hero"
            className="min-h-screen flex flex-col justify-center items-center px-4 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black text-center"
        >
            <FadeIn>
                {/* Barra superior con idioma y tema */}
                <div className="w-full flex justify-end items-center gap-4 mb-6 max-w-5xl">
                    <LanguageSwitcher />
                    <ThemeToggle />
                </div>

                {/* Foto */}
                <div className="mb-8">
                    <Image
                        src="/img/me.jpeg"
                        alt="Foto de David Carmona Arrabal"
                        width={160}
                        height={160}
                        className="rounded-full border-4 border-blue-600 dark:border-blue-400 shadow-xl mx-auto"
                    />
                </div>

                {/* Nombre + descripción */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-800 dark:text-white mb-4">
                    {t('greeting')}
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed">
                    {t('description')}
                </p>
            </FadeIn>
        </section>
    );
}
