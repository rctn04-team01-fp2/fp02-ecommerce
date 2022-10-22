/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
    screens: {
      xs: '375px', //mobile small
      sm: '425px', //mobile large
      md: '768px', //tablet
      lg: '992px', //notebook
      xl: '1200px', //pc
    },
  },
  plugins: [],
};
