/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        public: ['Public Sans', "sans-serif"],
        inter: ['Inter', "sans-serif"],
        nunito: ['Nunito Sans', "sans-serif"],     
        Lato: ['Lato', "sans-serif"]

      }
    },
  },
  plugins: [],
}
