import {
  Layers,
  LayoutGrid,
  Lightbulb,
  Zap,
  Box,
  Store,
} from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/data";

const icons = [Layers, LayoutGrid, Lightbulb, Zap, Box, Store];

export function Services() {
  return (
    <section id="services" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Services" title="How I can help" />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={service.title} direction="up" delay={i * 0.06}>
                <div className="group glass relative h-full rounded-card p-7 transition-all duration-300 hover:-translate-y-1.5">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon size={20} strokeWidth={1.6} />
                  </div>
                  <h3 className="mb-2.5 text-[16.5px] font-semibold">{service.title}</h3>
                  <p className="text-[14px] leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <div className="pointer-events-none absolute inset-0 rounded-card border border-transparent bg-grad-brand opacity-0 transition-opacity duration-300 [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] [-webkit-mask-composite:xor] p-px group-hover:opacity-40" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
