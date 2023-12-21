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
      },
      fontFamily: {
        sans: ["var(--font-spacegrotesk)"],
      },
      colors: {
        main: "#FAFAFA",
        highlight: "#7f5af0",
        secondary: "#72757e",
        tertiary: "#1bf396",
        stroke: "#010101",
        bg: "#16161a",
        bg2: "#242629",
        "card-bg": "#16161a",
        qrbg: "#111618",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
