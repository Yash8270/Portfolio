/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        inter: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      colors: {
        dark: {
          bg: '#080b11',
          surface: '#0d131f',
          elevated: '#141b2c',
          border: 'rgba(255, 255, 255, 0.07)',
          'border-hover': 'rgba(96, 165, 250, 0.3)',
          subtle: '#94a3b8',
          muted: '#64748b',
        },
      },
      boxShadow: {
        bento: '0 4px 20px -2px rgba(0, 0, 0, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
        'bento-hover': '0 12px 32px -4px rgba(0, 0, 0, 0.6), inset 0 1px 0 0 rgba(255, 255, 255, 0.1), 0 0 20px -4px rgba(59, 130, 246, 0.15)',
        glow: '0 0 25px -5px rgba(59, 130, 246, 0.35)',
        'glow-subtle': '0 0 15px -3px rgba(59, 130, 246, 0.15)',
      },
      borderRadius: {
        bento: '1rem',
        'bento-lg': '1.25rem',
      },
    },
  },
  plugins: [],
};


