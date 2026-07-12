"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  const trackRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ctx: { revert: () => void } | undefined;

    (async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      if (!trackRef.current || !lineRef.current) return;

      ctx = gsap.context(() => {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: "top",
            ease: "none",
            scrollTrigger: {
              trigger: trackRef.current,
              start: "top 70%",
              end: "bottom 80%",
              scrub: 0.6,
            },
          }
        );
      }, trackRef);
    })();

    return () => ctx?.revert();
  }, []);

  return (
    <section id="experience" className="relative py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've shipped production code"
          description="Six months of building for real users, real clients, and real deadlines."
        />

        <div ref={trackRef} className="relative pl-10 sm:pl-14">
          <div className="absolute left-[7px] top-1 h-full w-px bg-white/10 sm:left-[11px]" />
          <div
            ref={lineRef}
            className="absolute left-[7px] top-1 h-full w-px bg-gradient-to-b from-primary to-accent sm:left-[11px]"
          />

          {experience.map((item, index) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative mb-12 last:mb-0"
            >
              <span className="absolute -left-10 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-accent/50 bg-background text-accent sm:-left-14 sm:h-7 sm:w-7">
                <Briefcase className="h-3.5 w-3.5" />
              </span>

              <div className="gradient-border bg-surface/60 p-6 backdrop-blur-xl sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{item.role}</h3>
                    <p className="mt-1 font-mono-tag text-sm text-accent">{item.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono-tag text-sm text-foreground/80">{item.period}</p>
                    <p className="text-xs text-muted">{item.location}</p>
                  </div>
                </div>

                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {item.responsibilities.map((task) => (
                    <li key={task} className="flex items-start gap-2 text-sm text-muted">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
