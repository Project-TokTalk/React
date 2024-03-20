const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js, jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      color:{
        'top-color':'#21366A',
        'chat_a':'#6981BD',
        'chat_b':'#D9D9D9',
        transparent: colors.transparent,
        white: colors.white,
        red: colors.red,
        blue: colors.blue,
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
  
}  
