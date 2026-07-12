import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const buttonStyles = cva(
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:translate-y-0.5 active:shadow-none",
  {
    variants: {
      variant: {
        primary:
          "border-2 border-foreground bg-primary text-foreground shadow-pop hover:-translate-y-0.5 hover:shadow-pop-lg",
        outline:
          "border-2 border-foreground bg-surface text-foreground hover:-translate-y-0.5 hover:bg-background",
        ghost: "text-muted hover:text-foreground",
      },
      size: {
        default: "h-11 px-6 text-sm",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-7 text-sm sm:text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  }
);

type ButtonProps = VariantProps<typeof buttonStyles> & {
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  children: ReactNode;
  external?: boolean;
};

export function Button({
  href,
  onClick,
  type = "button",
  variant,
  size,
  className,
  children,
  external,
}: ButtonProps) {
  const classes = cn(buttonStyles({ variant, size }), className);

  if (href) {
    const isExternal =
      external ?? (href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel"));
    if (isExternal) {
      return (
        <a href={href} className={classes} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} suppressHydrationWarning>
      {children}
    </button>
  );
}
