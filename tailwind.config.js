const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary : '#38bdf8',
        secondary: '#94a3b8',
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}
