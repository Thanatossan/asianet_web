module.exports = {
  variants: {
    extend: {
        // ...
       borderStyle: ['hover'],
    }
},
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'susm': '300px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    
    extend: {
      colors:{
        mainColor: '#5DC7C7',
        secondColor: '#5A7575'
      },
    },
  },
  plugins: [],
}