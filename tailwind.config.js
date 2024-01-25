/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#110D35",
        primeColor: "#10009E",
        secondColor: "#8696FE",
        AccentColor: "#590DF2",
      },
      fontFamily: {
        stylish: "'DM Serif Display', serif;",
      },
    },
  },
  plugins: [require("daisyui")],
};
