/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ], // Specify files to scan for classes
  theme: {
    extend: {}, // Extend default theme if needed
  },
  plugins: [], // Add plugins here if required
  darkMode: "class", // Enables dark mode via a `.dark` class on a parent element
  plugins: "class",
  variants: "class",
  purge: "class",

};


