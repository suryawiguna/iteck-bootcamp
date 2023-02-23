/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: "#f9a41f",
        black: "#000000",
        "black-2": "#15141A",
        "black-3": "#212529",
        darkGray: "#666666",
        lightGray: "#999999",
      },
    },
  },
  plugins: [],
};
