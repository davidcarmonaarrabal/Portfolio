import Image from "next/image";
import FadeIn from "../animations/fadeIn";

const projects = [
  {
    title: "Portfolio",
    description: "Mi web personal creada con Next.js y Tailwind.",
    url: "https://davidca.es",
    image: "/img/portfolio.png",
  },
  {
    title: "TCGShopFinder",
    description:
      "Web de reseñas de tiendas de TCG en toda España, hecha con Next.js, React y Tailwind CSS.",
    url: "https://tcgshopfinder.es",
    image: "/img/tcgshopfinder.png",
  },
  {
    title: "Un Viaje a Egipto",
    description:
      "Minijuego de parejas de cartas con la temática de JoJo's Bizarre Adventure y las cartas del Tarot",
    url: "https://github.com/davidcarmonaarrabal/JuegoCartasMemoria",
    image: "/img/egipto.png",
  },
  {
    title: "PNGMaker",
    description:
      "Aplicación de Java sencilla enfocada en pasarle un conjunto de imágenes con bordes blancos que quieras pasar a PNG.",
    url: "https://github.com/davidcarmonaarrabal/CardPNGMaker",
    image: "/img/pngmaker.png",
  },
  {
    title: "Mechanichal Keyboards Fun",
    description:
      "EN DESARROLLO. Web en la que muestro los teclados mecánicos que uso, enseño cosas sobre ellos, etc.",
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
                    className="object-cover"
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
