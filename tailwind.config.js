/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "inter": ['inter'],
        "Circular": ['Circular STD'],
      },
      boxShadow: {
        "sm-shadow" : [
           '0px 0px 0px 0px rgba(0, 0, 0, 0.07)',
           '0px 34px 75px 0px rgba(0, 0, 0, 0.07)', 
           '0px 137px 137px 0px rgba(0, 0, 0, 0.06)', 
           '0px 308px 185px 0px rgba(0, 0, 0, 0.04)' ,
           '0px 548px 219px 0px rgba(0, 0, 0, 0.01)' ,
           '0px 856px 240px 0px rgba(0, 0, 0, 0.00)']
      }
    },
  },
  plugins: [],
}
