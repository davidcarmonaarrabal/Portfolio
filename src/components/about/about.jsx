import FadeIn from "../animations/fadeIn";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-100 dark:bg-gray-900">
      <FadeIn>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
            Sobre mí
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Soy un apasionado del desarrollo web con experiencia en tecnologías
            como <strong>React</strong>, <strong>Next.js</strong> y{" "}
            <strong>Tailwind CSS</strong>. Me encanta construir interfaces
            limpias, eficientes y visualmente atractivas.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Tengo <strong>21 años</strong> y un gran interés por seguir
            aprendiendo constantemente. Me considero una persona{" "}
            <em>curiosa por naturaleza</em> y entusiasta de la tecnología.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Disfruto especialmente del <strong>desarrollo backend</strong>, aunque
            también exploro el frontend para entender todo el ecosistema.
            Además, he trabajado con lenguajes como <strong>Java</strong> y{" "}
            <strong>Python</strong> en proyectos académicos y personales, lo
            que ha despertado en mí el interés por el{" "}
            <strong>desarrollo multiplataforma</strong>.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
