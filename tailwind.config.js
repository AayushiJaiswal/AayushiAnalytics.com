/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0f172a',
        'accent-cyan': '#22d3ee',
        'accent-blue': '#38bdf8'
      },
      fontFamily: {
        sans: ['system-ui', 'ui-sans-serif', 'Inter', 'SF Pro Text', 'sans-serif']
      },
      boxShadow: {
        glass: '0 20px 45px rgba(15,23,42,0.85)',
        'inner-glass': 'inset 0 1px 0 rgba(255,255,255,0.04)'
      },
      backdropBlur: {
        xs: '2px'
      }
    }
  },
  plugins: []
};

