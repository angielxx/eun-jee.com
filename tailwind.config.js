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
      bg: 'var(--color-bg)',
      grey10: 'var(--color-grey10)',
      grey30: 'var(--color-grey30)',
      grey50: 'var(--color-grey50)',
      grey70: 'var(--color-grey70)',
      grey90: 'var(--color-grey90)',
      // text
      text: 'var(--color-text)',
      subtext: 'var(--color-subtext)',
      // primary color
      p100: 'var(--color-p100)',
      p200: 'var(--color-p200)',
      p300: 'var(--color-p300)',
      p400: 'var(--color-p400)',
      p500: 'var(--color-p500)',
      p600: 'var(--color-p600)',
      p700: 'var(--color-p700)',
      p800: 'var(--color-p800)',
      p900: 'var(--color-p900)',
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
