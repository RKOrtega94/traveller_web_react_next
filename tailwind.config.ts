import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  /* daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3F51B5",
          secondary: "#607D8B",
          accent: "#FF9800",
          neutral: "#2b3440",
          "base-100": "#ffffff",
          info: "#03A9F4",
          success: "#8BC34A",
          warning: "#FF5722",
          error: "#F44336",
        },
      },
    ],
  }, */
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
