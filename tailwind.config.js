/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'mywhite': '#F9F9F9',
        'whi': '#FFFFFF',
        'bla': '#141416',
      },
      screens:{
        'max-mobile': {'max':'400px'},
        'min-mobile': {'min':'400px'}
      },
    },
  },
  plugins: [],
}