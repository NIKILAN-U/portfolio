"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Eye, FileWarning } from "lucide-react";
import { profile } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function Resume() {
  const [available, setAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(profile.resumeHref, { method: "HEAD" })
      .then((res) => {
        if (!cancelled) setAvailable(res.ok);
      })
      .catch(() => {
        if (!cancelled) setAvailable(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="resume" className="relative py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Resume"
          title="Full resume, one click away"
          description="Preview it below, or download a copy for your records."
        />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="gradient-border overflow-hidden bg-surface/60 p-6 backdrop-blur-xl sm:p-8"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm text-muted">{profile.name} — {profile.title}</p>
            </div>
            <div className="flex gap-3">
              <Button href={profile.resumeHref} variant="outline" size="sm" external>
                <Eye className="h-4 w-4" /> View Resume
              </Button>
              <Button href={profile.resumeHref} size="sm" external>
                <Download className="h-4 w-4" /> Download Resume
              </Button>
            </div>
          </div>

          <div className="mt-6 aspect-[8.5/6] w-full overflow-hidden rounded-xl border border-foreground/10 bg-background/60">
            {available ? (
              <iframe src={profile.resumeHref} title="Resume preview" className="h-full w-full" />
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-3 p-8 text-center">
                <FileWarning className="h-8 w-8 text-muted" />
                <p className="max-w-sm text-sm text-muted">
                  {available === null
                    ? "Checking for a resume file…"
                    : "resume.pdf hasn’t been added to /public yet — drop it in to enable the preview and download buttons."}
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
