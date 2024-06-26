/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dancing': ['"Dancing Script"', 'cursive'],
        'orbitron': ['"Orbitron"', 'sans-serif'],
      },
      colors: {
        customYellow: '#e5f33c',
      },
    },
  },
  plugins: [],
}

