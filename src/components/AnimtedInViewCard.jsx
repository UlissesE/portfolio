import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AnimatedSectionCard({ className, key, delay, children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      key={key}
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay:delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}