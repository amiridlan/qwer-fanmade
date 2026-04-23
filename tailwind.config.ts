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
          crimson: '#FF5F6D',
          black:   '#090F14',
          white:   '#FDFAF0',
          gray:    '#859099',
          stage:   '#0D1B22',
          // Accent
          pink:    '#FF8FA3',
          purple:  '#7E4FCB',
          amber:   '#FFB347',
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
