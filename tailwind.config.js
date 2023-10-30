/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'baseWhite': '#FFFFFF',
        'baseBlack': '#000000',

        'lightColor': '#676F9D',
        'baseColor': '#424769',
        'darkColor': '#2D3250',
        'baseAccent': '#F9B17A',
        'darkAccent': '#F68631',
      },
    },
  },
  plugins: [],


}

