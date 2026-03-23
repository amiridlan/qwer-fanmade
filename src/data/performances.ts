import type { Performance } from '@/types'

export const performances: Performance[] = [
  {
    id: 'ferris-wheel-live',
    title: {
      en: "QWER - 'Ferris Wheel (대관람차)' | LIVE CLIP",
      ko: "QWER - '대관람차' | LIVE CLIP",
      ms: "QWER - 'Ferris Wheel (대관람차)' | LIVE CLIP",
      ja: "QWER - '大観覧車(대관람차)' | LIVE CLIP",
    },
    youtubeId: 't1uz-n3BFmQ',
    date: '2024-05-20',
  },
  {
    id: 'hold-back-tears-2000s',
    title: {
      en: '[2000s ver.] QWER - Hold Back Tears (눈물참기) (LIVE)',
      ko: '[2000s ver.] QWER - 눈물참기 (LIVE)',
      ms: '[2000s ver.] QWER - Hold Back Tears (눈물참기) (LIVE)',
      ja: '[2000s ver.] QWER - 涙こらえて(눈물참기) (LIVE)',
    },
    youtubeId: 'PcGEZYvHRaU',
    date: '2025-06-15',
  },
]

export const latestPerformance = performances[performances.length - 1]
