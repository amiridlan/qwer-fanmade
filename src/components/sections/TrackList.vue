<template>
  <ol class="divide-y divide-white/5">
    <li
      v-for="track in tracks"
      :key="track.number"
      :class="[
        'flex items-center gap-4 py-3 group',
        track.previewUrl ? 'cursor-pointer hover:bg-white/[0.02] -mx-2 px-2 rounded-sm transition-colors duration-hover' : '',
      ]"
      @click="track.previewUrl && playTrack(track)"
    >
      <!-- Track number / play indicator -->
      <span class="w-6 text-right font-mono text-xs shrink-0">
        <span
          v-if="currentTrack?.id === trackId(track) && isPlaying"
          class="text-qwer-crimson"
        >&#9654;</span>
        <span v-else class="text-qwer-gray/50">
          {{ String(track.number).padStart(2, '0') }}
        </span>
      </span>

      <!-- Title -->
      <span
        :class="[
          'flex-1 text-sm truncate',
          currentTrack?.id === trackId(track) ? 'text-qwer-crimson' : 'text-qwer-white',
        ]"
      >
        {{ localized(track.title) }}
      </span>

      <!-- Preview badge -->
      <span
        v-if="track.previewUrl"
        class="shrink-0 text-[10px] tracking-meta uppercase text-qwer-gray/40 group-hover:text-qwer-crimson/60 transition-colors duration-hover"
      >
        Preview
      </span>

      <!-- MV link -->
      <a
        v-if="track.musicVideoUrl"
        :href="track.musicVideoUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="shrink-0 text-[10px] tracking-meta uppercase text-qwer-crimson/60 hover:text-qwer-crimson transition-colors duration-hover"
        @click.stop
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
import { useAudioPlayer } from '@/composables/useAudioPlayer'
import type { Track } from '@/types'

interface PlayableTrack extends Track {
  previewUrl?: string
}

defineProps<{ tracks: PlayableTrack[] }>()
const { localized } = useLanguage()
const { play, currentTrack, isPlaying } = useAudioPlayer()

function trackId(track: PlayableTrack): string {
  return `track-${track.number}-${track.title.en}`
}

function playTrack(track: PlayableTrack) {
  if (!track.previewUrl) return
  play({
    id: trackId(track),
    title: localized(track.title),
    src: track.previewUrl,
  })
}
</script>
