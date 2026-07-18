"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Sparkles,
  Blocks,
  BrainCog,
  Camera,
  Layers,
  Stethoscope,
  Terminal,
  type LucideIcon,
} from "lucide-react";
import { featuredProjects, profile, type Project } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

const categoryMeta: Record<string, { icon: LucideIcon; gradient: string }> = {
  Blockchain: { icon: Blocks, gradient: "from-violet-500/30 via-primary/20 to-transparent" },
  "Artificial Intelligence": { icon: BrainCog, gradient: "from-accent/30 via-primary/20 to-transparent" },
  "Machine Learning": { icon: Stethoscope, gradient: "from-emerald-500/25 via-primary/15 to-transparent" },
  "Computer Vision": { icon: Camera, gradient: "from-amber-500/25 via-primary/15 to-transparent" },
  "Full Stack": { icon: Layers, gradient: "from-primary/30 via-accent/15 to-transparent" },
};

const categories = ["All", ...Array.from(new Set(featuredProjects.map((p) => p.category)))];

const statusStyles: Record<Project["status"], string> = {
  Shipped: "text-emerald-600 border-emerald-500/40",
  "In Progress": "text-amber-600 border-amber-500/40",
  Confidential: "text-muted border-foreground/15",
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const meta = categoryMeta[project.category] ?? { icon: Terminal, gradient: "from-primary/25 to-transparent" };
  const Icon = meta.icon;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="gradient-border group flex flex-col overflow-hidden bg-surface/60 backdrop-blur-xl"
    >
      <div className={cn("relative flex h-32 items-center justify-between overflow-hidden bg-gradient-to-br p-5", meta.gradient)}>
        <div className="grid-backdrop absolute inset-0 opacity-50" />
        <Icon className="relative h-9 w-9 text-foreground/80" />
        <span className={cn("font-mono-tag relative rounded-full border px-3 py-1 text-[0.65rem]", statusStyles[project.status])}>
          {project.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold text-foreground">{project.name}</h3>
          <span className="font-mono-tag shrink-0 text-xs text-muted">{project.year}</span>
        </div>

        {project.highlight && (
          <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-accent">
            <Sparkles className="h-3.5 w-3.5" /> {project.highlight}
          </p>
        )}

        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3 border-t border-foreground/10 pt-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted transition-colors hover:text-accent"
          >
            <Github className="h-3.5 w-3.5" /> View on GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export function FeaturedProjects() {
  const [active, setActive] = useState("All");

  const visible = useMemo(
    () => (active === "All" ? featuredProjects : featuredProjects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="projects" className="relative py-16 sm:py-24 lg:py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Featured Work"
          title="Projects I've built end to end"
          description="Independent builds spanning blockchain, applied AI, and full-stack products — outside of client engagements."
        />

        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              suppressHydrationWarning
              className={cn(
                "font-mono-tag rounded-full border px-4 py-2 text-xs transition-colors",
                active === category
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-foreground/10 text-muted hover:border-foreground/25 hover:text-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
