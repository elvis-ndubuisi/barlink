import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "bg-dot":
          "radial-gradient(circle, #00406cff 1px, rgba(0, 0, 0, 0) 1px)",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      colors: {
        "deep-sapphire": {
          "50": "#e9f7ff",
          "100": "#ceedff",
          "200": "#a7e1ff",
          "300": "#6bd2ff",
          "400": "#26b6ff",
          "500": "#008bff",
          "600": "#0061ff",
          "700": "#0046ff",
          "800": "#003be6",
          "900": "#0039b3",
          "950": "#002060",
        },
      },
    },
  },
  plugins: [nextui()],
};
export default config;
