/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js, ts, tsx, tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
