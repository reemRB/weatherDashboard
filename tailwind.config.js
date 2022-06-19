
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
        primary:"#08153E",
        
        sea:"#9BDBFF",
        navy: "#102F7E",
        violet:"#B5C7FF",
        sun:"#FE9255",
        danger: "#D50000",
        white: '#fff'
        
      }
    },

    fontFamily: {
      regular: ['Poppins-Regular', 'Times New Roman', 'serif'],
      semi: ['Poppins-SemiBold', 'Times New Roman', 'serif']
    }
  },

  plugins: [
    require('tailwindcss-logical')
  ],
}
