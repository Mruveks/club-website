/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'resident1': "url('src/assets/resident1.png')",
        'resident2': "url('src/assets/resident2.png')",
        'resident3': "url('src/assets/resident3.png')",
        'resident4': "url('src/assets/resident4.png')",
        'resident5': "url('src/assets/resident5.png')",
        'resident6': "url('src/assets/resident6.png')",
        'resident7': "url('src/assets/resident7.png')",
        'resident8': "url('src/assets/resident8.png')",
        'resident9': "url('src/assets/resident9.png')",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}