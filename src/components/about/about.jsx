import FadeIn from "../animations/fadeIn";

export default function About() {
  return (
    <section id="about" className="p-8 bg-gray-100">
      <FadeIn>
        <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
        <p className="text-lg max-w-3xl">
          Soy un apasionado del desarrollo web con experiencia en tecnologías como React, Next.js y Tailwind CSS. Me encanta construir interfaces limpias, eficientes y bien diseñadas.
          Con 21 años, siempre intentando aprender algo nuevo cada día, curioso por naturaleza y amante de la tecnología.
          Amo el Backend y disfruto muchísimo investigar todas las posibilidades que tengo en el Frontend.
          También siento cierta curiosidad sobre el desarrollo multiplataforma, habiendo interactuado con lenguajes como Java o Python en diferentes ocasiones.
        </p>
      </FadeIn>
    </section>
  );
}