import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["var(--font-body)"],
        title: ["var(--font-title)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brown: "var(--brown-color)",
        herbal: "var(--herbal-color)",
      },
    },
  },
  plugins: [],
};
export default config;
