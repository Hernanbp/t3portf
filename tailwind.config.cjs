/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-base": "#0F0F0F",
        "green-base": "#12FF71",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontSize: {
        xsm: "0.9375rem",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
