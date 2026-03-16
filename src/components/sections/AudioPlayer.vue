<template>
  <Transition
    enter-active-class="transition-all duration-300 ease-snap-out"
    leave-active-class="transition-all duration-200"
    enter-from-class="translate-y-full opacity-0"
    leave-to-class="translate-y-full opacity-0"
  >
    <div
      v-if="currentTrack"
      class="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-qwer-black/95 backdrop-blur-md"
    >
      <!-- Progress bar (clickable) -->
      <div
        class="absolute top-0 left-0 right-0 h-[2px] cursor-pointer group"
        @click="onProgressClick"
      >
        <div class="absolute inset-0 bg-white/5" />
        <div
          class="absolute top-0 left-0 h-full bg-qwer-crimson transition-[width] duration-100"
          :style="{ width: `${progressPercent}%` }"
        />
        <!-- Hover knob -->
        <div
          class="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-qwer-crimson
                 opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none"
          :style="{ left: `${progressPercent}%`, transform: `translateX(-50%) translateY(-50%)` }"
        />
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-4">
        <!-- Play/Pause -->
        <button
          class="shrink-0 w-10 h-10 rounded-full border border-qwer-crimson/40 bg-qwer-crimson/10
                 flex items-center justify-center text-qwer-crimson
                 hover:bg-qwer-crimson/20 transition-colors duration-hover"
          aria-label="Play/Pause"
          @click="togglePlayPause"
        >
          <!-- Play icon -->
          <svg v-if="!isPlaying" class="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
          <!-- Pause icon -->
          <svg v-else class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        </button>

        <!-- Track info -->
        <div class="flex-1 min-w-0">
          <p class="text-sm text-qwer-white truncate">{{ currentTrack.title }}</p>
          <p class="text-[10px] text-qwer-gray font-mono">
            {{ formattedProgress }} / {{ formattedDuration }}
          </p>
        </div>

        <!-- Waveform -->
        <div class="hidden sm:block w-32">
          <WaveformVisualizer :active="isPlaying" :bar-count="16" />
        </div>

        <!-- Volume -->
        <div class="hidden sm:flex items-center gap-2">
          <button
            class="text-qwer-gray hover:text-qwer-white transition-colors duration-hover"
            aria-label="Toggle mute"
            @click="setVolume(volume > 0 ? 0 : 0.8)"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path v-if="volume > 0" d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
              <path v-else d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
            </svg>
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            :value="volume"
            class="w-16 h-1 accent-qwer-crimson cursor-pointer"
            @input="setVolume(Number(($event.target as HTMLInputElement).value))"
          />
        </div>

        <!-- Close -->
        <button
          class="shrink-0 text-qwer-gray hover:text-qwer-white transition-colors duration-hover"
          aria-label="Close player"
          @click="stop"
        >
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useAudioPlayer } from '@/composables/useAudioPlayer'
import WaveformVisualizer from '@/components/sections/WaveformVisualizer.vue'

const {
  currentTrack,
  isPlaying,
  progressPercent,
  formattedProgress,
  formattedDuration,
  duration,
  volume,
  togglePlayPause,
  stop,
  seek,
  setVolume,
} = useAudioPlayer()

function onProgressClick(e: MouseEvent) {
  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
  const percent = (e.clientX - rect.left) / rect.width
  seek(percent * duration.value)
}
</script>
