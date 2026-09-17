import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-300";
  const styles =
    variant === "primary"
      ? "bg-grad-brand text-[#081019] shadow-[0_8px_30px_-8px_rgba(59,130,246,0.55)] hover:-translate-y-0.5 hover:shadow-[0_12px_34px_-6px_rgba(139,92,246,0.55)]"
      : "glass hover:-translate-y-0.5 hover:border-accent/50";

  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a href={href} className={cn(base, styles, className)}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(base, styles, className)}>
      {children}
    </Link>
  );
}
