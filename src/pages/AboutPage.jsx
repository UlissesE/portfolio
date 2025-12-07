import About from "../components/About";
import MyProjects from "../components/MyProjects";
import { Skills } from "../components/Skills";
import AnimatedSection from "../components/AnimatedInView";


export default function AboutPage() {
  return (
    <div className="bg-gradient-to-b from-cyan-950/50 via-black to-cyan-950/50">
      <About />

      <Skills />

      <MyProjects />
    </div>
  );
}
