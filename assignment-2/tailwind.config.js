/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "orange": "#DC4A2D",
      "white": "#fff",
      "light-orange": "#FED3CA",
      "very-light-orange": "#FEF4F2",
      "dark-grey": "#3D3D3D",
      "light-grey": "#888888",
      "grey": "#D1D1D1",
      "very-light-grey": "#B0B0B0",
      "davys-grey": "#5D5D5D",
      "dove-grey": "#6E6D6D",
      "border": "#E7E7E7",
      "dark-green": "#067647",
      "green": "#17B26A",
      "very-light-green": "#ECFDF3",
      "border-green": "#ABEFC6"
    }
  },
  plugins: [],
}

