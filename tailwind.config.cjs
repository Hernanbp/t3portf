/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-500": "#19192B",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      display: ["Almarai", "sans-serif"],
    },
  },
  plugins: [],
};
