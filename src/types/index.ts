// ─── Locale ───────────────────────────────────────────────────────────────────
export type Locale = 'en' | 'ko' | 'ms' | 'ja'

export interface LocalizedString {
  en: string
  ko: string
  ms: string
  ja: string
}

// ─── Member ───────────────────────────────────────────────────────────────────
export type MemberSlug = 'chodan' | 'magenta' | 'hina' | 'siyeon'

export interface MemberSocials {
  instagram?: string
  tiktok?: string
  twitter?: string
  youtube?: string
}

export interface Member {
  slug: MemberSlug
  name: LocalizedString
  role: LocalizedString
  instruments: string[]
  color: string
  bio: LocalizedString
  funFacts: LocalizedString[]
  socials: MemberSocials
  image?: string
}

// ─── Releases ─────────────────────────────────────────────────────────────────
export type ReleaseType = 'album' | 'ep' | 'single' | 'collaboration'

export interface Track {
  number: number
  title: LocalizedString
  duration: string
  musicVideoUrl?: string
  previewUrl?: string
}

export interface StreamingLinks {
  spotify?: string
  appleMusic?: string
  youtubeMusic?: string
  melon?: string
  bugs?: string
  youtube?: string
}

export interface Release {
  slug: string
  title: LocalizedString
  type: ReleaseType
  releaseDate: string // ISO date string
  coverImage?: string
  tracks: Track[]
  streaming: StreamingLinks
  description?: LocalizedString
  credits?: LocalizedString
}

// ─── Shows ────────────────────────────────────────────────────────────────────
export type ShowStatus = 'upcoming' | 'past' | 'cancelled'

export interface Show {
  id: string
  date: string // ISO date string
  venue: string
  city: LocalizedString
  country: LocalizedString
  countryCode: string
  ticketUrl?: string
  status: ShowStatus
  isFestival?: boolean
  festivalName?: string
  isWorldTour?: boolean
  tourName?: string
}

// ─── Timeline ─────────────────────────────────────────────────────────────────
export interface TimelineItem {
  id: string
  date: string
  title: LocalizedString
  description: LocalizedString
  type: 'formation' | 'debut' | 'release' | 'concert' | 'milestone'
  image?: string
}

// ─── Awards ──────────────────────────────────────────────────────────────────
export type AwardCategory = 'music-show' | 'ceremony'

export interface Award {
  id: string
  date: string // ISO date string
  ceremony: LocalizedString
  award: LocalizedString
  song?: LocalizedString
  category: AwardCategory
  image?: string
}

// ─── Fandom ───────────────────────────────────────────────────────────────────
export interface FandomLink {
  label: LocalizedString
  url: string
  platform: string
}

export interface FandomData {
  name: LocalizedString
  description: LocalizedString
  facts: LocalizedString[]
  officialLinks: FandomLink[]
  communityLinks: FandomLink[]
}
