<template>
  <RouterLink
    :to="`/music/${release.slug}`"
    class="group block rounded-sm border border-white/10 bg-qwer-stage/30
           transition-all duration-200 ease-snap-out overflow-hidden
           hover:border-qwer-crimson/40 hover:shadow-[0_0_20px_-6px_rgba(193,39,45,0.25)]
           hover:scale-[1.02]"
  >
    <!-- Cover art -->
    <div class="aspect-square w-full bg-qwer-black/60 flex items-center justify-center relative overflow-hidden">
      <img
        v-if="release.coverImage"
        :src="thumbUrl"
        :alt="localized(release.title)"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />
      <div v-else class="text-center">
        <span class="font-display text-4xl sm:text-5xl tracking-display text-qwer-crimson/20
                     group-hover:text-qwer-crimson/35 transition-colors duration-200">
          QWER
        </span>
      </div>
    </div>

    <!-- Info -->
    <div class="p-4">
      <QwBadge variant="crimson" class="mb-2">{{ release.type }}</QwBadge>
      <h3 class="font-display text-lg tracking-heading text-qwer-white group-hover:text-qwer-crimson
                 transition-colors duration-hover truncate">
        {{ localized(release.title) }}
      </h3>
      <div class="mt-1 flex items-center gap-2 text-xs text-qwer-gray">
        <span>{{ releaseYear }}</span>
        <span class="w-1 h-1 rounded-full bg-qwer-gray/40" />
        <span>{{ release.tracks.length }} {{ release.tracks.length === 1 ? 'track' : 'tracks' }}</span>
      </div>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useLanguage } from '@/composables/useLanguage'
import { coverUrl } from '@/data/releases'
import QwBadge from '@/components/shared/QwBadge.vue'
import type { Release } from '@/types'

const props = defineProps<{ release: Release }>()
const { localized } = useLanguage()

const thumbUrl = computed(() => coverUrl(props.release.coverImage, 300))
const releaseYear = computed(() => new Date(props.release.releaseDate).getFullYear())
</script>
