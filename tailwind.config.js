/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Neom", "sans-serif"],
        secondary: ["poppins", "sans-serif"],
      },
      colors: {
        primary: "#011638",
        light: "#EEF0F2",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
