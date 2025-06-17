'use client';

import FadeIn from "../animations/fadeIn";
import { useTranslations } from "next-intl";

export default function OtherWork() {
    const t = useTranslations('otherWork');

    return (
        <section id="other" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
            <FadeIn>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
                        {t('title')}
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                        {t('description')}
                    </p>
                </div>
            </FadeIn>
        </section>
    );
}
