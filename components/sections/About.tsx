import { Reveal } from "@/components/animations/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { about, highlights } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal direction="left">
          <SectionHeading
            eyebrow="About"
            title="Detail-driven design, built on precision."
          />
          <div className="space-y-5 text-[15.5px] leading-relaxed text-muted">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {highlights.map((h, i) => (
            <Reveal key={h.label} direction="up" delay={i * 0.06}>
              <div className="glass h-full rounded-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40">
                <span className="mb-3 block font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[15px] font-semibold leading-snug">{h.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
