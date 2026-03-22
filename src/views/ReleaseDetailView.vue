<template>
  <div class="min-h-screen overflow-hidden">
    <Transition :name="slideDirection" mode="out-in" @after-enter="onSlideComplete">
      <div v-if="release" :key="slug" class="min-h-screen">
        <!-- Hero -->
        <section class="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <!-- Crimson tint -->
          <div
            class="absolute inset-0 opacity-[0.05]"
            style="background: radial-gradient(ellipse at 50% 0%, #C1272D 0%, transparent 70%)"
          />
          <div class="absolute inset-0 noise-overlay pointer-events-none" />

          <div class="relative z-10 max-w-4xl mx-auto">
            <!-- Back -->
            <RouterLink
              to="/music"
              class="inline-flex items-center gap-2 text-sm text-qwer-gray hover:text-qwer-white transition-colors duration-hover mb-8"
            >
              <span>&larr;</span>
              <span>{{ t('music.title') }}</span>
            </RouterLink>

            <div class="flex flex-col md:flex-row gap-10 items-start">
              <!-- Cover art -->
              <div class="shrink-0 w-56 sm:w-64 md:w-72 aspect-square rounded-sm border border-white/10 overflow-hidden">
                <CoverImage
                  v-if="release.coverImage"
                  :src="release.coverImage"
                  :alt="localized(release.title)"
                  eager
                />
                <div v-else class="w-full h-full bg-qwer-black/60 flex items-center justify-center">
                  <div class="text-center">
                    <span class="font-display text-5xl tracking-display text-qwer-crimson/25">QWER</span>
                    <p class="mt-1 label-meta">{{ localized(release.title) }}</p>
                  </div>
                </div>
              </div>

              <!-- Release info -->
              <div class="flex-1 min-w-0">
                <QwBadge variant="crimson">{{ release.type }}</QwBadge>

                <h1 class="mt-4 font-display text-4xl sm:text-5xl tracking-heading text-qwer-white">
                  {{ localized(release.title) }}
                </h1>

                <div class="mt-2 flex items-center gap-2 text-sm text-qwer-gray">
                  <span>{{ formattedDate }}</span>
                  <span class="w-1 h-1 rounded-full bg-qwer-gray/40" />
                  <span>{{ release.tracks.length }} {{ release.tracks.length === 1 ? 'track' : 'tracks' }}</span>
                  <span class="w-1 h-1 rounded-full bg-qwer-gray/40" />
                  <span>{{ totalDuration }}</span>
                </div>

                <p v-if="release.description" class="mt-4 text-sm text-qwer-white/70 leading-relaxed max-w-xl">
                  {{ localized(release.description) }}
                </p>

                <!-- Streaming links -->
                <div class="mt-6">
                  <StreamingLinks :links="release.streaming" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Tracklist -->
        <section class="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h2 class="label-meta mb-6">{{ t('music.tracklist') }}</h2>
          <TrackList :tracks="release.tracks" />
        </section>

        <!-- Credits -->
        <section
          v-if="release.credits"
          class="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-white/5"
        >
          <h2 class="label-meta mb-4">{{ t('music.credits') }}</h2>
          <p class="text-sm text-qwer-gray leading-relaxed whitespace-pre-line">
            {{ localized(release.credits) }}
          </p>
        </section>

        <!-- Adjacent releases -->
        <section class="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-white/5">
          <div class="flex justify-between items-center">
            <RouterLink
              v-if="prevRelease"
              :to="`/music/${prevRelease.slug}`"
              class="flex items-center gap-3 text-sm text-qwer-gray hover:text-qwer-white transition-colors duration-hover"
              @click="navigateRelease('slide-right')"
            >
              <span>&larr;</span>
              <div>
                <p class="label-meta text-[9px] mb-0.5">{{ t('common.previous') }}</p>
                <p class="font-display text-lg tracking-heading text-qwer-white">
                  {{ localized(prevRelease.title) }}
                </p>
              </div>
            </RouterLink>
            <div v-else />

            <RouterLink
              v-if="nextRelease"
              :to="`/music/${nextRelease.slug}`"
              class="flex items-center gap-3 text-sm text-qwer-gray hover:text-qwer-white transition-colors duration-hover text-right"
              @click="navigateRelease('slide-left')"
            >
              <div>
                <p class="label-meta text-[9px] mb-0.5">{{ t('common.next') }}</p>
                <p class="font-display text-lg tracking-heading text-qwer-white">
                  {{ localized(nextRelease.title) }}
                </p>
              </div>
              <span>&rarr;</span>
            </RouterLink>
            <div v-else />
          </div>
        </section>
      </div>

      <!-- Not found -->
      <div v-else :key="'not-found'" class="min-h-screen flex items-center justify-center">
        <div class="text-center">
          <p class="font-display text-4xl tracking-display text-qwer-crimson">404</p>
          <p class="mt-2 text-sm text-qwer-gray">{{ t('common.release_not_found') }}</p>
          <QwButton to="/music" class="mt-6">
            {{ t('music.title') }}
          </QwButton>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useLanguage } from '@/composables/useLanguage'
import { useHead } from '@/composables/useHead'
import { getReleaseBySlug, releasesSorted } from '@/data/releases'
import CoverImage from '@/components/shared/CoverImage.vue'
import QwBadge from '@/components/shared/QwBadge.vue'
import QwButton from '@/components/shared/QwButton.vue'
import StreamingLinks from '@/components/shared/StreamingLinks.vue'
import TrackList from '@/components/sections/TrackList.vue'

const route = useRoute()
const { t, localized } = useLanguage()

const slideDirection = ref<'slide-left' | 'slide-right'>('slide-left')

function navigateRelease(dir: 'slide-left' | 'slide-right') {
  slideDirection.value = dir
}

function onSlideComplete() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const slug = computed(() => route.params.slug as string)
const release = computed(() => getReleaseBySlug(slug.value))

useHead({
  title: () => release.value ? `${localized(release.value.title)} — ${t('music.title')}` : t('music.title'),
})

const formattedDate = computed(() => {
  if (!release.value) return ''
  return new Date(release.value.releaseDate).toLocaleDateString('en', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
})

const totalDuration = computed(() => {
  if (!release.value) return ''
  let seconds = 0
  for (const track of release.value.tracks) {
    const [m, s] = track.duration.split(':').map(Number)
    seconds += m * 60 + s
  }
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins}:${String(secs).padStart(2, '0')}`
}
)

const currentIndex = computed(() =>
  releasesSorted.findIndex(r => r.slug === slug.value)
)

const prevRelease = computed(() =>
  currentIndex.value > 0 ? releasesSorted[currentIndex.value - 1] : null
)

const nextRelease = computed(() =>
  currentIndex.value < releasesSorted.length - 1 ? releasesSorted[currentIndex.value + 1] : null
)
</script>
