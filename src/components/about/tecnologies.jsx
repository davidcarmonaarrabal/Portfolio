'use client';

import Image from "next/image";
import FadeIn from "../animations/fadeIn";
import { useTranslations } from "next-intl";

const technologies = [
  { name: "TypeScript", url: "https://www.typescriptlang.org/", image: "/img/techs/typescript.png", category: "Lenguajes" },
  { name: "JavaScript", url: "https://developer.mozilla.org/es/docs/Web/JavaScript", image: "/img/techs/javascript.png", category: "Lenguajes" },
  { name: "Java", url: "https://www.java.com/", image: "/img/techs/java.png", category: "Lenguajes" },
  { name: "Python", url: "https://www.python.org/", image: "/img/techs/python.png", category: "Lenguajes" },
  { name: "PHP", url: "https://www.php.net/", image: "/img/techs/php.png", category: "Lenguajes" },
  { name: "PostGreSQL", url: "https://www.postgresql.org/", image: "/img/techs/pg.png", category: "Lenguajes" },
  { name: "MySQL", url: "https://www.mysql.com/", image: "/img/techs/mysql.png", category: "Lenguajes" },
  { name: "Microsoft SQL", url: "https://www.microsoft.com/es-es/sql-server/sql-server-downloads", image: "/img/techs/microsoft.png", category: "Lenguajes" },
  { name: "CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS", image: "/img/techs/css.png", category: "Lenguajes" },
  { name: "HTML5", url: "https://lenguajehtml.com/", image: "/img/techs/html.png", category: "Lenguajes" },

  { name: "React", url: "https://reactjs.org/", image: "/img/techs/react.png", category: "Frameworks" },
  { name: "Next.js", url: "https://nextjs.org/", image: "/img/techs/nextjs.png", category: "Frameworks" },
  { name: "Tailwind CSS", url: "https://tailwindcss.com/", image: "/img/techs/tailwind.png", category: "Frameworks" },
  { name: "Node.js", url: "https://nodejs.org/", image: "/img/techs/nodejs.png", category: "Frameworks" },
  { name: "Laravel", url: "https://laravel.com/", image: "/img/techs/laravel.png", category: "Frameworks" },
  { name: "JavaFX", url: "https://openjfx.io/", image: "/img/techs/javafx.png", category: "Frameworks" },
  { name: "Odoo", url: "https://www.odoo.com/", image: "/img/techs/odoo.png", category: "Frameworks" },

  { name: "Git", url: "https://git-scm.com/", image: "/img/techs/git.png", category: "Herramientas" },
  { name: "GitHub", url: "https://github.com/", image: "/img/techs/github.png", category: "Herramientas" },
  { name: "UpStash", url: "https://upstash.com/", image: "/img/techs/upstash.png", category: "Herramientas" },
  { name: "NextAuth", url: "https://next-auth.js.org/", image: "/img/techs/nextauth.png", category: "Herramientas" },
  { name: "Prisma", url: "https://www.prisma.io/", image: "/img/techs/prisma.png", category: "Herramientas" },
  { name: "Neon.Tech", url: "https://neon.tech/", image: "/img/techs/neon.png", category: "Herramientas" },
  { name: "Hostinger", url: "https://www.hostinger.com/", image: "/img/techs/hostinger.png", category: "Herramientas" },
  { name: "SendGrid", url: "https://sendgrid.com/", image: "/img/techs/sendgrid.png", category: "Herramientas" },
  { name: "Vercel", url: "https://vercel.com/", image: "/img/techs/vercel.png", category: "Herramientas" },
  { name: "Firebase", url: "https://firebase.google.com/?hl=es-419", image: "/img/techs/firebase.png", category: "Herramientas" },
  { name: "Google Cloud", url: "https://cloud.google.com/run?hl=es", image: "/img/techs/gcloud.png", category: "Herramientas" },
  { name: "Cloudinary", url: "https://cloudinary.com/users/login", image: "/img/techs/cloudinary.png", category: "Herramientas" },

  { name: "Adobe Photoshop", url: "https://www.adobe.com/products/photoshop.html", image: "/img/techs/photoshop.png", category: "Otros" },
  { name: "Adobe Premiere", url: "https://www.adobe.com/products/premiere.html", image: "/img/techs/premiere.png", category: "Otros" },
  { name: "OBS", url: "https://obsproject.com/", image: "/img/techs/obs.png", category: "Otros" },
  { name: "EDIUS", url: "https://www.edius.es/", image: "/img/techs/edius.png", category: "Otros" },
  { name: "VMIX", url: "https://www.vmix.com/", image: "/img/techs/vmix.png", category: "Otros" },
  { name: "Sony Vegas", url: "https://www.vegascreativesoftware.com/es/vegas-pro/", image: "/img/techs/vegas.png", category: "Otros" }
];

const grouped = ["Lenguajes", "Frameworks", "Herramientas", "Otros"];

export default function Technologies() {
  const t = useTranslations("technologies");

  return (
    <section id="technologies" className="py-20 px-6 bg-white dark:bg-gray-900">
      <FadeIn>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
            {t("title")}
          </h2>

          {grouped.map((group) => (
            <div key={group} className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6">
                {t(`groups.${group}`)}
              </h3>
              <div className="flex flex-wrap gap-4">
                {technologies
                  .filter((tech) => tech.category === group)
                  .map((tech) => (
                    <a
                      key={tech.name}
                      href={tech.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-20 h-20 p-2 bg-gray-100 dark:bg-gray-400 rounded-lg shadow hover:shadow-md transition flex items-center justify-center"
                      title={tech.name}
                    >
                      <div className="relative w-14 h-14">
                        <Image
                          src={tech.image}
                          alt={tech.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </a>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
