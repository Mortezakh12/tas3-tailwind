/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        'sans': ['Vazirmatn FD'],
      }, colors: {
        "text--primary": {
          800: "#3F4264",
          900: "#2A2D53"
        },
        "text--secondary": {
          700: "#555775",
          800: "#363853",
          900: "#4A6DFF",
        },
        "text--price": {
          "blue": "#4A6DFF",
          "red": "#FF0000",
        },
        "bg-border": {
          100: "#DFDFE5",
        },
      }
    },
  },
  plugins: [],
}