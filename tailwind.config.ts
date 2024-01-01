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
        "blue-charcoal": {
          "50": "#eef9ff",
          "100": "#dcf3ff",
          "200": "#b2eaff",
          "300": "#6ddaff",
          "400": "#20c8ff",
          "500": "#00b1ff",
          "600": "#008edf",
          "700": "#0070b4",
          "800": "#005f95",
          "900": "#004e7a",
          "950": "#00111c",
        },
        mirage: {
          "50": "#f1f6fd",
          "100": "#dfecfa",
          "200": "#c6def7",
          "300": "#9ec9f2",
          "400": "#70abea",
          "500": "#4f8ce2",
          "600": "#3a70d6",
          "700": "#315cc4",
          "800": "#2d4ca0",
          "900": "#29427f",
          "950": "#0e1425",
        },
        pl: {
          "1": " #10002B",
          "2": "#240046",
          "3": "#3C096C",
          "4": "#5A189A",
          "5": "#7B2CBF",
          "6": "#9D4EDD",
          "7": "#C77DFF",
          "8": "#E0AAFF",
        },
        main: "#FAFAFA",
        highlight: "#7f5af0",
        secondary: "#72757e",
        tertiary: "#1bf396",
        stroke: "#010101",
        bg: "#16161a",
        bg2: "#242629",
        "card-bg": "#16161a",
        qrbg: "#111618",
        light: "#ffffff",
        dark: "#111618",
        "lavender-blue": "#d6e5ff",
        indigo: "#550686",
        cinnabar: "#EF553B",
        "mid-light": "#e2e2e2",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
