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
      }
    },
  },
  plugins: [],
}