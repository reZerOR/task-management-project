/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#2F4F4F",
        primeColor: "#4942E4",
        secondColor: "#8696FE",
        AccentColor: "#11009E",
      },
      fontFamily: {
        stylish: "'DM Serif Display', serif;",
      },
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [require("daisyui")],
};
