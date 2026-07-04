import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#060606",
        graphite: "#111111",
        smoke: "#1d1c1a",
        bone: "#f7f1e7",
        pearl: "#d8d2c8",
        gold: "#c7a76a",
        ember: "#812b22",
        tealInk: "#2c5556"
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
      },
      boxShadow: {
        premium: "0 24px 80px rgba(0,0,0,.42)",
        gold: "0 0 45px rgba(199,167,106,.22)"
      },
      backgroundImage: {
        noise: "radial-gradient(circle at 20% 10%, rgba(199,167,106,.13), transparent 28%), radial-gradient(circle at 80% 20%, rgba(129,43,34,.13), transparent 24%), linear-gradient(135deg, #060606 0%, #111111 47%, #15120e 100%)"
      }
    },
  },
  plugins: [],
};

export default config;
