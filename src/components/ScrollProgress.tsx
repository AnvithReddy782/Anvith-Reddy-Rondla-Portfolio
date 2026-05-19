"use client";

import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      setVisible(v > 0.02);
    });
  }, [scrollYProgress]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-[var(--color-accent)] origin-left z-[100]"
      style={{ scaleX: scrollYProgress, opacity: visible ? 1 : 0 }}
      transition={{ opacity: { duration: 0.2 } }}
    />
  );
}
