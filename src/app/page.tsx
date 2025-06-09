import Hero from "@/components/about/hero";
import About from "@/components/about/about";
import Projects from "@/components/about/projects";
import Technologies from "@/components/about/tecnologies";
import OtherWork from "@/components/about/otherwork";
import Contact from "@/components/about/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Technologies />
      <OtherWork />
      <Contact />
    </main>
  )
}