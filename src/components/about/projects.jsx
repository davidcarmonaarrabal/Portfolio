import Image from "next/image";
import FadeIn from "../animations/fadeIn";

const projects = [
  {
    title: "Portfolio",
    description: "EN DESARROLLO. Mi web personal creada con Next.js y Tailwind. Busca mostrar todos mis proyectos, trabajos, exponer mi pasión por la programación en primer plano.",
    url: "https://davidca.es",
    image: "/img/portfolio.png",
  },
  {
    title: "TCGShopFinder",
    description:
      "EN DESARROLLO. Web de reseñas de tiendas de TCG en toda España, hecha con Next.js, React y Tailwind CSS. Permite al usuario crear reseñas de tiendas, ver reseñas, solicitar la adición de nuevas tiendas, todo esto optando por un diseño atractivo, minimalista, y simple, pero acompañado de un motor de búsqueda bastante potente.",
    url: "https://tcgshopfinder.es",
    image: "/img/LOGO_TCG-04.png",
  },
  {
    title: "Un Viaje a Egipto",
    description:
      "Minijuego de parejas de cartas con la temática de JoJo's Bizarre Adventure y las cartas del Tarot. Hecho con JavaScript y HTML5 planos, acompañado de CSS, un pequeño proyecto de clase.",
    url: "https://github.com/davidcarmonaarrabal/JuegoCartasMemoria",
    image: "/img/egipto.png",
  },
  {
    title: "PNGMaker",
    description:
      "Aplicación de Java sencilla enfocada en pasarle un conjunto de imágenes con bordes blancos que quieras pasar a PNG. Se buscaba una herramienta para convertir decenas de imágenes con bordes en blanco en PNG de forma sencilla y parametrizable.",
    url: "https://github.com/davidcarmonaarrabal/CardPNGMaker",
    image: "/img/pngmaker.png",
  },
  {
    title: "Mechanichal Keyboards Fun",
    description:
      "EN DESARROLLO. Web en la que muestro los teclados mecánicos que uso, enseño cosas sobre ellos, etc. En la web se busca exponer los teclados que he montado, los que recomiendo, aportar un tester de teclados, etc.",
    url: "https://github.com/davidcarmonaarrabal/KBFSilversoul",
    image: "/img/KBF.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <FadeIn>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-10">
            Mis proyectos
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((proj, i) => (
              <a
                key={i}
                href={proj.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition hover:scale-[1.02]"
              >
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={proj.image}
                    alt={`Imagen de ${proj.title}`}
                    fill
                    className="object-contain"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    priority={i === 0}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                    {proj.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {proj.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
