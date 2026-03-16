<template>
  <section class="relative overflow-hidden rounded-sm border border-qwer-crimson/20 bg-qwer-stage/50">
    <!-- Crimson glow bg -->
    <div
      class="absolute inset-0 opacity-[0.08]"
      style="background: radial-gradient(ellipse at 30% 50%, #C1272D 0%, transparent 70%)"
    />
    <div class="absolute inset-0 noise-overlay pointer-events-none" />

    <div class="relative z-10 px-6 sm:px-10 py-10 sm:py-14 flex flex-col md:flex-row items-center gap-8">
      <!-- Text side -->
      <div class="flex-1 text-center md:text-left">
        <p class="label-meta text-qwer-crimson mb-2">{{ t('live.world_tour') }}</p>
        <h2 class="font-display text-5xl sm:text-6xl lg:text-7xl tracking-display text-qwer-white">
          ROCKATION
        </h2>
        <p class="mt-3 text-sm text-qwer-gray max-w-md">
          {{ localized(tourDescription) }}
        </p>
      </div>

      <!-- Cities list -->
      <div class="shrink-0 flex flex-wrap md:flex-col gap-3 justify-center">
        <div
          v-for="show in tourShows"
          :key="show.id"
          class="flex items-center gap-3 px-4 py-2 rounded-sm border border-white/5 bg-qwer-black/40"
        >
          <span class="font-display text-lg tracking-heading text-qwer-crimson leading-none w-8 text-right">
            {{ formatDay(show.date) }}
          </span>
          <span class="text-[9px] tracking-meta uppercase text-qwer-gray w-8">
            {{ formatMonth(show.date) }}
          </span>
          <span class="text-sm text-qwer-white">
            {{ localized(show.city) }}
          </span>
          <span class="text-xs text-qwer-gray/50 uppercase">
            {{ show.countryCode }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useLanguage } from '@/composables/useLanguage'
import { worldTourShows } from '@/data/shows'
import type { LocalizedString } from '@/types'

const { t, localized } = useLanguage()

const tourShows = worldTourShows
const tourDescription: LocalizedString = {
  en: 'QWER\'s first world tour. Five cities. One band. All the bawige.',
  ko: 'QWER의 첫 번째 월드 투어. 다섯 도시. 하나의 밴드. 모든 바위게.',
  ms: 'Jelajah dunia pertama QWER. Lima bandar. Satu kumpulan. Semua bawige.',
  ja: 'QWERの初ワールドツアー。5つの都市。1つのバンド。すべてのバウィゲ。',
}

function formatDay(dateStr: string): string {
  return new Date(dateStr).getDate().toString()
}

function formatMonth(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en', { month: 'short' }).toUpperCase()
}
</script>
