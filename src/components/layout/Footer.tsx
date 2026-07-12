import { Github, Linkedin, Mail } from "lucide-react";
import { footerLinks, profile } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-background">
      <div className="section-container flex flex-col gap-10 py-14">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div className="max-w-sm">
            <a href="#top" className="font-display text-xl font-extrabold tracking-tight text-foreground">
              NIKILAN<span className="text-primary">.</span>U
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Full Stack Software Engineer building production web platforms, blockchain
              systems, and AI tooling from Coimbatore, India.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/10 text-muted transition-colors hover:border-accent/50 hover:text-accent"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/10 text-muted transition-colors hover:border-accent/50 hover:text-accent"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/10 text-muted transition-colors hover:border-accent/50 hover:text-accent"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <nav className="grid grid-cols-2 gap-x-12 gap-y-3 sm:grid-cols-3">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-2 border-t border-foreground/10 pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p className="font-mono-tag">Built with Next.js, TypeScript &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
