import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-scrollbar"),
    require("@tailwindcss/typography"),],
};
export default config;
