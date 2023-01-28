/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-base": "#0F0F0F",
        "green-base": "#12FF71",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      display: ["Almarai", "sans-serif"],
    },
  },
  plugins: [],
};
