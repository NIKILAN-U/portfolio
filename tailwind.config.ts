import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "400px",
      },
      colors: {
        primary: {
          DEFAULT: "#7C8CF0",
          foreground: "#14162B",
        },
        accent: {
          DEFAULT: "#F45C9C",
          foreground: "#14162B",
        },
        sunshine: "#F6C945",
        background: "#F3F4FC",
        surface: "#FFFFFF",
        foreground: "#14162B",
        muted: "#5D6082",
        border: "rgba(20, 22, 43, 0.1)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "mesh-gradient":
          "radial-gradient(at 15% 10%, rgba(124,140,240,0.5) 0px, transparent 55%), radial-gradient(at 85% 0%, rgba(244,92,156,0.35) 0px, transparent 50%), radial-gradient(at 50% 100%, rgba(246,201,69,0.3) 0px, transparent 55%)",
      },
      animation: {
        "gradient-x": "gradient-x 6s ease infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
        marquee: "marquee 32s linear infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      boxShadow: {
        pop: "0 2px 0 0 rgba(20,22,43,1)",
        "pop-lg": "0 6px 0 0 rgba(20,22,43,1)",
        card: "0 20px 45px -18px rgba(20,22,43,0.25)",
        "card-lg": "0 30px 60px -20px rgba(20,22,43,0.3)",
        glow: "0 0 0 1px rgba(124,140,240,0.35), 0 20px 45px -18px rgba(124,140,240,0.55)",
        "glow-accent":
          "0 0 0 1px rgba(244,92,156,0.35), 0 20px 45px -18px rgba(244,92,156,0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
