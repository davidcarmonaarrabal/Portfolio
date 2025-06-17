'use client';
import { usePathname, useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();

    const switchLanguage = (lang: 'es' | 'en') => {
        const newPath = pathname.replace(/^\/(es|en)/, '') || '/';
        router.push(`/${lang}${newPath}`);
    };

    return (
        <div className="flex gap-2">
            <button onClick={() => switchLanguage('es')} className="px-2 py-1 border rounded text-sm">🇪🇸</button>
            <button onClick={() => switchLanguage('en')} className="px-2 py-1 border rounded text-sm">🇬🇧</button>
        </div>
    );
}
