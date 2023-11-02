/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4/3',
      },
      colors: {
        'baseWhite': '#FFFFFF',
        'baseBlack': '#000000',

        'lightColor': '#676F9D', // light blue
        'baseColor': '#424769',  // a bit darker blue
        'darkColor': '#2D3250',  // dark blue
        'baseAccent': '#F9B17A', // light orange
        'darkAccent': '#F68631', // dark orange
      },
    },
  },
  plugins: [],


}

