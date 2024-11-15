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
      },
      screens:{
        'max-mobile': {'max':'375px'},
        'min-mobile': {'min':'375px'}
      },
    },
  },
  plugins: [],
}