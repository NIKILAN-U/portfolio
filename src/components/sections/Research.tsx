"use client";

import { motion } from "framer-motion";
import { ExternalLink, FileText } from "lucide-react";
import { research } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function Research() {
  return (
    <section id="research" className="relative py-16 sm:py-24 lg:py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Research"
          title="Published research"
          description="Peer-reviewed work on quantum information theory."
        />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="gradient-border grid gap-8 bg-surface/60 p-8 backdrop-blur-xl lg:grid-cols-[auto_1fr] lg:p-10"
        >
          <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/25 to-accent/20 text-primary lg:h-full lg:w-40">
            <FileText className="h-10 w-10 text-accent" />
          </div>

          <div>
            <div className="flex flex-wrap gap-2">
              <Badge tone="accent">{research.journal}</Badge>
              <Badge>Vol. {research.volume}, Issue {research.issue}</Badge>
              <Badge>{research.year}</Badge>
            </div>

            <h3 className="mt-4 text-xl font-bold leading-snug text-foreground sm:text-2xl">
              {research.title}
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-muted">{research.abstract}</p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button href={research.doiUrl} variant="outline" size="sm">
                Read Paper <ExternalLink className="h-3.5 w-3.5" />
              </Button>
              <span className="font-mono-tag text-xs text-muted">DOI: {research.doi}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
