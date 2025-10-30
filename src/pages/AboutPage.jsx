import About from "../components/About";
import MyProjects from "../components/MyProjects";
import { Skills } from "../components/Skills";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function AnimatedSection({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <>
      <AnimatedSection>
        <About />
      </AnimatedSection>

      <AnimatedSection>
        <MyProjects />
      </AnimatedSection>

      <AnimatedSection>
        <Skills />
      </AnimatedSection>
    </>
  );
}
