import type { Show } from '@/types'

export const shows: Show[] = [
  // ─── Rockation World Tour ───────────────────────────────────────────────────
  {
    id: 'rockation-seoul-2025',
    date: '2025-03-29',
    venue: 'Olympic Hall',
    city: { en: 'Seoul', ko: '서울', ms: 'Seoul', ja: 'ソウル' },
    country: { en: 'South Korea', ko: '대한민국', ms: 'Korea Selatan', ja: '韓国' },
    countryCode: 'KR',
    ticketUrl: 'https://ticket.interpark.com',
    status: 'upcoming',
    isWorldTour: true,
    tourName: 'Rockation',
  },
  {
    id: 'rockation-tokyo-2025',
    date: '2025-05-10',
    venue: 'Zepp Shinjuku',
    city: { en: 'Tokyo', ko: '도쿄', ms: 'Tokyo', ja: '東京' },
    country: { en: 'Japan', ko: '일본', ms: 'Jepun', ja: '日本' },
    countryCode: 'JP',
    ticketUrl: 'https://eplus.jp',
    status: 'upcoming',
    isWorldTour: true,
    tourName: 'Rockation',
  },
  {
    id: 'rockation-kl-2025',
    date: '2025-06-07',
    venue: 'Axiata Arena',
    city: { en: 'Kuala Lumpur', ko: '쿠알라룸푸르', ms: 'Kuala Lumpur', ja: 'クアラルンプール' },
    country: { en: 'Malaysia', ko: '말레이시아', ms: 'Malaysia', ja: 'マレーシア' },
    countryCode: 'MY',
    ticketUrl: 'https://tickethotline.com.my',
    status: 'upcoming',
    isWorldTour: true,
    tourName: 'Rockation',
  },
  {
    id: 'rockation-la-2025',
    date: '2025-07-19',
    venue: 'The Wiltern',
    city: { en: 'Los Angeles', ko: '로스앤젤레스', ms: 'Los Angeles', ja: 'ロサンゼルス' },
    country: { en: 'United States', ko: '미국', ms: 'Amerika Syarikat', ja: 'アメリカ合衆国' },
    countryCode: 'US',
    ticketUrl: 'https://www.axs.com',
    status: 'upcoming',
    isWorldTour: true,
    tourName: 'Rockation',
  },
  {
    id: 'rockation-london-2025',
    date: '2025-08-23',
    venue: 'O2 Forum Kentish Town',
    city: { en: 'London', ko: '런던', ms: 'London', ja: 'ロンドン' },
    country: { en: 'United Kingdom', ko: '영국', ms: 'United Kingdom', ja: 'イギリス' },
    countryCode: 'GB',
    ticketUrl: 'https://www.ticketweb.uk',
    status: 'upcoming',
    isWorldTour: true,
    tourName: 'Rockation',
  },

  // ─── Past Shows ──────────────────────────────────────────────────────────────
  {
    id: 'debut-showcase-2023',
    date: '2023-10-18',
    venue: 'Yes24 Live Hall',
    city: { en: 'Seoul', ko: '서울', ms: 'Seoul', ja: 'ソウル' },
    country: { en: 'South Korea', ko: '대한민국', ms: 'Korea Selatan', ja: '韓国' },
    countryCode: 'KR',
    status: 'past',
  },
  {
    id: 'year-one-concert-2024',
    date: '2024-10-18',
    venue: 'Jangchung Arena',
    city: { en: 'Seoul', ko: '서울', ms: 'Seoul', ja: 'ソウル' },
    country: { en: 'South Korea', ko: '대한민국', ms: 'Korea Selatan', ja: '韓국' },
    countryCode: 'KR',
    status: 'past',
  },
  {
    id: 'kcon-la-2024',
    date: '2024-08-16',
    venue: 'Crypto.com Arena',
    city: { en: 'Los Angeles', ko: '로스앤젤레스', ms: 'Los Angeles', ja: 'ロサンゼルス' },
    country: { en: 'United States', ko: '미국', ms: 'Amerika Syarikat', ja: 'アメリカ合衆国' },
    countryCode: 'US',
    status: 'past',
    isFestival: true,
    festivalName: 'KCON LA 2024',
  },
  {
    id: 'kcon-japan-2024',
    date: '2024-05-11',
    venue: 'Makuhari Messe',
    city: { en: 'Chiba', ko: '지바', ms: 'Chiba', ja: '千葉' },
    country: { en: 'Japan', ko: '일본', ms: 'Jepun', ja: '日本' },
    countryCode: 'JP',
    status: 'past',
    isFestival: true,
    festivalName: 'KCON Japan 2024',
  },
]

export const upcomingShows = shows.filter(s => s.status === 'upcoming')
  .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

export const pastShows = shows.filter(s => s.status === 'past')
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

export const worldTourShows = shows.filter(s => s.isWorldTour)
  .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

export const getNextShow = (): Show | undefined => upcomingShows[0]
