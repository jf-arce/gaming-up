/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlack:'#181A1B',
        lightBlack:'#202324',
        // lightBlue:"rgb(2 132 199 / var(--tw-text-opacity))"
        lightBlue:"#4f46e5",
        secondViolet:'#6366f1'
        
      },
      backgroundImage: {
        'hero-banner': "url('./src/assets/images/banner.png')",
        'gradiantBlue':"linear-gradient(180deg, #56a2cd 0%, #ffffff 100%);",
      }
    },
  },
  plugins: [],
}