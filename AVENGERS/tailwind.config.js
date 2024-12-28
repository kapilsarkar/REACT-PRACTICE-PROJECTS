/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'media970px':'970px',
        'media425px':'425px',
      }
    },
  },
  plugins: [],
}

