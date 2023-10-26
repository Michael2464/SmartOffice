/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blackC': '#0B0C10',
        'lightBlueC': '#1F2833',
        'whiteC': '#C5C6C7',
        'lightSeaGreenC': '#66FCF1',
        'darkCyanC': '#45A29E',
      },
    },
  },
  plugins: [],


}

