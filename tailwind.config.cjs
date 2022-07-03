const colors = require('tailwindcss/colors');
const typography = require("@tailwindcss/typography");
const scrollbar = require("tailwind-scrollbar");

const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ['InterVariable', 'sans-serif'],
    },
    extend: {
      colors: {
        'core': colors.gray,
        'brand': colors.blue
      },
			screens: {
				'xs': '320px'
			}
    },
  },
  plugins: [
    typography,
    scrollbar
  ],
};

module.exports = config;