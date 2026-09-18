import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0b",
        "bg-2": "#0e0e10",
        surface: "#141416",
        surface2: "#1a1a1d",
        ink: "#f4f1ec",
        muted: "#b4b0aa",
        muted2: "#8e887e",
        orange: {
          DEFAULT: "#ff6b1a",
          bright: "#ff8c3f",
          deep: "#c84f0c",
        },
        line: "rgba(255, 255, 255, 0.08)",
      },
      fontFamily: {
        display: ["Fraunces", "Playfair Display", "Georgia", "serif"],
        body: ["Be Vietnam Pro", "system-ui", "sans-serif"],
        mono: ["Space Mono", "ui-monospace", "monospace"],
      },
      animation: {
        "marquee-scroll": "marquee-scroll 45s linear infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        "marquee-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
