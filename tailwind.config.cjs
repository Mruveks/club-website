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
        'resident1': "url('/resident1.png')",
        'resident2': "url('/resident2.png')",
        'resident3': "url('/resident3.png')",
        'resident4': "url('/resident4.png')",
        'resident5': "url('/resident5.png')",
        'resident6': "url('/resident6.png')",
        'resident7': "url('/resident7.png')",
        'resident8': "url('/resident8.png')",
        'resident9': "url('/resident9.png')",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}