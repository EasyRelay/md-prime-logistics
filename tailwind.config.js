/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'teal': {
          600: '#3A6F82',
          700: '#2d5a6b',
        },
        'cyan': {
          400: '#76C9D3',
          500: '#76C9D3',
          600: '#5fb8c4',
        },
        'slate': {
          800: '#264A56',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
