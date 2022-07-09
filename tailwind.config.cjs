const colors = require('tailwindcss/colors');
const typography = require("@tailwindcss/typography");
const scrollbar = require("tailwind-scrollbar");

const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "class",
  theme: {
    fontFamily: {
			display: ['Poppins', 'sans-serif'],
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        'core': colors.gray,
        'brand': colors.indigo
      },
			screens: {
				'xs': '320px'
			},
			gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
      }
    },
  },
  plugins: [
    typography,
    scrollbar
  ],
};

module.exports = config;