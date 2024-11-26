/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      animationDelay: {
      1000: '1s',
      2000: '2s',
      3000: '3s',
    },
    keyframes: {
      load: {
        '0%': { opacity: '0' },
        '10%': { opacity: '1' },
        '90%': { opacity: '1' },
        '100%': { opacity: '0' },
      },
      animation: {
        load: 'load 1s linear',
      },
    },
  },
  plugins: [function ({ addUtilities }) {
    addUtilities({
      '.delay-1000': {
        animationDelay: '1s',
      },
      '.delay-2000': {
        animationDelay: '2s',
      },
      '.delay-3000': {
        animationDelay: '3s',
      },
      '.bg-clip-text': {
          '-webkit-background-clip': 'text'
        },
    });
  },],
}
}
