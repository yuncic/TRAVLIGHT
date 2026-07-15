/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eefcf6',
          100: '#d7f7e8',
          500: '#0ea5e9',
          600: '#0284c7',
        },
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        float: '0 10px 25px -5px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};
