/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     
      fontFamily: {
        sans: ['Montserrat',...defaultTheme.fontFamily.sans],
        font:['Baloo Bhai 2','Baloo Bhai 2']
       
      },
    },
  },
  plugins: [],
}
