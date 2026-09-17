"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { nav, site } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-glass-border bg-canvas/70 py-3 backdrop-blur-xl"
          : "border-b border-transparent py-5"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <Link href="#hero" className="flex items-center gap-2.5 text-lg font-bold">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-grad-brand font-display text-[#0f172a] shadow-[0_0_20px_rgba(59,130,246,0.35)]">
            H
          </span>
          {site.name}
        </Link>

        <div className="hidden gap-8 text-sm text-muted md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative py-1 transition-colors hover:text-white",
                active === item.href && "text-white"
              )}
            >
              {item.label}
              {active === item.href && (
                <span className="absolute -bottom-0.5 left-0 h-px w-full bg-accent" />
              )}
            </Link>
          ))}
        </div>

        <Button href="#contact" className="!px-5 !py-2.5 text-[13px]">
          Hire Me
        </Button>
      </div>
    </nav>
  );
}
