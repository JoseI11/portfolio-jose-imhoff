/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}', './node_modules/flowbite/**/*.js',
  'node_modules/flowbite-react/lib/esm/**/*.js'],
  
  theme: {
    extend: {
      colors:{
        'light-blue':'#E9F1FA',
        'bright-blue':'#00ABE4',
        'white':'#FFFFFF'
      }
    },
  },

  plugins: [import ('flowbite/plugin')],
}

