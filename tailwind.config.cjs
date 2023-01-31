/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ml: "#FFF159",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontSize: {
        xsm: "0.9375rem",
        "4.5xl": "2.5rem",
      },
    },
    fontFamily: {
      sans: ["Space_Grotesk", "sans-serif"],
    },
  },
  plugins: [],
};
