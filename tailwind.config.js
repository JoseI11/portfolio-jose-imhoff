/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}', './node_modules/flowbite/**/*.js',
  'node_modules/flowbite-react/lib/esm/**/*.js'],
  
  theme: {
    extend: {
      fontFamily: {
        sans: ['Merriweather', 'serif'], // Reemplaza "Poppins" con tu fuente
      },
      colors: {
        'DarkOrange':'#F68A21',
        'Orange':'#FFBC0F',
        'NavyBlue':'#001F3F'
      }
    },
  },

  plugins: [import ('flowbite/plugin')],
}

