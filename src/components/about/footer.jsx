'use client';

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer
            id="contact"
            className="py-12 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950"
        >
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    ¿Hablamos?
                </h2>

                <p className="text-gray-600 dark:text-gray-400 mb-8">
                    Puedes encontrarme en GitHub, LinkedIn, escribirme directamente por email o por teléfono +34 614 87 11 51.
                </p>

                <div className="flex justify-center items-center gap-5">
                    <Link
                        href="https://github.com/davidcarmonaarrabal"
                        target="_blank"
                        aria-label="GitHub"
                        className="w-12 h-12 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center shadow-sm hover:shadow-lg hover:-translate-y-1 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                    >
                        <FaGithub className="w-6 h-6" />
                    </Link>

                    <Link
                        href="https://www.linkedin.com/in/david-carmona-arrabal-26731b212/"
                        target="_blank"
                        aria-label="LinkedIn"
                        className="w-12 h-12 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center shadow-sm hover:shadow-lg hover:-translate-y-1 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                    >
                        <FaLinkedin className="w-6 h-6" />
                    </Link>

                    <Link
                        href="mailto:davidcarmonaarrabal18@gmail.com"
                        aria-label="Email"
                        className="w-12 h-12 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center shadow-sm hover:shadow-lg hover:-translate-y-1 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                    >
                        <FaEnvelope className="w-6 h-6" />
                    </Link>
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-500 mt-8">
                    © {new Date().getFullYear()} David Carmona Arrabal
                </p>
            </div>
        </footer>
    );
}