import Hero from "@/components/about/hero";
import About from "@/components/about/about";
import Projects from "@/components/about/projects";
import Technologies from "@/components/about/tecnologies";
import OtherWork from "@/components/about/otherwork";
import Contact from "@/components/about/contact";
import LanguageSwitcher from "@/components/animations/languageSwitcher";
import { ThemeToggle } from "./theme-toggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <LanguageSwitcher/>
      <ThemeToggle></ThemeToggle>
      <Hero />
      <About />
      <Projects />
      <Technologies />
      <OtherWork />
      <Contact />
    </main>
  )
}