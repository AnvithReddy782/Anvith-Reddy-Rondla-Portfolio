import { Variants, Transition } from "framer-motion";

export const springSoft: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 25,
  mass: 0.8,
};

export const springMedium: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 20,
  mass: 0.5,
};

export const springStiff: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 25,
  mass: 0.3,
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: springSoft },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: springSoft },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: springSoft },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: springSoft },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: springMedium },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export const staggerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.05 },
  },
};

export const drawLine: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 0.8, ease: "easeInOut" }, opacity: { duration: 0.3 } },
  },
};
