import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 antialiased scroll-smooth">
<Navbar />
<main>
<Hero />
<Projects />
<Experience />
<Education />
<Skills />
<Contact />
</main>

</div> 
  );
}