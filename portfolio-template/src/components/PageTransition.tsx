"use strict";

"use client";

import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{
        duration: 0.5,
        ease: [0.215, 0.61, 0.355, 1], // easeOutCubic
      }}
      className="flex flex-col min-h-screen"
    >
      {children}
    </motion.div>
  );
}
