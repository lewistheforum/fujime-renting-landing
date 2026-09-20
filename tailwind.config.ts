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
        // Light Pastel Earthy Design Tokens (from PRODUCT.md)
        "bg-ground": "#F6F0E7",
        surface: "#FFF9F2",
        "surface-raised": "#EDE1D2",
        "border-subtle": "#DCCBBC",
        "accent-terracotta": "#B9684D",
        "accent-peach": "#E8B69A",
        "accent-sage": "#9EAD8A",
        "accent-dusty-rose": "#C98583",
        "text-primary": "#312922",
        "text-muted": "#756A60",
        "text-inverse": "#FFF9F2",

        // Backward compatibility tokens for existing classes
        bg: "#F6F0E7",
        "bg-2": "#EDE1D2",
        surface2: "#EDE1D2",
        ink: "#312922",
        muted: "#756A60",
        muted2: "#8E8378",
        orange: {
          DEFAULT: "#B9684D",
          bright: "#E8B69A",
          deep: "#8C432D",
        },
        line: "#DCCBBC",
      },
      fontFamily: {
        // Editorial brand & display font (Fraunces optical size serif)
        brand: ["Fraunces", "Georgia", "serif"],
        // Editorial display font
        display: ["Fraunces", "Playfair Display", "Georgia", "serif"],
        // Functional body and UI font (Be Vietnam Pro)
        body: ["Be Vietnam Pro", "system-ui", "sans-serif"],
        // Technical monospace font (Space Mono)
        mono: ["Space Mono", "ui-monospace", "monospace"],
      },
      animation: {
        "marquee-scroll": "marquee-scroll 45s linear infinite",
        "marquee-right": "marquee-right 35s linear infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        // Doubles as the 3D viewer's auto-switch timer (see camera-viewer-3d.tsx)
        "model-progress": "model-progress 10s linear forwards",
        "auth-step-in": "auth-step-in 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "auth-step-in": {
          "0%": { opacity: "0", transform: "translateY(8px)", filter: "blur(2px)" },
          "100%": { opacity: "1", transform: "translateY(0)", filter: "blur(0)" },
        },
        "model-progress": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        "marquee-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
