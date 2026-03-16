<template>
  <div class="min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <SectionHeader
      :eyebrow="t('music.title')"
      :title="t('music.subtitle')"
      centered
    />

    <!-- Filter tabs -->
    <div class="mt-8 flex justify-center gap-2">
      <button
        v-for="filter in filters"
        :key="filter.value"
        :class="[
          'px-4 py-2 text-xs font-medium tracking-meta uppercase rounded-sm border transition-all duration-hover',
          activeFilter === filter.value
            ? 'border-qwer-crimson text-qwer-crimson bg-qwer-crimson/5'
            : 'border-white/10 text-qwer-gray hover:text-qwer-white hover:border-white/20',
        ]"
        @click="activeFilter = filter.value"
      >
        {{ t(filter.label) }}
      </button>
    </div>

    <!-- Release grid -->
    <div class="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      <ReleaseCard
        v-for="release in filteredReleases"
        :key="release.slug"
        :release="release"
      />
    </div>

    <p v-if="!filteredReleases.length" class="mt-16 text-center text-sm text-qwer-gray">
      {{ t('music.no_releases') }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useLanguage } from '@/composables/useLanguage'
import { useHead } from '@/composables/useHead'
import { releasesSorted } from '@/data/releases'
import SectionHeader from '@/components/shared/SectionHeader.vue'
import ReleaseCard from '@/components/sections/ReleaseCard.vue'
import type { ReleaseType } from '@/types'

const { t } = useLanguage()
useHead({ title: () => t('music.title'), description: 'QWER discography — albums, EPs, and singles.' })

const activeFilter = ref<'all' | ReleaseType>('all')

const filters = [
  { value: 'all' as const, label: 'music.filter_all' },
  { value: 'album' as const, label: 'music.filter_album' },
  { value: 'ep' as const, label: 'music.filter_ep' },
  { value: 'single' as const, label: 'music.filter_single' },
]

const filteredReleases = computed(() => {
  if (activeFilter.value === 'all') return releasesSorted
  return releasesSorted.filter(r => r.type === activeFilter.value)
})
</script>
