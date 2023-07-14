/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/comps/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white-bg': '#f3f3f3',
      'blue-6': '#0E1423',
      'blue-5': '#1B2845',
      'blue-4': '#274060',
      'blue-3': '#335C81',
      'blue-2': '#4576B1',
      'blue-1': '#65AFFF',
      'yellow-6': '#DB9B20',
      'yellow-5': '#FDB833',
      'yellow-4': '#FDC43F',
      'yellow-3': '#FFD53E',
      'yellow-2': '#FFE246',
      'yellow-1': '#FFF75E',
      'white': '#ffffff',
      'red-1':'#ff0000',
      'black-rgba':'rgba(0,0,0,0.90)'
    },
  },
  plugins: [],
}
