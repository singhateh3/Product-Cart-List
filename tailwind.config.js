/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust this based on your folder structure
  ],
  theme: {
    extend: {
      colors: {
        customOrange: "#C73B0F",
      },
    },
  },
  plugins: [],
};
