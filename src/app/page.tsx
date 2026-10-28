import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Research from "@/components/Research";
import ResearchInterests from "@/components/ResearchInterests";
import Skills from "@/components/Skills";
import { getCvHref } from "@/lib/cv";

export default function Home() {
  const cvHref = getCvHref();
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar cvHref={cvHref} />
      <main id="main">
        <Hero cvHref={cvHref} />
        <About />
        <Research />
        <Experience />
        <Skills />
        <ResearchInterests />
        <Contact cvHref={cvHref} />
      </main>
      <Footer />
    </>
  );
}
