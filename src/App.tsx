import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </>
  );
}