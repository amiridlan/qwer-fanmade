<template>
  <section class="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <SectionHeader
      :eyebrow="t('music.title')"
      :title="localized(release.title)"
      :subtitle="releaseLabel"
    />

    <div ref="contentRef" class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <!-- Cover art placeholder -->
      <div class="aspect-square w-full max-w-md mx-auto md:mx-0 rounded-sm bg-qwer-stage border border-white/10 overflow-hidden flex items-center justify-center">
        <div class="text-center">
          <span class="font-display text-6xl tracking-display text-qwer-crimson/30">QWER</span>
          <p class="mt-2 label-meta">{{ localized(release.title) }}</p>
        </div>
      </div>

      <!-- Release info -->
      <div>
        <QwBadge variant="crimson">{{ release.type.toUpperCase() }}</QwBadge>

        <h3 class="mt-4 font-display text-3xl tracking-heading text-qwer-white">
          {{ localized(release.title) }}
        </h3>

        <p v-if="release.description" class="mt-3 text-sm text-qwer-gray leading-relaxed">
          {{ localized(release.description) }}
        </p>

        <!-- Tracklist preview (first 4) -->
        <ol class="mt-6 space-y-2">
          <li
            v-for="track in release.tracks.slice(0, 4)"
            :key="track.number"
            class="flex items-center gap-3 text-sm"
          >
            <span class="text-qwer-gray/50 font-mono text-xs w-5 text-right">
              {{ String(track.number).padStart(2, '0') }}
            </span>
            <span class="text-qwer-white">{{ localized(track.title) }}</span>
            <span class="ml-auto text-qwer-gray/50 text-xs font-mono">{{ track.duration }}</span>
          </li>
          <li v-if="release.tracks.length > 4" class="text-xs text-qwer-gray pl-8">
            +{{ release.tracks.length - 4 }} more
          </li>
        </ol>

        <div class="mt-8 flex gap-3">
          <QwButton :to="`/music/${release.slug}`" small>
            {{ t('music.view_release') }}
          </QwButton>
          <QwButton
            v-if="release.streaming.spotify"
            variant="ghost"
            :href="release.streaming.spotify"
            small
          >
            {{ t('music.listen') }}
          </QwButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useLanguage } from '@/composables/useLanguage'
import { useScrollReveal } from '@/composables/useScrollReveal'
import { getLatestRelease } from '@/data/releases'
import SectionHeader from '@/components/shared/SectionHeader.vue'
import QwBadge from '@/components/shared/QwBadge.vue'
import QwButton from '@/components/shared/QwButton.vue'

const { t, localized } = useLanguage()
const release = getLatestRelease()

const contentRef = ref<HTMLElement | null>(null)
useScrollReveal(contentRef, { stagger: 0.15, y: 30 })

const releaseLabel = computed(() => {
  const date = new Date(release.releaseDate)
  return `${release.type.toUpperCase()} · ${date.getFullYear()}`
})
</script>
