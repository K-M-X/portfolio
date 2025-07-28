import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark0: "rgba(30, 32, 33)",
        dark1: "rgba(37, 40, 42)",
        dark2: "rgba(40, 46, 50)",
      },
      animation: {
        heartbeat: 'heartbeat 7s infinite ease-in-out',
      },
      keyframes: {
        heartbeat: {
          '0%, 100%': {
            boxShadow: '0 0 0 0 rgba(72, 187, 120, 0.7)',
          },
          '50%': {
            boxShadow: '0 0 20px 10px rgba(72, 187, 120, 0)',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
