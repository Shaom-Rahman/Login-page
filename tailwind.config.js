/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center:'true', 
       padding: '40px',
    },
    fontFamily:{
      "Popins" : ["Poppins", "sans-serif"],
    }, 
    extend: {},
  },

  plugins: [],
}
