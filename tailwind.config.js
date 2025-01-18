/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      animation: {
        typewriter: 'typewriter 4s steps(40) 1s 1 normal both, blink-caret 0.75s step-end infinite',
      },
      keyframes: {
        typewriter: {
          '0%': { width: '0' },    // Start with the text hidden
          '100%': { width: '100%' }, // Reveal the entire text
        },
        'blink-caret': {
          '0%, 50%': { borderRight: '4px solid #1D4ED8' },  // Blink cursor
          '100%': { borderRight: '4px solid #1D4ED8' }, // Keep the cursor visible after typing
        },
      },
    },
  },
  plugins: [],
}

