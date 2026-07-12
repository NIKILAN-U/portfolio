"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Technical Skills"
          title="The stack I build with"
          description="Tools and technologies I reach for across full-stack, AI, and blockchain work."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="gradient-border bg-surface/60 p-6 backdrop-blur-xl"
            >
              <p className="font-mono-tag text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {group.label}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-foreground/10 bg-foreground/[0.04] px-3 py-1.5 text-sm text-foreground/85 transition-colors hover:border-accent/50 hover:text-accent"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
