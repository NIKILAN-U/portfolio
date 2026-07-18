"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Globe2, Lock, MapPin } from "lucide-react";
import { clientProjects, type ClientProject } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

const TABS = ["Overview", "Responsibilities", "Tech Stack"] as const;

function ClientProjectCard({ project, index }: { project: ClientProject; index: number }) {
  const [tab, setTab] = useState<(typeof TABS)[number]>("Overview");

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="gradient-border overflow-hidden bg-surface/60 backdrop-blur-xl"
    >
      <div className="relative flex h-40 items-end overflow-hidden bg-mesh-gradient p-6">
        <div className="grid-backdrop absolute inset-0 opacity-70" />
        <div className="relative flex w-full items-end justify-between">
          <div>
            <p className="font-mono-tag flex items-center gap-1.5 text-xs text-accent">
              <Globe2 className="h-3.5 w-3.5" /> {project.country}
            </p>
            <h3 className="mt-1 text-2xl font-bold text-foreground">{project.name}</h3>
          </div>
          <Badge tone="outline" className="hidden items-center gap-1.5 sm:inline-flex">
            <Lock className="h-3 w-3" /> {project.status}
          </Badge>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        <p className="text-sm text-muted">{project.description}</p>

        <div className="mt-6 flex gap-1 rounded-2xl border border-foreground/10 bg-foreground/[0.04] p-1 sm:rounded-full">
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              suppressHydrationWarning
              className={cn(
                "flex-1 rounded-xl px-2 py-2 text-[0.68rem] font-medium leading-tight transition-colors sm:rounded-full sm:px-3 sm:text-xs",
                tab === t ? "bg-primary text-foreground" : "text-muted hover:text-foreground"
              )}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-5 min-h-[104px]">
          {tab === "Overview" && (
            <div className="flex items-start gap-2 rounded-xl border border-foreground/10 bg-foreground/[0.03] p-4 text-sm text-muted">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <p>
                Delivered as part of a 6-month engagement at Hazzino Technologies for a client based
                in {project.country}. Codebase and infrastructure remain client-owned and confidential
                under NDA — timeline: {project.timeline}.
              </p>
            </div>
          )}
          {tab === "Responsibilities" && (
            <div className="flex flex-wrap gap-2">
              {project.responsibilities.map((r) => (
                <Badge key={r}>{r}</Badge>
              ))}
            </div>
          )}
          {tab === "Tech Stack" && (
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <Badge key={s} tone="accent">
                  {s}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function ClientProjects() {
  return (
    <section id="client-projects" className="relative py-16 sm:py-24 lg:py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Client Work"
          title="International client projects"
          description="Production platforms shipped for clients in the United States and Malaysia. Code is confidential under NDA — details below reflect my scope of work."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          {clientProjects.map((project, index) => (
            <ClientProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
