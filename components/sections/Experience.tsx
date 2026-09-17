import { Reveal } from "@/components/animations/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Experience" title="Current role" />

        <div className="relative pl-9">
          <div className="absolute bottom-1.5 left-1.5 top-1.5 w-px bg-gradient-to-b from-primary to-accent" />

          {experience.map((item, i) => (
            <Reveal key={item.role} direction="up" delay={i * 0.1}>
              <div className="relative pb-8 last:pb-0">
                <span className="absolute -left-9 top-1 h-3 w-3 rounded-full border-2 border-accent bg-canvas shadow-[0_0_0_4px_rgba(6,182,212,0.15)]" />
                <div className="glass rounded-card p-7">
                  <h3 className="font-display text-lg font-bold">{item.role}</h3>
                  <span className="mb-4 mt-1 block font-mono text-xs uppercase tracking-wide text-accent">
                    {item.period}
                  </span>
                  <ul className="grid gap-2.5">
                    {item.responsibilities.map((r) => (
                      <li
                        key={r}
                        className="relative pl-4 text-[14.5px] leading-relaxed text-muted before:absolute before:left-0 before:top-[10px] before:h-px before:w-2.5 before:bg-accent"
                      >
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
