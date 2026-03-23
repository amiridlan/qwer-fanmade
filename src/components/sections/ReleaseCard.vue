<template>
  <RouterLink
    :to="`/music/${release.slug}`"
    class="inv-slot group relative block overflow-hidden transition-all duration-200"
    :style="{ '--rarity': rarityColor }"
  >
    <!-- Slot border glow on hover -->
    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none
                border border-[var(--rarity)] shadow-[inset_0_0_20px_-8px_var(--rarity),0_0_12px_-4px_var(--rarity)]" />

    <!-- Cover art -->
    <div class="aspect-square w-full relative overflow-hidden">
      <CoverImage
        v-if="release.coverImage"
        :src="thumbUrl!"
        :alt="localized(release.title)"
        img-class="group-hover:scale-105 transition-transform duration-300"
      />
      <div v-else class="w-full h-full bg-qwer-black/60 flex items-center justify-center">
        <span class="font-display text-4xl sm:text-5xl tracking-display text-qwer-crimson/20
                     group-hover:text-qwer-crimson/35 transition-colors duration-200">
          QWER
        </span>
      </div>

      <!-- Rarity stripe -->
      <div class="absolute top-0 left-0 right-0 h-[2px]" :style="{ background: rarityColor }" />
    </div>

    <!-- Info -->
    <div class="p-3 bg-qwer-black/40">
      <span
        class="inline-block text-[9px] tracking-meta uppercase px-1.5 py-0.5 mb-1.5 border"
        :style="{ color: rarityColor, borderColor: rarityColor + '40' }"
      >
        {{ release.type }}
      </span>
      <h3 class="font-display text-sm sm:text-base tracking-heading text-qwer-white
                 group-hover:text-[var(--rarity)] transition-colors duration-150 truncate">
        {{ localized(release.title) }}
      </h3>
      <div class="mt-1 flex items-center gap-2 text-[10px] text-qwer-gray/60 tracking-meta uppercase">
        <span>{{ releaseYear }}</span>
        <span class="text-qwer-gray/30">|</span>
        <span>{{ release.tracks.length }}T</span>
      </div>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useLanguage } from '@/composables/useLanguage'
import { coverUrl } from '@/data/releases'
import CoverImage from '@/components/shared/CoverImage.vue'
import type { Release } from '@/types'

const props = defineProps<{ release: Release }>()
const { localized } = useLanguage()

const thumbUrl = computed(() => coverUrl(props.release.coverImage, 300))
const releaseYear = computed(() => new Date(props.release.releaseDate).getFullYear())

const rarityColor = computed(() => {
  switch (props.release.type) {
    case 'album': return '#8B6DAE'       // rare — purple
    case 'ep': return '#3DAF68'          // uncommon — green
    case 'collaboration': return '#D4A54A' // legendary — gold
    case 'single': return '#8E8889'      // common — gray
    default: return '#8E8889'
  }
})
</script>

<style scoped>
.inv-slot {
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(13, 13, 13, 0.5);
}

.inv-slot:hover {
  background: rgba(13, 13, 13, 0.8);
}
</style>
