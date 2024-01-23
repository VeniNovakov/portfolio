/** @type {import('tailwindcss').Config} */
module.exports = {
  content :[
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme :{
    extend: {
      colors: {
        milkbiege: '#ece3ce',
        'shale-green': '#739072',
        'gray-asparagus': '#3A4D39',
        'ashy-biege':'#dbd3bf',
        'biege':{
          50:'#f1eada',
          100:'#ece3ce',
          150: '#e2d5b6'
        }
      },
    },
  
  },
  plugins : [],
  safelist : [
    {
      pattern:
        /(bg|text|border|from)-(milk-biege|shale-green|gray-asparagus|ashy-biege)/,
    },
  ],
}