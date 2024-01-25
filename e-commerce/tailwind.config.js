
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'azul-escuro':'#1E3A8A',
        'laranja':'#EA580C',
        'cinza-escuro':'#78716C',
        'cinza-medio':'#666666'

      },
      fontFamily:{
        'sans':["Inter" ,...defaultTheme.fontFamily.sans]
      },
      screens:{
        
      }
    },
  },
  plugins: [],
}