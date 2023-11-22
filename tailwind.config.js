/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'plus': "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo7EjaXIHrLFwOUgSWP48Xwnp6Cth3wouu6Dsm12z2ow&s')",
      },
      fontFamily: {
        Mono: 'Rubik Moonrocks'
      },
      screens: {
        fold: { 'min': '250px', 'max': '639px' },
        folld: { 'min': '440px', 'max': '639px' }
      }
    },
  },
  plugins: [],
}