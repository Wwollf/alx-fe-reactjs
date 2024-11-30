/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",               // Make sure this includes index.html
    "./src/**/*.{js,jsx,ts,tsx}",  // Ensure all JSX files are included
  ],
  theme: {
    extend: {}, // Extend default theme if needed
  },
  plugins: [], // Add plugins here if required
  darkMode: "class", // Enables dark mode via a `.dark` class on a parent element
  plugins: "class",
  variants: "class",
  purge: "class",

};


