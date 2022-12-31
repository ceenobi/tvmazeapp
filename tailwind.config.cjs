/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
    enabled: process.env.NODE_ENV === 'production',
  },
  theme: {
    extend: {
      fontFamily: {
        graphik: ['Graphik', 'sans-serif'],
        arial: ['arial', 'Georgia'],
      },
      fontWeight: '400',
      body: {
        margin: '0',
        minHeight: '100vh',
        scrollPaddingTop: '5rem',
      },
      colors: {
        huluRed: '#733a5e',
        huluRedB: '#cc7873',
        huluDark: '#0b0912',
        huluDarkB: '#27161b',
      },
      minHeight: {
        container: 'calc(100vh - 10rem)',
      },
    },
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
}
