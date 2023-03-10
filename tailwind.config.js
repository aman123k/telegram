/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        roboto: "Roboto",
        ubuntu: "Ubuntu",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
