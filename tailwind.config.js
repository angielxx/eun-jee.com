/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      // greyscale
      bg: 'rgb(var(--color-bg) / <alpha-value>)',
      grey10: 'rgb(var(--color-grey10) / <alpha-value>)',
      grey30: 'rgb(var(--color-grey30) / <alpha-value>)',
      grey50: 'rgb(var(--color-grey50) / <alpha-value>)',
      grey70: 'rgb(var(--color-grey70) / <alpha-value>)',
      grey90: 'rgb(var(--color-grey90) / <alpha-value>)',
      // text
      text: 'rgb(var(--color-text) / <alpha-value>)',
      subtext: 'rgb(var(--color-subtext) / <alpha-value>)',
      // primary color
      p100: 'rgb(var(--color-p100) / <alpha-value>)',
      p200: 'rgb(var(--color-p200) / <alpha-value>)',
      p300: 'rgb(var(--color-p300) / <alpha-value>)',
      p400: 'rgb(var(--color-p400) / <alpha-value>)',
      p500: 'rgb(var(--color-p500) / <alpha-value>)',
      p600: 'rgb(var(--color-p600) / <alpha-value>)',
      p700: 'rgb(var(--color-p700) / <alpha-value>)',
      p800: 'rgb(var(--color-p800) / <alpha-value>)',
      p900: 'rgb(var(--color-p900) / <alpha-value>)',
    },
    spacing: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px',
      11: '44px',
      12: '48px',
      13: '52px',
      15: '60px',
    },
    fontFamily: {
      sans: ['var(--font-pretendard)', 'Arial', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
