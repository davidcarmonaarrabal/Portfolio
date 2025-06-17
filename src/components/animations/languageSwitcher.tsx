'use client';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

export default function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();

    const switchLanguage = (lang: 'es' | 'en') => {
        const newPath = pathname.replace(/^\/(es|en)/, '') || '/';
        router.push(`/${lang}${newPath}`);
    };

    return (
        <div className="flex gap-2 items-center">
            <button
                onClick={() => switchLanguage('es')}
                className="w-10 h-10 p-1.5 border rounded hover:shadow transition bg-gray-500 hover:bg-gray-300 dark:bg-gray-300 dark:hover:bg-gray-500 duration-300"
                aria-label="Cambiar a español"
            >
                <div className="w-full h-full relative">
                    <Image
                        src="/flags/es.svg"
                        alt="Español"
                        fill
                        className="object-contain rounded"
                    />
                </div>
            </button>

            <button
                onClick={() => switchLanguage('en')}
                className="w-10 h-10 p-1.5 border rounded hover:shadow transition bg-gray-500 hover:bg-gray-300 dark:bg-gray-300 dark:hover:bg-gray-500 duration-300"
                aria-label="Switch to English"
            >
                <div className="w-full h-full relative">
                    <Image
                        src="/flags/us.svg"
                        alt="English"
                        fill
                        className="object-contain rounded"
                    />
                </div>
            </button>
        </div>
    );
}
