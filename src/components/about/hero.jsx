import Image from "next/image";
import FadeIn from "../animations/fadeIn";

export default function Hero() {
    return (
        <section
            id="hero"
            className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black px-4 text-center"
        >
            <FadeIn>
                <div className="mb-6">
                    <Image
                        src="/img/me.jpeg"
                        alt="Foto de David Carmona Arrabal"
                        width={160}
                        height={160}
                        className="rounded-full border-4 border-blue-600 dark:border-blue-400 shadow-lg"
                    />
                </div>

                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-gray-800 dark:text-white">
                    ¡Hola! Soy{" "}
                    <span className="text-blue-600 dark:text-blue-400">
                        David Carmona Arrabal
                    </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed">
                    Desarrollador web apasionado por crear experiencias modernas, rápidas
                    y accesibles usando tecnologías como{" "}
                    <strong>Next.js</strong>, <strong>React</strong>,{" "}
                    <strong>TypeScript</strong> y más.
                </p>
            </FadeIn>
        </section>
    );
}
