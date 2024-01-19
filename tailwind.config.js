/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blackGreen' : '#112211',
        'mintGreen' : '#8DD3BB',
        'lightMint': '#d1f9ed',
        'slamon' : '#FF8682'
      },
      fontFamily: {
        'monts' : ['Montserrat', 'sans-serif'],

      }
    },
  },
  variants: {},
  plugins: [],
}