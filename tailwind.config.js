/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      colors:{
        
      }
    },

    fontFamily: {
      light: ['Gilroy-Light', 'sans-serif'],
      bold: ['Gilroy-Bold', 'Times New Roman', 'serif'],
      semi: ['Gilroy-SemiBold', 'Times New Roman', 'serif'],
      regular: ['Gilroy-Regular', 'Times New Roman', 'serif']
    }
  },

  plugins: [
    require('tailwindcss-logical')
  ],
}
