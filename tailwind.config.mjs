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
        blackshade3: "var(--blackshade3)",
        blackshade4: "var(--blackshade4)",
      },
      keyframes: {
        scroll: {
          from: {
            transform: 'translateX(0)',
          },
          to: {
            transform: 'translateX(calc(-100% - 1rem))',
          },
        },
      },
      animation: {
        scroll: "scroll 10s linear infinite",
        scrollslow: "scroll 15s linear infinite",
      },


    },
  },
  
  plugins: [],
};
