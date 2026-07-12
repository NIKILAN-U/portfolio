"use client";

import { motion } from "framer-motion";
import { Award, Blocks, FileCheck2, Globe, Trophy } from "lucide-react";
import { achievements } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = [Trophy, FileCheck2, Globe, Award, Blocks];

export function Achievements() {
  return (
    <section id="achievements" className="relative py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Achievements"
          title="Milestones along the way"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="gradient-border group bg-surface/60 p-6 backdrop-blur-xl"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/25 to-accent/20 text-accent transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="font-mono-tag mt-4 text-xs text-muted">{item.date}</p>
                <h3 className="mt-1 text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
