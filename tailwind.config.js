/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
      },
      colors: {
        textWhite: "#FFFFFF",
        textColor: "#CECECE",
        primaryColor: "#FF6363",
        secondaryColor: "#231D1D",
        secondaryColorBg: "#0F0E0E",
      },
    },
  },
  plugins: [],
};
