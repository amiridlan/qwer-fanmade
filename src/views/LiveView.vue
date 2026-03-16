<template>
  <div class="min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
    <SectionHeader
      :eyebrow="t('live.title')"
      :title="t('live.subtitle')"
      centered
    />

    <!-- Rockation world tour banner -->
    <div v-if="worldTourShows.length" class="mt-12">
      <TourBanner />
    </div>

    <!-- Upcoming shows -->
    <section class="mt-16">
      <h2 class="label-meta mb-6 text-qwer-crimson">{{ t('live.upcoming') }}</h2>

      <div v-if="upcomingShows.length" class="space-y-3">
        <ShowCard
          v-for="show in upcomingShows"
          :key="show.id"
          :show="show"
        />
      </div>

      <p v-else class="text-sm text-qwer-gray py-8 text-center">
        {{ t('live.no_upcoming') }}
      </p>
    </section>

    <!-- Past shows -->
    <section v-if="pastShows.length" class="mt-16">
      <button
        class="w-full flex items-center justify-between py-3 border-b border-white/10
               text-left group"
        @click="pastOpen = !pastOpen"
      >
        <h2 class="label-meta text-qwer-gray group-hover:text-qwer-white transition-colors duration-hover">
          {{ t('live.past') }} ({{ pastShows.length }})
        </h2>
        <span
          :class="[
            'text-qwer-gray transition-transform duration-200',
            pastOpen ? 'rotate-180' : '',
          ]"
        >
          &#x25BE;
        </span>
      </button>

      <Transition
        enter-active-class="transition-all duration-300 ease-snap-out"
        leave-active-class="transition-all duration-200"
        enter-from-class="opacity-0 max-h-0"
        enter-to-class="opacity-100 max-h-[2000px]"
        leave-from-class="opacity-100 max-h-[2000px]"
        leave-to-class="opacity-0 max-h-0"
      >
        <div v-if="pastOpen" class="mt-3 space-y-3 overflow-hidden">
          <ShowCard
            v-for="show in pastShows"
            :key="show.id"
            :show="show"
          />
        </div>
      </Transition>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useLanguage } from '@/composables/useLanguage'
import { useHead } from '@/composables/useHead'
import { upcomingShows, pastShows, worldTourShows } from '@/data/shows'
import SectionHeader from '@/components/shared/SectionHeader.vue'
import TourBanner from '@/components/sections/TourBanner.vue'
import ShowCard from '@/components/sections/ShowCard.vue'

const { t } = useLanguage()
useHead({ title: () => t('live.title'), description: 'QWER live shows and Rockation world tour dates.' })
const pastOpen = ref(false)
</script>
