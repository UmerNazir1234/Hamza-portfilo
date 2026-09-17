"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-7 right-7 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-grad-brand text-[#081019] shadow-[0_8px_24px_-6px_rgba(59,130,246,0.6)] transition-all duration-300",
        show ? "opacity-100" : "pointer-events-none translate-y-2 opacity-0"
      )}
    >
      <ArrowUp size={18} />
    </button>
  );
}
