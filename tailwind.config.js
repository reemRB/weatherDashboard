
module.exports = {
  // content: ["./src/**/*.{html,js}"],
  mode: 'jit',
  purge: {
    content: [    
      './src/**/*.{html,ts}',    
    ],
    safelist: []
  },
  theme: {
    extend: {

      colors:{
       
        sea:"#9BDBFF",
        navy:{
          1: "#102F7E",
          2: "#08153E"
        },
        violet:"#B5C7FF",
        sun:"#FE9255",
        
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
