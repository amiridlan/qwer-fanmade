<template>
  <div class="inv-page min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
    <!-- Scanline overlay -->
    <div class="fixed inset-0 pointer-events-none z-30 scanlines" aria-hidden="true" />

    <div class="relative max-w-7xl mx-auto">
      <!-- HUD top bar -->
      <div class="inv-hud flex items-center justify-between px-4 sm:px-6 py-3 mb-6">
        <!-- Corner accents -->
        <div class="inv-corner inv-corner--tl" />
        <div class="inv-corner inv-corner--tr" />
        <div class="inv-corner inv-corner--bl" />
        <div class="inv-corner inv-corner--br" />

        <div class="flex items-center gap-3">
          <span class="font-display text-2xl sm:text-3xl tracking-display text-qwer-crimson">
            INVENTORY
          </span>
          <span class="hidden sm:inline text-xs text-qwer-gray/60 tracking-meta uppercase">
            // {{ t('music.title') }}
          </span>
        </div>
        <div class="flex items-center gap-2 text-xs tracking-meta uppercase">
          <span class="text-qwer-gray">ITEMS:</span>
          <span class="text-qwer-crimson font-display text-lg">{{ filteredReleases.length }}</span>
        </div>
      </div>

      <div class="flex flex-col md:flex-row gap-4 sm:gap-6">
        <!-- Left sidebar — category tabs -->
        <aside class="md:w-48 shrink-0">
          <div class="inv-panel p-2 flex md:flex-col gap-1 overflow-x-auto md:overflow-x-visible">
            <button
              v-for="filter in filters"
              :key="filter.value"
              :class="[
                'inv-tab flex items-center justify-between gap-2 px-3 py-2.5 text-xs font-medium tracking-meta uppercase whitespace-nowrap transition-all duration-150',
                activeFilter === filter.value
                  ? 'inv-tab--active'
                  : 'text-qwer-gray hover:text-qwer-white hover:bg-white/[0.03]',
              ]"
              @click="activeFilter = filter.value"
            >
              <span>{{ t(filter.label) }}</span>
              <span
                :class="[
                  'text-[10px] px-1.5 py-0.5 rounded-sm',
                  activeFilter === filter.value
                    ? 'bg-qwer-crimson/20 text-qwer-crimson'
                    : 'bg-white/5 text-qwer-gray/60',
                ]"
              >
                {{ filterCount(filter.value) }}
              </span>
            </button>
          </div>
        </aside>

        <!-- Main inventory grid -->
        <main class="flex-1 min-w-0">
          <div class="inv-panel p-3 sm:p-4">
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
              <ReleaseCard
                v-for="release in filteredReleases"
                :key="release.slug"
                :release="release"
              />
            </div>

            <p v-if="!filteredReleases.length" class="py-16 text-center text-sm text-qwer-gray/40 tracking-meta uppercase">
              [ {{ t('music.no_releases') }} ]
            </p>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useLanguage } from '@/composables/useLanguage'
import { useHead } from '@/composables/useHead'
import { releasesSorted } from '@/data/releases'
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
  { value: 'collaboration' as const, label: 'music.filter_collaboration' },
]

function filterCount(value: 'all' | ReleaseType): number {
  if (value === 'all') return releasesSorted.length
  return releasesSorted.filter(r => r.type === value).length
}

const filteredReleases = computed(() => {
  if (activeFilter.value === 'all') return releasesSorted
  return releasesSorted.filter(r => r.type === activeFilter.value)
})
</script>

<style scoped>
/* ── Page background grid ───────────────────────────────────────────────── */
.inv-page {
  background:
    linear-gradient(rgba(193, 39, 45, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(193, 39, 45, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
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
.inv-hud {
  position: relative;
  border: 1px solid rgba(193, 39, 45, 0.3);
  background: rgba(13, 13, 13, 0.8);
  backdrop-filter: blur(8px);
}

/* ── Corner accents ─────────────────────────────────────────────────────── */
.inv-corner {
  position: absolute;
  width: 12px;
  height: 12px;
  border-color: #C1272D;
  pointer-events: none;
}

.inv-corner--tl { top: -1px; left: -1px; border-left: 2px solid; border-top: 2px solid; }
.inv-corner--tr { top: -1px; right: -1px; border-right: 2px solid; border-top: 2px solid; }
.inv-corner--bl { bottom: -1px; left: -1px; border-left: 2px solid; border-bottom: 2px solid; }
.inv-corner--br { bottom: -1px; right: -1px; border-right: 2px solid; border-bottom: 2px solid; }

/* ── Panels ─────────────────────────────────────────────────────────────── */
.inv-panel {
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(13, 13, 13, 0.6);
  backdrop-filter: blur(4px);
}

/* ── Category tabs ──────────────────────────────────────────────────────── */
.inv-tab {
  border-left: 2px solid transparent;
}

.inv-tab--active {
  color: #C1272D;
  background: rgba(193, 39, 45, 0.06);
  border-left-color: #C1272D;
}
</style>
