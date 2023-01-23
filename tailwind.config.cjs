/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s',
      },
      fontFamily: {
        gaegu: ['Gaegu', 'cursive'],
      },
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        '.center': {
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
        '.center-x': {
          left: '50%',
          transform: 'translateX(-50%)',
        },
      })
    },
  ],
  content: ['./src/**/*.{html,js,svelte,ts}'],
}
