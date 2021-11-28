const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          light: '#0575E6',
          DEFAULT: '#0555BF',
          dark: '#021B79',
        },
      },
      fontFamily: {
        sans: ["'Poppins'", ...defaultTheme.fontFamily.sans],
      },
    },
    boxShadow: {
      DEFAULT: '4px 4px 30px rgba(0, 0, 0, 0.1)',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
