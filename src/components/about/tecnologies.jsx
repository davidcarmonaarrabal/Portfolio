import FadeIn from "../animations/fadeIn";

const techs = ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Java', 'PostGreSQL', 'MySQL', 'Microsoft SQL', 'Laravel', 'Android', 'JavaFX', 'Neon.Tech', 'Hostinger', 'Sendgrid', 'Adobe Photoshop', 'Adobe Premiere', 'OBS', 'UpStash', 'Prisma', 'NextAuth', 'Odoo', 'Python', 'Odoo', 'CSS', 'Tailwind CSS', 'Git', 'GitHub', 'Vercel'];

export default function Technologies() {
  return (
    <section id="technologies" className="py-20 px-6 bg-white dark:bg-gray-900">
      <FadeIn>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">Tecnologías</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {techs.map((tech, i) => (
              <span key={i} className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
