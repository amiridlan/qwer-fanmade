<template>
  <div class="flex flex-wrap gap-3">
    <a
      v-for="[platform, url] in entries"
      :key="platform"
      :href="url"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center gap-1.5 px-3 py-2 rounded-sm border border-white/10
             bg-qwer-stage/30 text-xs text-qwer-gray
             hover:border-qwer-crimson/40 hover:text-qwer-white
             transition-all duration-hover"
    >
      <span>{{ platformLabels[platform] ?? platform }}</span>
      <span class="text-[10px] opacity-50">&nearr;</span>
    </a>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { StreamingLinks } from '@/types'

const props = defineProps<{ links: StreamingLinks }>()

const platformLabels: Record<string, string> = {
  spotify: 'Spotify',
  appleMusic: 'Apple Music',
  youtubeMusic: 'YouTube Music',
  melon: 'Melon',
  bugs: 'Bugs',
  youtube: 'YouTube',
}

const entries = computed(() =>
  Object.entries(props.links).filter(([, url]) => url) as [string, string][]
)
</script>
