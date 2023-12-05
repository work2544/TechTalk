/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Kanit':['Kanit','sans-serif'],
        'Mali':['Mali','sans-serif']
      },
      colors:{
        background:'#A8D1E7',
        Cookie:'#E6DFAF',
      }
    },
  },
  plugins: [],
}
