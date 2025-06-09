export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black px-4 text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4">¡Hola! Soy <span className="text-blue-600 dark:text-blue-400">[Tu Nombre]</span></h1>
      <p className="text-lg md:text-xl max-w-2xl text-gray-600 dark:text-gray-300">
        Desarrollador web enfocado en experiencias modernas con Next.js, React y TypeScript.
      </p>
    </section>
  );
}
