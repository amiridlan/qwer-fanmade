<template>
  <div
    :class="[
      'flex items-center gap-4 sm:gap-6 p-4 sm:p-5 rounded-sm border transition-all duration-hover',
      show.status === 'upcoming'
        ? 'border-white/10 bg-qwer-stage/30 hover:border-qwer-crimson/40'
        : 'border-white/5 bg-qwer-black/30 opacity-60',
    ]"
  >
    <!-- Date column -->
    <div class="shrink-0 text-center w-16">
      <p
        :class="[
          'font-display text-2xl tracking-heading leading-none',
          show.status === 'upcoming' ? 'text-qwer-crimson' : 'text-qwer-gray',
        ]"
      >
        {{ formatDay(show.date) }}
      </p>
      <p class="label-meta text-[9px] mt-0.5">{{ formatMonthYear(show.date) }}</p>
    </div>

    <!-- Divider -->
    <div class="w-px h-12 bg-white/10 shrink-0" />

    <!-- Info -->
    <div class="flex-1 min-w-0">
      <p class="text-sm text-qwer-white font-medium truncate">
        {{ show.venue }}
      </p>
      <p class="text-xs text-qwer-gray truncate">
        {{ localized(show.city) }}, {{ localized(show.country) }}
      </p>
      <div class="mt-1.5 flex flex-wrap gap-2">
        <QwBadge v-if="show.isFestival" variant="default">{{ show.festivalName }}</QwBadge>
        <QwBadge v-if="show.isWorldTour" variant="crimson">{{ show.tourName }}</QwBadge>
      </div>
    </div>

    <!-- Ticket CTA / Status -->
    <div class="shrink-0">
      <QwButton
        v-if="show.status === 'upcoming' && show.ticketUrl"
        :href="show.ticketUrl"
        small
      >
        {{ t('live.tickets') }}
      </QwButton>
      <span
        v-else-if="show.status === 'cancelled'"
        class="text-xs text-qwer-gray/50 tracking-meta uppercase"
      >
        {{ t('live.cancelled') }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLanguage } from '@/composables/useLanguage'
import QwBadge from '@/components/shared/QwBadge.vue'
import QwButton from '@/components/shared/QwButton.vue'
import type { Show } from '@/types'

defineProps<{ show: Show }>()
const { t, localized } = useLanguage()

function formatDay(dateStr: string): string {
  return new Date(dateStr).getDate().toString()
}

function formatMonthYear(dateStr: string): string {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en', { month: 'short', year: '2-digit' }).toUpperCase()
}
</script>
