/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "navy-blue":"#2E4053",
        "earth-brown":"#964B00",
        "fresh-green":"#34C759",
        "vibe-orange":"#FFC107"

      }
    },
  },
  plugins: [],}