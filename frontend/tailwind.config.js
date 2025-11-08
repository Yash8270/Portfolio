/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Fira Code"', 'monospace'], // replace 'inter' with Fira Code globally
      },
    },
  },
  plugins: [],
};


