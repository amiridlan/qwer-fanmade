import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        qwer: {
          crimson: '#C1272D',
          black:   '#0D0D0D',
          white:   '#F4F0E8',
          gray:    '#8E8889',
          stage:   '#1A1826',
          // Accent
          pink:    '#D4637A',
          purple:  '#8B6DAE',
          amber:   '#D4A54A',
        },
        member: {
          chodan:  '#D8D8D8',
          magenta: '#E75C94',
          hina:    '#4A8FE7',
          siyeon:  '#3DAF68',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', '"Anton"', 'sans-serif'],
        body:    ['"Inter"', '"Pretendard"', 'sans-serif'],
        ko:      ['"Pretendard"', '"Noto Sans KR"', 'sans-serif'],
        ja:      ['"Noto Sans JP"', 'sans-serif'],
      },
      letterSpacing: {
        display: '0.2em',
        heading: '0.05em',
        sub:     '0.03em',
        meta:    '0.28em',
      },
      transitionTimingFunction: {
        'snap-out': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      transitionDuration: {
        hover: '150ms',
        page:  '200ms',
      },
      backgroundImage: {
        'noise': "url('/assets/noise.png')",
      },
    },
  },
  plugins: [],
} satisfies Config
