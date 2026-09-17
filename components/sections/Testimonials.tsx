"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const active = testimonials[index];

  return (
    <section id="testimonials" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Testimonials" title="What clients say" align="center" />

        <div className="glass mx-auto max-w-xl overflow-hidden rounded-card p-10 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
            >
              <div className="mb-5 flex justify-center gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mb-7 font-display text-lg font-medium leading-relaxed">
                &ldquo;{active.quote}&rdquo;
              </p>
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-grad-brand font-semibold text-[#081019]">
                {active.name
                  .split(" ")
                  .map((w) => w[0])
                  .join("")}
              </div>
              <p className="text-sm font-semibold">{active.name}</p>
              <p className="text-xs text-muted">{active.role}</p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-7 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-1.5 w-1.5 rounded-full transition-all",
                  i === index ? "w-4 bg-accent" : "bg-glass-border"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
