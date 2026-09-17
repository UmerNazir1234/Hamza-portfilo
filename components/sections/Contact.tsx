"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, MapPin, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/data";
import type { ContactFormValues } from "@/types";

const infoItems = [
  { icon: Mail, label: "EMAIL", value: site.email },
  { icon: MapPin, label: "LOCATION", value: site.location },
  { icon: CheckCircle2, label: "AVAILABILITY", value: site.availability },
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>();

  const onSubmit = (data: ContactFormValues) => {
    const message = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Subject: ${data.subject}`,
      `Message: ${data.message}`,
    ].join("\n");

    window.open(
      `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setStatus("sent");
    reset();
  };

  return (
    <section id="contact" className="py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1fr_1.15fr]">
        <Reveal direction="left">
          <SectionHeading
            eyebrow="Contact"
            title="Let's work together"
            description="Available for freelance and remote projects — drop a message and I'll get back to you."
          />

          <div className="space-y-4">
            {infoItems.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="glass flex items-start gap-4 rounded-card p-6 transition-all hover:translate-x-1.5 hover:border-accent/40"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon size={18} />
                </div>
                <div>
                  <div className="mb-1 font-mono text-xs text-muted">{label}</div>
                  <div className="text-[15px] font-semibold">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal direction="right">
          <form onSubmit={handleSubmit(onSubmit)} className="glass rounded-card p-8">
            <Field label="Name" error={errors.name?.message}>
              <input
                {...register("name", { required: "Name is required" })}
                placeholder="Your name"
                className="w-full rounded-lg border border-glass-border bg-white/[0.03] px-3.5 py-3 text-[14.5px] outline-none transition-colors focus:border-accent focus:bg-accent/5"
              />
            </Field>

            <Field label="Email" error={errors.email?.message}>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                placeholder="you@example.com"
                className="w-full rounded-lg border border-glass-border bg-white/[0.03] px-3.5 py-3 text-[14.5px] outline-none transition-colors focus:border-accent focus:bg-accent/5"
              />
            </Field>

            <Field label="Subject" error={errors.subject?.message}>
              <input
                {...register("subject", { required: "Subject is required" })}
                placeholder="Project inquiry"
                className="w-full rounded-lg border border-glass-border bg-white/[0.03] px-3.5 py-3 text-[14.5px] outline-none transition-colors focus:border-accent focus:bg-accent/5"
              />
            </Field>

            <Field label="Message" error={errors.message?.message}>
              <textarea
                {...register("message", { required: "Message is required" })}
                placeholder="Tell me about your project..."
                rows={5}
                className="w-full resize-y rounded-lg border border-glass-border bg-white/[0.03] px-3.5 py-3 text-[14.5px] outline-none transition-colors focus:border-accent focus:bg-accent/5"
              />
            </Field>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-lg bg-grad-brand py-3.5 text-center text-sm font-semibold text-[#081019] transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : status === "sent" ? "Sent ✓" : "Send Message"}
            </button>

          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-5">
      <label className="mb-2 block font-mono text-[13px] text-muted">{label}</label>
      {children}
      {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
    </div>
  );
}
