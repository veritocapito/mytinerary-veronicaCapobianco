/** @type {import('tailwindcss').Config} */
module.exports =  {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {},
  },
  darkMode: false,
  plugins: [require('daisyui')],
  daisyUI: {
    themes: ["light", "dark", "cupcake", "corporate"], // or just use 'light' to enable light mode
  },
}
