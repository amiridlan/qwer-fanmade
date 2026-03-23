<template>
  <div class="live-page min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
    <!-- Scanline overlay -->
    <div class="fixed inset-0 pointer-events-none z-30 scanlines" aria-hidden="true" />

    <!-- Stage lights -->
    <div class="fixed inset-0 pointer-events-none z-20" aria-hidden="true">
      <div class="stage-light stage-light--left" />
      <div class="stage-light stage-light--right" />
    </div>

    <div class="relative max-w-6xl mx-auto">
      <!-- HUD header -->
      <div class="stage-hud flex items-center justify-between px-4 sm:px-6 py-3 mb-8">
        <div class="hud-corner hud-corner--tl" />
        <div class="hud-corner hud-corner--tr" />
        <div class="hud-corner hud-corner--bl" />
        <div class="hud-corner hud-corner--br" />

        <div class="flex items-center gap-3">
          <span class="font-display text-2xl sm:text-3xl tracking-display text-qwer-crimson">
            LIVE STAGE
          </span>
          <span class="hidden sm:inline text-xs text-qwer-gray/60 tracking-meta uppercase">
            // {{ t('live.subtitle') }}
          </span>
        </div>
        <div class="flex items-center gap-2 text-xs tracking-meta uppercase">
          <span class="text-qwer-gray">CLIPS:</span>
          <span class="text-qwer-crimson font-display text-lg">{{ performances.length }}</span>
        </div>
      </div>

      <!-- Performance grid -->
      <div class="space-y-6">
        <div
          v-for="(perf, i) in performances"
          :key="perf.id"
          class="perf-card group"
        >
          <!-- Setlist number -->
          <div class="flex items-start gap-4 sm:gap-6">
            <div class="shrink-0 pt-2 hidden sm:block">
              <span class="font-display text-4xl tracking-display text-qwer-crimson/30">
                {{ String(i + 1).padStart(2, '0') }}
              </span>
            </div>

            <div class="flex-1 min-w-0">
              <!-- Video embed -->
              <div class="perf-embed relative aspect-video w-full overflow-hidden">
                <iframe
                  v-if="loadedVideos.has(perf.id)"
                  :src="`https://www.youtube.com/embed/${perf.youtubeId}?rel=0`"
                  :title="localized(perf.title)"
                  class="absolute inset-0 w-full h-full"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
                <!-- Thumbnail placeholder until clicked -->
                <button
                  v-else
                  class="absolute inset-0 w-full h-full cursor-pointer"
                  :aria-label="`Play ${localized(perf.title)}`"
                  @click="loadedVideos.add(perf.id)"
                >
                  <img
                    :src="`https://img.youtube.com/vi/${perf.youtubeId}/maxresdefault.jpg`"
                    :alt="localized(perf.title)"
                    class="w-full h-full object-cover transition-transform duration-300
                           group-hover:scale-[1.02]"
                  />
                  <div class="absolute inset-0 bg-qwer-black/30 group-hover:bg-qwer-black/10 transition-colors duration-200" />
                  <!-- Play button -->
                  <div class="absolute inset-0 flex items-center justify-center">
                    <div class="play-btn w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-qwer-crimson/90 backdrop-blur-sm
                                flex items-center justify-center transition-all duration-200
                                group-hover:scale-110 group-hover:bg-qwer-crimson">
                      <svg class="w-6 h-6 sm:w-8 sm:h-8 text-qwer-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </button>
              </div>

              <!-- Title bar -->
              <div class="perf-info flex items-center gap-3 px-4 py-3">
                <span class="sm:hidden font-display text-lg text-qwer-crimson/40">
                  {{ String(i + 1).padStart(2, '0') }}
                </span>
                <h3 class="font-display text-base sm:text-lg tracking-heading text-qwer-white truncate">
                  {{ localized(perf.title) }}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useLanguage } from '@/composables/useLanguage'
import { useHead } from '@/composables/useHead'
import { performances } from '@/data/performances'

const { t, localized } = useLanguage()
useHead({ title: () => t('live.title'), description: 'QWER official live performances.' })

const loadedVideos = reactive(new Set<string>())
</script>

<style scoped>
/* ── Stage lights ────────────────────────────────────────────────────────── */
.stage-light {
  position: absolute;
  inset: 0;
}

.stage-light--left {
  background: conic-gradient(
    from 220deg at 5% 105%,
    transparent 0deg,
    rgba(193, 39, 45, 0.5) 15deg,
    rgba(255, 100, 100, 0.2) 30deg,
    transparent 55deg
  );
}

.stage-light--right {
  background: conic-gradient(
    from 90deg at 95% 105%,
    transparent 305deg,
    rgba(255, 100, 100, 0.2) 330deg,
    rgba(193, 39, 45, 0.5) 345deg,
    transparent 360deg
  );
}

/* ── Scanlines ──────────────────────────────────────────────────────────── */
.scanlines {
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 0, 0, 0.03) 2px,
    rgba(0, 0, 0, 0.03) 4px
  );
}

/* ── HUD bar ────────────────────────────────────────────────────────────── */
.stage-hud {
  position: relative;
  border: 1px solid rgba(193, 39, 45, 0.3);
  background: rgba(13, 13, 13, 0.8);
  backdrop-filter: blur(8px);
}

.hud-corner {
  position: absolute;
  width: 12px;
  height: 12px;
  border-color: #C1272D;
  pointer-events: none;
}

.hud-corner--tl { top: -1px; left: -1px; border-left: 2px solid; border-top: 2px solid; }
.hud-corner--tr { top: -1px; right: -1px; border-right: 2px solid; border-top: 2px solid; }
.hud-corner--bl { bottom: -1px; left: -1px; border-left: 2px solid; border-bottom: 2px solid; }
.hud-corner--br { bottom: -1px; right: -1px; border-right: 2px solid; border-bottom: 2px solid; }

/* ── Performance card ───────────────────────────────────────────────────── */
.perf-card {
  transition: transform 0.2s ease;
}

.perf-embed {
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(13, 13, 13, 0.6);
}

.perf-card:hover .perf-embed {
  border-color: rgba(193, 39, 45, 0.3);
  box-shadow: 0 0 30px -10px rgba(193, 39, 45, 0.2);
}

.perf-info {
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-top: none;
  background: rgba(13, 13, 13, 0.4);
}

/* ── Play button pulse ──────────────────────────────────────────────────── */
.play-btn {
  box-shadow: 0 0 30px rgba(193, 39, 45, 0.3);
}

.group:hover .play-btn {
  box-shadow: 0 0 40px rgba(193, 39, 45, 0.5);
}
</style>
