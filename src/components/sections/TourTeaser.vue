<template>
  <section class="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <SectionHeader
      :title="t('live.latest_performance')"
      centered
    />

    <!-- Latest performance thumbnail -->
    <div ref="perfRef" class="mt-10 max-w-3xl mx-auto">
      <RouterLink
        to="/live"
        class="group relative block aspect-video overflow-hidden border border-white/6
               hover:border-qwer-crimson/30 transition-all duration-200"
      >
        <img
          :src="`https://img.youtube.com/vi/${latest.youtubeId}/maxresdefault.jpg`"
          :alt="localized(latest.title)"
          class="w-full h-full object-cover transition-transform duration-300
                 group-hover:scale-[1.02]"
        />
        <div class="absolute inset-0 bg-qwer-black/30 group-hover:bg-qwer-black/10 transition-colors duration-200" />

        <!-- Play icon -->
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-qwer-crimson/90 backdrop-blur-sm
                      flex items-center justify-center transition-all duration-200
                      group-hover:scale-110 group-hover:bg-qwer-crimson
                      shadow-[0_0_30px_rgba(193,39,45,0.3)] group-hover:shadow-[0_0_40px_rgba(193,39,45,0.5)]">
            <svg class="w-6 h-6 sm:w-8 sm:h-8 text-qwer-white ml-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        <!-- Title bar -->
        <div class="absolute inset-x-0 bottom-0 px-4 py-3 bg-gradient-to-t from-qwer-black/80 to-transparent">
          <h3 class="font-display text-base sm:text-lg tracking-heading text-qwer-white truncate">
            {{ localized(latest.title) }}
          </h3>
        </div>
      </RouterLink>
    </div>

    <div class="mt-10 text-center">
      <QwButton variant="ghost" to="/live">
        {{ t('live.watch_all') }}
      </QwButton>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useLanguage } from '@/composables/useLanguage'
import { useScrollReveal } from '@/composables/useScrollReveal'
import { latestPerformance } from '@/data/performances'
import SectionHeader from '@/components/shared/SectionHeader.vue'
import QwButton from '@/components/shared/QwButton.vue'

const { t, localized } = useLanguage()

const perfRef = ref<HTMLElement | null>(null)
useScrollReveal(perfRef, { y: 20 })

const latest = latestPerformance
</script>
