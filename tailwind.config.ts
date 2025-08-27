/** @type {import('tailwindcss').Config} */
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
        "clickflow-blue": "#0c1e3a",
        "light-gray": "#f4f7f9",
        // A vibrant, high-contrast accent color
        accent: "#14f195",
      },
      fontFamily: {
        // Sets "Inter" as the default sans-serif font
        sans: ["Inter", "sans-serif"],
      },
      // Example of a custom animation for subtle reveals
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
