/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#2F4F4F",
        primeColor: "#590DF2",
        secondColor: "#F2F2F2",
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
  plugins: [require("daisyui")],
};
