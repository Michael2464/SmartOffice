/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blackC': '#0B0C10', // dark
        'blackCL': '#13151C', // ligther dark
        'darkBlueC': '#282D40',
        'lightBlueC': '#3D77DB',
        'whiteC': '#C5C6C7',
        'lightSeaGreenC': '#66FCF1',
        'darkCyanC': '#45A29E',
      },
    },
  },
  plugins: [],


}

