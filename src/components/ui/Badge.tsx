import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Badge({
  children,
  className,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "accent" | "outline";
}) {
  return (
    <span
      className={cn(
        "font-mono-tag inline-flex items-center rounded-full px-3 py-1 text-[0.68rem] font-medium",
        tone === "default" && "bg-foreground/[0.07] text-muted",
        tone === "accent" && "bg-accent/10 text-accent",
        tone === "outline" && "border border-foreground/15 text-foreground/80",
        className
      )}
    >
      {children}
    </span>
  );
}
