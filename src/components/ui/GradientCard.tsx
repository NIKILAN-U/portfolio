"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function GradientCard({
  children,
  className,
  delay = 0,
  as: Component = motion.div,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: typeof motion.div | typeof motion.article;
}) {
  return (
    <Component
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "gradient-border group relative overflow-hidden bg-surface/70 p-6 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1",
        className
      )}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/20 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />
      <div className="relative">{children}</div>
    </Component>
  );
}
