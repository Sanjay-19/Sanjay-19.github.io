/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'nblue': 'white',
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
