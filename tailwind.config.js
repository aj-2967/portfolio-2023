/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities}) {
  addUtilities({
    ".my-rotate-y-180": { transform: "rotateY(-180deg)" },
    ".preserve-3d": { transformStyle: "preserve-3d" },
    ".perspective": { perpective: "1000px" },
    ".backface-hidden": { backfaceVisibility: "hidden" },
  })
})

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          'main':'#3BB7A8',
      },
      animation: {
        cursor: 'cursor .6s linear infinite alternate',
        type: 'type 1.8s ease-out .8s 1 normal both',
        'type-reverse': 'type 1.8s ease-out 0s infinite alternate-reverse both',  
        'pulse-scale': 'scale 1s ease-in 0s forwards',  
      },
      keyframes: {
        type: {
          '0%': { width: '0ch' },
          '5%, 10%': { width: '0ch' },
          '15%, 20%': { width: '1ch' },
          '25%, 30%': { width: '2ch' },
          '35%, 40%': { width: '3ch' },
          '45%, 50%': { width: '4ch' },
          '55%, 60%': { width: '5ch' },
          '65%, 70%': { width: '6ch' },
          '75%, 80%': { width: '7ch' },
          '85%, 90%': { width: '8ch' },
          '95%, 100%': { width: '9ch' },
        },
        'scale': {
          0: {transform: 'scaleX(1)'},
          50: {transform: 'scaleX(1.1)'},
          100: {transform: 'scaleX(1)'},
        },
      },
    },
  },
  plugins: [Myclass],
}
