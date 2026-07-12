"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Sparkles, User, X } from "lucide-react";
import { navLinks, profile } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 24);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div
        className={cn(
          "section-container flex items-center justify-between rounded-full border-2 border-foreground bg-surface px-4 py-2 transition-all duration-300 sm:px-5",
          scrolled ? "shadow-pop" : "shadow-none"
        )}
      >
        <a href="#top" className="flex items-center gap-2 font-display text-base font-extrabold tracking-tight text-foreground">
          <Sparkles className="h-4 w-4 text-accent" />
          NIKILAN<span className="text-primary">.</span>U
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                active === link.href
                  ? "bg-primary text-foreground"
                  : "text-muted hover:text-foreground"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="#contact" variant="outline" size="sm">
            Hire Me
          </Button>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-background text-foreground">
            <User className="h-4 w-4" />
          </span>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          suppressHydrationWarning
          className="flex h-10 w-10 items-center justify-center rounded-full text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="section-container mt-2 flex flex-col gap-1 rounded-3xl border-2 border-foreground bg-surface p-4 shadow-card lg:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-2xl px-4 py-3 text-sm font-semibold transition-colors",
                  active === link.href ? "bg-primary text-foreground" : "text-muted hover:bg-background hover:text-foreground"
                )}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex gap-3 px-4">
              <Button href="#contact" variant="outline" size="sm" className="flex-1">
                Hire Me
              </Button>
              <Button href={profile.resumeHref} size="sm" external className="flex-1">
                Resume
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
