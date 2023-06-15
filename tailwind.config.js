/** @type {import('tailwindcss').Config} */
const twColors = require('tailwindcss/colors')
const colors = {
  transparent: twColors.transparent,
  black: "#2E3039",
  gray: "#CDCDCD",
  red: twColors.red,
  white: twColors.white,
  secondaryColor: "#161D25",
  themeColor: "#FF9902",
  bgColor: "#F2F2F5",
  coldBlue: "#268697",

}

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors,
    minWidth: {
      '360': '360px',
      '140': '140px',
      '1/4': '25%',
    },
    top: {
      '15': '3.75rem',
    },
    minHeight: {
      '100': '100px',
    },
    extend: {
      minHeight:{
        'screen-80': 'calc(100vh - 80px)',
      },
      height: {
        'aside': 'calc(100% - 80px)',
      },
      gridTemplateColumns: {
        'header': '1fr 3fr 1fr',
      },
      fontsize: {
        xs: '.82rem',
        sm: '.98rem',
        base: '1.15rem',
        lg: '1.25rem',
        xl: '1.40rem',
        '1.5xl': '1.55rem',
        '2xl': '1.75rem',
        '3xl': '2.25rem',
        '4xl': '2.75rem',
        '5xl': '3.25rem',
        '6xl': '3.75rem',
        '7xl': '4.25rem',
        '8xl': '4.75rem',
        '9xl': '5.25rem',

      },
      keyframes: {
        opacity: {
          from: { opacity: 0.2 },
          to: { opacity: 1 },
        },
        scaleIn: {
          "0%": { transform: 'scale(0.9)', opacity: 0 },
          "50%": { opacity: 0.3},
          "100%": { transform: 'scale(1)', opacity: 1 },
        }
      },
      animation: {
        opacity: 'opacity .5s ease-in-out',
        scaleIn: 'scaleIn .35s ease-in-out',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
