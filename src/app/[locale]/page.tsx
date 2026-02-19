import Hero from "@/components/about/hero";
import About from "@/components/about/about";
import Projects from "@/components/about/projects";
import Technologies from "@/components/about/tecnologies";
import Footer from "@/components/about/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <Hero />
      <About />
      <Projects />
      <Technologies />
      <Footer/>
    </main>
  );
}
