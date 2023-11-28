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
        righteous: "Righteous",
      },
      colors: {
        brand: "#FFAD23",
        "brand-light": "#fff3e0",
        "brand-secondary": "#5e3900",
      },
    },
  },
  plugins: [],
};
export default config;
