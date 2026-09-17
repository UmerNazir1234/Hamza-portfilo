import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        secondary: "#8B5CF6",
        accent: "#06B6D4",
        canvas: "#0F172A",
        surface: "#111827",
        "surface-2": "#0B1220",
        muted: "#94A3B8",
        line: "rgba(148,163,184,0.14)",
        glass: "rgba(255,255,255,0.045)",
        "glass-border": "rgba(255,255,255,0.09)",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-archivo)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "grad-brand": "linear-gradient(120deg, #3B82F6, #8B5CF6 55%, #06B6D4)",
        "grid-lines":
          "linear-gradient(rgba(148,163,184,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.10) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "56px 56px",
      },
      borderRadius: {
        card: "16px",
      },
      keyframes: {
        blink: { "50%": { opacity: "0" } },
        float: {
          "0%,100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(24px,-24px)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        float: "float 14s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
