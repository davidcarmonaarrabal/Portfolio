const projects = [
  { title: 'Portfolio', description: 'Mi web personal creada con Next.js y Tailwind.' },
  { title: 'Tienda Online', description: 'E-commerce con Stripe, Prisma y autenticación segura.' },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-10">Mis proyectos</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, i) => (
            <div key={i} className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{proj.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
