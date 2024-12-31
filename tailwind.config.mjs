import { Graduate } from "next/font/google";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blackshade: "var(--blackshade)",
        blackshade2: "var(--blackshade2)",
        blackshade3: "var(--blackshade3)",
        blackshade4: "var(--blackshade4)",
        primarypink: "#ff2a83",
        primaryyellow: "#cde052",
        neutral900: "#0E0D0F",
        neutral800: "#121113",
        neutral700: "#171619",
        neutral600: "#1e1c20",
        neutral500: "#211f23",
        neutral400: "#4d4c4f",
        neutral300: "#6a696c",
        neutral200: "#99989a",
        neutral100: "#bababb",
        neutral50: "#e9e9e9",
      },
      keyframes: {
        scroll: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - 1rem))",
          },
        },
      },
      animation: {
        scroll: "scroll 10s linear infinite",
        scrollslow: "scroll 15s linear infinite",
      },
      backgroundImage: {
        // 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        "gradient-radial": "radial-gradient(closest-side, #ff2a83, #00000000);",
      },
    },
  },

  plugins: ["prettier-plugin-tailwindcss"],
};
