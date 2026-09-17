"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/animations/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillGroups } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Skills() {
  const [activeId, setActiveId] = useState(skillGroups[0].id);
  const active = skillGroups.find((g) => g.id === activeId)!;

  return (
    <section id="skills" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="What I work with"
          description="A breakdown of drafting, interior planning, visualization, and store-support skills."
        />

        <div className="mb-10 flex flex-wrap gap-2.5">
          {skillGroups.map((group) => (
            <button
              key={group.id}
              onClick={() => setActiveId(group.id)}
              className={cn(
                "rounded-full border px-4.5 py-2 text-[13px] transition-all",
                activeId === group.id
                  ? "border-transparent bg-grad-brand font-semibold text-[#081019]"
                  : "border-glass-border bg-glass text-muted hover:text-white"
              )}
            >
              {group.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2">
          {active.items.map((item, i) => (
            <Reveal key={active.id + item.name} direction="up" delay={i * 0.05}>
              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span>{item.name}</span>
                  <span className="font-mono text-accent">{item.percent}%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-grad-brand"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percent}%` }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
