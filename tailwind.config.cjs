const colors = require('tailwindcss/colors');
const typography = require("@tailwindcss/typography");
const scrollbar = require("tailwind-scrollbar");

const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        'core': colors.gray,
        'brand': colors.indigo
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