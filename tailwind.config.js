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
        lightBlue:"rgb(2 132 199 / var(--tw-text-opacity))"
      },
      backgroundImage: {
        'hero-banner': "url('./src/assets/images/banner.png')",
        // 'gradiantBlue':"linear-gradient(90deg, rgba(219,239,255,1) 0%, rgba(220,229,255,1) 50%, rgba(163,184,255,1) 100%);"
        // 'gradiantBlue':"linear-gradient(to bottom, #ffffff, #dadcf1, #aebce3, #769ed6, #0284c7);"
        'gradiantBlue':"linear-gradient(180deg, #56a2cd 0%, #ffffff 100%);",
        

      }
    },
  },
  plugins: [],
}