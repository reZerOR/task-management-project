/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react';
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}","./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#2F4F4F",
        primeColor: "#590DF2",
        secondColor: "#B0E0E6",
        AccentColor: "#590DF2",
      },
      fontFamily: {
        stylish: "'DM Serif Display', serif;",
      },
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [require("daisyui"),nextui()],
};
