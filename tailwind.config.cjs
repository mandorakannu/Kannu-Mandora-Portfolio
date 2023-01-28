/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "navy-100": "#2C74B3",
        "navy-200": "#205295",
        "navy-300": "#144272",
        "navy-400": "#0A2647",
        "navy-500": "#6B728E",
        "navy-600": "#50577A",
        "navy-700": "#474E68",
        "navy-800": "#404258",
        "navy-900": "#6B728E",
      },
      fontFamily: {
        "outfit": "Outfit",
        "DMSans": "DM Sans",
        "firaCode": "Fira Code"
      }
    },
  },
  plugins: [],
}