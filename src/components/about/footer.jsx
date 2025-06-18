"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex justify-center items-center gap-6 py-6 border-t border-gray-300 dark:border-gray-700 mt-12">
            <Link href="https://github.com/davidcarmonaarrabal" target="_blank" aria-label="GitHub">
                <FaGithub className="w-6 h-6 hover:text-blue-500 transition-colors" />
            </Link>
            <Link href="https://www.linkedin.com/in/david-carmona-arrabal-26731b212/" target="_blank" aria-label="LinkedIn">
                <FaLinkedin className="w-6 h-6 hover:text-blue-500 transition-colors" />
            </Link>
            <Link href="mailto:davidcarmonaarrabal@davidca.es" aria-label="Email">
                <FaEnvelope className="w-6 h-6 hover:text-blue-500 transition-colors" />
            </Link>
        </footer>
    );
}
