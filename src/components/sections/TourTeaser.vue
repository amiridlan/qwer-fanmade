<template>
  <section class="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <SectionHeader
      :eyebrow="t('live.title')"
      :title="worldTourShows.length ? 'Rockation' : t('live.upcoming')"
      :subtitle="worldTourShows.length ? 'World Tour 2025' : undefined"
      centered
    />

    <!-- Upcoming shows list -->
    <div v-if="nextShows.length" class="mt-10 max-w-2xl mx-auto space-y-3">
      <RouterLink
        v-for="show in nextShows"
        :key="show.id"
        to="/live"
        class="group flex items-center gap-4 sm:gap-6 p-4 rounded-sm border border-white/5
               bg-qwer-stage/30 hover:border-qwer-crimson/40 transition-all duration-hover"
      >
        <!-- Date -->
        <div class="shrink-0 text-center w-14">
          <p class="font-display text-2xl tracking-heading text-qwer-crimson leading-none">
            {{ formatDay(show.date) }}
          </p>
          <p class="label-meta text-[9px] mt-0.5">
            {{ formatMonth(show.date) }}
          </p>
        </div>

        <!-- Divider -->
        <div class="w-px h-10 bg-white/10" />

        <!-- Info -->
        <div class="flex-1 min-w-0">
          <p class="text-sm text-qwer-white font-medium truncate">
            {{ show.venue }}
          </p>
          <p class="text-xs text-qwer-gray truncate">
            {{ localized(show.city) }}, {{ localized(show.country) }}
          </p>
        </div>

        <!-- Tour badge -->
        <QwBadge v-if="show.isWorldTour" variant="crimson">
          {{ show.tourName }}
        </QwBadge>

        <!-- Arrow -->
        <span class="text-qwer-gray/40 group-hover:text-qwer-crimson transition-colors duration-hover shrink-0">
          &rarr;
        </span>
      </RouterLink>
    </div>

    <p v-else class="mt-10 text-center text-sm text-qwer-gray">
      {{ t('live.no_upcoming') }}
    </p>

    <div class="mt-10 text-center">
      <QwButton variant="ghost" to="/live">
        {{ t('nav.live') }}
      </QwButton>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useLanguage } from '@/composables/useLanguage'
import { upcomingShows, worldTourShows } from '@/data/shows'
import SectionHeader from '@/components/shared/SectionHeader.vue'
import QwBadge from '@/components/shared/QwBadge.vue'
import QwButton from '@/components/shared/QwButton.vue'

const { t, localized } = useLanguage()

const nextShows = upcomingShows.slice(0, 4)

function formatDay(dateStr: string): string {
  return new Date(dateStr).getDate().toString()
}

function formatMonth(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en', { month: 'short' }).toUpperCase()
}
</script>
