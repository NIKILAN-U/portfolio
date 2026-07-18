"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { profile } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "sending" | "success" | "error";

const socials = [
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  { label: "Phone", href: `tel:${profile.phoneHref}`, icon: Phone },
  { label: "WhatsApp", href: profile.whatsapp, icon: FaWhatsapp },
];

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      const mailBody = encodeURIComponent(
        `${form.message}\n\n— ${form.name} (${form.email})`
      );
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
        form.subject || "Portfolio inquiry"
      )}&body=${mailBody}`;
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative py-16 sm:py-24 lg:py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          description="Open to full-time roles, freelance engagements, and interesting collaborations."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            onSubmit={handleSubmit}
            className="gradient-border space-y-4 bg-surface/60 p-6 backdrop-blur-xl sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs text-muted">Name</label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  suppressHydrationWarning
                  className="w-full rounded-xl border border-foreground/10 bg-foreground/[0.04] px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs text-muted">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  suppressHydrationWarning
                  className="w-full rounded-xl border border-foreground/10 bg-foreground/[0.04] px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
                  placeholder="jane@company.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="mb-1.5 block text-xs text-muted">Subject</label>
              <input
                id="subject"
                required
                value={form.subject}
                onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                suppressHydrationWarning
                className="w-full rounded-xl border border-foreground/10 bg-foreground/[0.04] px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
                placeholder="Role, project, or collaboration"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs text-muted">Message</label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                suppressHydrationWarning
                className="w-full resize-none rounded-xl border border-foreground/10 bg-foreground/[0.04] px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
                placeholder="Tell me a bit about what you're building…"
              />
            </div>

            <Button type="submit" className="w-full sm:w-auto">
              <Send className="h-4 w-4" />
              {status === "sending" ? "Sending…" : "Send Message"}
            </Button>

            {status === "success" && (
              <p className="text-sm text-emerald-600">Thanks — your message is on its way. I&apos;ll reply soon.</p>
            )}
            {status === "error" && (
              <p className="text-sm text-amber-600">
                Opening your email client instead — the direct message service isn&apos;t configured yet.
              </p>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="gradient-border flex-1 overflow-hidden bg-surface/60 backdrop-blur-xl">
              <iframe
                title="Coimbatore, Tamil Nadu map"
                src="https://www.google.com/maps?q=Coimbatore,Tamil+Nadu,India&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-56 w-full grayscale contrast-[1.05] sm:h-64"
              />
              <div className="flex items-center gap-2 border-t border-foreground/10 p-4 text-sm text-muted">
                <MapPin className="h-4 w-4 text-accent" /> {profile.location}
              </div>
            </div>

            <div className="gradient-border grid grid-cols-3 gap-3 bg-surface/60 p-5 backdrop-blur-xl sm:grid-cols-5">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  className="flex flex-col items-center gap-2 rounded-xl border border-foreground/10 bg-foreground/[0.03] py-4 text-muted transition-colors hover:border-accent/50 hover:text-accent"
                >
                  <social.icon className="h-4 w-4" />
                  <span className="text-[0.65rem]">{social.label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
