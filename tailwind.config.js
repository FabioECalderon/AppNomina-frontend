/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          alt: 'var(---color-text-alt',
        },
      },
      backgroundColor: {
        skin: {
          fill: 'var(--color-fill)',
          'fill-alt': 'var(--color-fill-alt)',
          accent: 'var(--color-accent)',
          'accent-hover': 'var(--color-accent-hover)',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
