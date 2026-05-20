"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const words = ["I", "build", "things", "nobody", "asks", "me", "to", "build."];

export default function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.95]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#0C0C0C] overflow-hidden"
    >
      <motion.div style={{ opacity, scale }} className="text-center px-6">
        <h2 className="text-white font-heading font-medium leading-tight" style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}>
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 20, delay: i * 0.06 }}
              className="inline-block mr-[0.25em]"
            >
              {word}
            </motion.span>
          ))}
        </h2>

        <motion.p
          className="font-mono text-[rgba(255,255,255,0.4)] tracking-wider mt-6"
          style={{ fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          10 products · 2 states · Zero infra · Zero team
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
      >
        <motion.span
          className="font-mono text-[11px] text-[rgba(255,255,255,0.2)]"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          Keep going
        </motion.span>
      </motion.div>
    </section>
  );
}
