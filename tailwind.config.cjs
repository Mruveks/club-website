/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/*.{svg, png}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'resident1': "url('/public/resident1.png')",
        'resident2': "url('/public/resident2.png')",
        'resident3': "url('/public/resident3.png')",
        'resident4': "url('/public/resident4.png')",
        'resident5': "url('/public/resident5.png')",
        'resident6': "url('/public/resident6.png')",
        'resident7': "url('/public/resident7.png')",
        'resident8': "url('/public/resident8.png')",
        'resident9': "url('/public/resident9.png')",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}