"use client";

import { motion } from "framer-motion";
import { profile, aboutStats } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Counter } from "@/components/ui/Counter";
import { ReadMore } from "@/components/ui/ReadMore";

export function About() {
  return (
    <section id="about" className="relative py-16 sm:py-24 lg:py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="About"
          title="Engineer by trade, researcher by curiosity"
          description="A quick look at how I work and what I've been building."
        />

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-base leading-relaxed text-muted sm:text-lg"
          >
            <ReadMore
              preview={
                <p>
                  Full-stack engineer blending production web development with independent
                  research in AI and blockchain — currently interning at Hazzino Technologies
                  while finishing an M.Sc. in Software Systems.
                </p>
              }
              expanded={
                <div className="space-y-5">
                  <p>{profile.summary}</p>
                  <p>{profile.summarySecondary}</p>
                  <div className="flex flex-wrap gap-3 pt-1">
                    {["Full Stack Development", "Artificial Intelligence", "Blockchain", "Research"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="font-mono-tag rounded-full border border-foreground/10 bg-foreground/[0.05] px-4 py-1.5 text-xs text-foreground/80"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>
              }
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="gradient-border grid grid-cols-2 gap-6 bg-surface/60 p-8 backdrop-blur-xl"
          >
            {aboutStats.map((stat) => (
              <div key={stat.label}>
                <p className="font-mono-tag text-3xl font-bold text-gradient">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
