import { Ruler, Lightbulb, ShowerHead, Sofa, ShoppingBag } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/lib/data";

const icons = [Ruler, Lightbulb, ShowerHead, Sofa, ShoppingBag];

export function Projects() {
  return (
    <section id="projects" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Projects" title="Featured work" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={project.title} direction="up" delay={i * 0.08}>
                <div className="glass group h-full overflow-hidden rounded-card transition-all duration-300 hover:-translate-y-2 hover:border-primary/40">
                  <div className="flex h-40 items-center justify-center bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_2px,transparent_2px,transparent_14px)] bg-gradient-to-br from-primary/20 to-secondary/10">
                    <Icon
                      size={44}
                      className="text-primary/80 transition-transform duration-300 group-hover:scale-110"
                      strokeWidth={1.4}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 font-display text-[17px] font-semibold">
                      {project.title}
                    </h3>
                    <p className="mb-4 text-[14px] leading-relaxed text-muted">
                      {project.description}
                    </p>
                    <div className="mb-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-primary/25 bg-primary/10 px-2.5 py-1 font-mono text-[11px] text-blue-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2.5">
                      <button className="glass flex-1 rounded-lg py-2 text-[13px] transition-colors hover:border-accent/50">
                        View Project
                      </button>
                      <button className="glass flex-1 rounded-lg py-2 text-[13px] transition-colors hover:border-accent/50">
                        Case Study
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
