"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { rotatingTitles, site } from "@/lib/data";

const whatsappUrl = `https://wa.me/${site.whatsapp}`;

function useTypedText(words: string[]) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const speed = deleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setWordIndex((i) => (i + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words]);

  return text;
}

const socials = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: `mailto:${site.email}`, label: "Email" },
  { icon: MessageCircle, href: whatsappUrl, label: "WhatsApp" },
];

export function Hero() {
  const typed = useTypedText(rotatingTitles);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20"
    >
      <div className="blueprint-grid absolute inset-0 -z-10" />
      <div
        className="absolute -right-24 -top-32 -z-10 h-[380px] w-[380px] rounded-full bg-primary/20 blur-[100px]"
        aria-hidden
      />
      <div
        className="absolute -bottom-24 -left-16 -z-10 h-[320px] w-[320px] rounded-full bg-secondary/15 blur-[100px]"
        aria-hidden
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-5 flex items-center gap-2 font-mono text-[13px] uppercase tracking-[0.1em] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_theme(colors.accent)]" />
            {site.availability}
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="text-gradient">{site.name}</span>
          </h1>

          <div className="mt-4 flex h-8 items-center gap-2 font-mono text-lg text-muted sm:text-xl">
            <span className="text-accent">&gt;</span>
            <span>{typed}</span>
            <span className="h-5 w-[2px] animate-blink bg-accent" aria-hidden />
          </div>

          <p className="mt-6 max-w-lg text-[16.5px] leading-relaxed text-muted">
            {site.tagline}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button href={`${whatsappUrl}?text=${encodeURIComponent("Hello Hamza, I would like to receive your CV.")}`}>
              Download CV
            </Button>
            <Button href="#contact" variant="ghost">
              Hire Me
            </Button>
          </div>

          <div className="mt-9 flex gap-3.5">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="glass flex h-10 w-10 items-center justify-center rounded-lg text-muted transition-all hover:-translate-y-0.5 hover:text-accent hover:border-accent/50"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative h-[340px] w-[280px] overflow-hidden rounded-2xl border border-glass-border bg-gradient-to-br from-primary/15 to-secondary/10 sm:h-[400px] sm:w-[340px]">
            <Image
              src="/images/profile.jpeg"
              alt={`${site.name} profile portrait`}
              fill
              priority
              sizes="(min-width: 640px) 340px, 280px"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-canvas/40 via-transparent to-transparent" />
            <span className="absolute left-4 top-4 rounded-md border border-glass-border bg-canvas/70 px-2 py-1 font-mono text-[10px] text-muted">
              SCALE 1:50
            </span>
            <span className="absolute bottom-4 right-4 rounded-md border border-glass-border bg-canvas/70 px-2 py-1 font-mono text-[10px] text-muted">
              DWG-001
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
