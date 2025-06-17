'use client';

import { useState } from 'react';
import FadeIn from '../animations/fadeIn';
import { useTranslations } from 'next-intl';

export default function Contact() {
    const t = useTranslations('contact');

    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState < 'idle' | 'loading' | 'success' | 'error' > ('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            if (!res.ok) throw new Error('Error en la petición');

            setStatus('success');
            setForm({ name: '', email: '', message: '' });
        } catch {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-20 px-6 bg-white dark:bg-gray-900">
            <FadeIn>
                <div className="max-w-md mx-auto">
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">{t('title')}</h2>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder={t('name')}
                            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder={t('email')}
                            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                            required
                        />
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder={t('message')}
                            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white h-32"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold transition"
                            disabled={status === 'loading'}
                        >
                            {status === 'loading' ? 'Enviando...' : t('send')}
                        </button>
                    </form>

                    {status === 'success' && (
                        <p className="mt-4 text-green-600">¡Mensaje enviado con éxito!</p>
                    )}
                    {status === 'error' && (
                        <p className="mt-4 text-red-600">Error al enviar el mensaje. Inténtalo más tarde.</p>
                    )}
                </div>
            </FadeIn>
        </section>
    );
}
