"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  direction?: "up" | "left" | "right" | "none";
  delay?: number;
  className?: string;
}

const variants = {
  up: { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -28 }, show: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 28 }, show: { opacity: 1, x: 0 } },
  none: { hidden: { opacity: 0 }, show: { opacity: 1 } },
};

export function Reveal({ children, direction = "up", delay = 0, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.2, 0.7, 0.2, 1] }}
      variants={variants[direction]}
    >
      {children}
    </motion.div>
  );
}
