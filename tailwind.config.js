/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        // public: ['Public Sans', "sans-serif"],
        // inter: ['Inter', "sans-serif"],
        // nunito: ['Nunito Sans', "sans-serif"],     
        // Lato: ['Lato', "sans-serif"],


     
          sans: ["Figtree", ...defaultTheme.fontFamily.sans],
          Inter: ["Inter", "sans-serif"],
          Nunito: ["Nunito Sans", "sans-serif"],
          Lato: ["Lato", "sans-serif"],
          Roboto: ["Roboto", "sans-serif"],
          Poppins: ["Roboto", "sans-serif"],
          Public: ["Public Sans", "sans-serif"],
          DM:['DM Sans', 'sans-serif']
   



      }
    },
  },
  plugins: [],
}
