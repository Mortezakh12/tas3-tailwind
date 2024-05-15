/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        'sans': ['Yekan'],
      }, colors: {
        "text--primary": {
          800: "#3F4264",
          900: "#2A2D53"
        },
        "text--secondary": {
          900: "#4A6DFF",
        },
        "text--price": {
          100: "#363853"
        },
        "bg-border":{
          100:"#DFDFE5",
        },
      }
    },
  },
  plugins: [],
}