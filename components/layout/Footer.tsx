import Link from "next/link";
import { nav, site } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-glass-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 sm:flex-row sm:justify-between">
        <Link href="#hero" className="flex items-center gap-2.5 text-base font-bold">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-grad-brand font-display text-[#0f172a]">
            H
          </span>
          {site.name}
        </Link>

        <div className="flex gap-6 text-sm text-muted">
          {nav.slice(0, 4).map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-accent">
              {item.label}
            </Link>
          ))}
        </div>

        <p className="font-mono text-xs text-muted">
          © 2026 {site.name} — {site.title}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
