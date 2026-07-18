"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { TypingText } from "@/components/ui/TypingText";
import { Squiggle, ArcRing } from "@/components/ui/Decor";

const Hero3D = dynamic(() => import("@/components/ui/Hero3D").then((m) => m.Hero3D), {
  ssr: false,
});

const highlights = ["6+ Major Projects", "6-Month Internship", "Hackathon Winner"];

export function Hero() {
  return (
    <section className="relative pb-20 pt-32 sm:pt-36">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[2.5rem] border-2 border-foreground bg-surface p-6 shadow-card-lg sm:p-10 lg:p-14"
        >
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            {/* Collage */}
            <div className="relative">
              <Squiggle className="absolute -left-4 -top-10 h-16 w-28 text-primary sm:-left-8 sm:-top-12 sm:h-20 sm:w-36" />
              <ArcRing className="pointer-events-none absolute -right-6 -top-8 h-24 w-24 text-primary/70 sm:h-28 sm:w-28" />

              <div className="relative grid grid-cols-2 gap-4 pt-8">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="flex aspect-square flex-col justify-between rounded-3xl bg-accent/25 p-4 sm:p-5"
                >
                  <span className="font-mono-tag text-xs font-semibold uppercase tracking-widest text-foreground/70">
                    Focus
                  </span>
                  <p className="font-display text-sm font-extrabold leading-tight text-foreground xs:text-base sm:text-lg">
                    MERN &middot; AI &middot; Blockchain
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-primary/25 via-primary/10 to-transparent"
                >
                  <Hero3D className="absolute inset-0 h-full w-full" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex aspect-square flex-col justify-between rounded-3xl bg-sunshine/40 p-4 sm:p-5"
                >
                  <span className="font-mono-tag text-xs font-semibold uppercase tracking-widest text-foreground/70">
                    Status
                  </span>
                  <p className="font-display text-sm font-extrabold leading-tight text-foreground xs:text-base sm:text-lg">
                    Open to Work
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="grid-backdrop relative flex aspect-square flex-col justify-between rounded-3xl border-2 border-foreground/10 bg-background p-4 sm:p-5"
                >
                  <span className="font-mono-tag text-xs font-semibold uppercase tracking-widest text-muted">
                    Based in
                  </span>
                  <p className="font-display text-sm font-extrabold leading-tight text-foreground xs:text-base sm:text-lg">
                    Coimbatore, IN
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Copy */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-2xl font-black text-accent"
              >
                2026
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="mt-2 text-4xl font-black uppercase leading-[0.98] tracking-tight xs:text-[2.6rem] sm:text-6xl xl:text-7xl"
              >
                <span className="block text-accent">Full Stack</span>
                <span className="block text-foreground">Software</span>
                <span className="block text-primary">Engineer</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="mt-5 h-7 font-mono-tag text-base text-muted sm:text-lg"
              >
                <TypingText words={profile.roles} />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.32 }}
                className="mt-5 max-w-lg text-base leading-relaxed text-muted"
              >
                {profile.summary}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.38 }}
                className="mt-7 inline-flex flex-wrap items-center gap-x-3 gap-y-2 rounded-2xl border-2 border-foreground/10 bg-background px-4 py-3 text-xs font-semibold text-foreground sm:rounded-full sm:px-5 sm:text-sm"
              >
                {highlights.map((item, i) => (
                  <span key={item} className="flex items-center gap-3">
                    {item}
                    {i < highlights.length - 1 && <span className="h-1 w-1 rounded-full bg-foreground/30" />}
                  </span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <Button href="#projects" size="lg">
                  View Projects <ArrowUpRight className="h-4 w-4" />
                </Button>
                <Button href="#contact" variant="outline" size="lg">
                  Hire Me
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.52 }}
                className="mt-9 flex flex-wrap items-center justify-between gap-4 border-t-2 border-foreground/10 pt-6"
              >
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono-tag text-sm text-muted transition-colors hover:text-foreground"
                >
                  github.com/{profile.githubUser}
                </a>
                <div className="flex items-center gap-2">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background transition-transform hover:-translate-y-0.5"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background transition-transform hover:-translate-y-0.5"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={`mailto:${profile.email}`}
                    aria-label="Email"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background transition-transform hover:-translate-y-0.5"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
