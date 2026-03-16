<template>
  <ol class="divide-y divide-white/5">
    <li
      v-for="track in tracks"
      :key="track.number"
      class="flex items-center gap-4 py-3 group"
    >
      <!-- Track number -->
      <span class="w-6 text-right font-mono text-xs text-qwer-gray/50 shrink-0">
        {{ String(track.number).padStart(2, '0') }}
      </span>

      <!-- Title -->
      <span class="flex-1 text-sm text-qwer-white truncate">
        {{ localized(track.title) }}
      </span>

      <!-- MV link -->
      <a
        v-if="track.musicVideoUrl"
        :href="track.musicVideoUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="shrink-0 text-[10px] tracking-meta uppercase text-qwer-crimson/60 hover:text-qwer-crimson transition-colors duration-hover"
      >
        MV
      </a>

      <!-- Duration -->
      <span class="shrink-0 font-mono text-xs text-qwer-gray/50 w-10 text-right">
        {{ track.duration }}
      </span>
    </li>
  </ol>
</template>

<script setup lang="ts">
import { useLanguage } from '@/composables/useLanguage'
import type { Track } from '@/types'

defineProps<{ tracks: Track[] }>()
const { localized } = useLanguage()
</script>
