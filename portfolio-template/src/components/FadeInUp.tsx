"use strict";

"use client";

import React from "react";
import { motion } from "framer-motion";

interface FadeInUpProps {
  children: React.ReactNode;
  delay?: number;
}

export default function FadeInUp({ children, delay = 0 }: FadeInUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.215, 0.61, 0.355, 1], // easeOutCubic
      }}
    >
      {children}
    </motion.div>
  );
}
