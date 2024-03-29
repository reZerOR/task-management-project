// const {nextui} = require("@nextui-org/react");
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react';
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],

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


  plugins: [
    require("daisyui"),
    nextui(), // Assuming nextui is a package you're importing
  ],
  darkMode: "class",

};
