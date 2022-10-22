/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primaryOng: "#102a54",
      red: "#f51e26",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#102a54",
          secondary: "#f51e26",
          primaryContent: "#ece2c9",
          "primary-content": "#ece2c9",
        },
      },
    ],
  },
};
