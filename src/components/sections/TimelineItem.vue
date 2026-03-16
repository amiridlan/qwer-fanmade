<template>
  <div
    class="timeline-item relative flex gap-6 sm:gap-8 pb-12 last:pb-0"
  >
    <!-- Timeline rail -->
    <div class="shrink-0 flex flex-col items-center">
      <!-- Dot -->
      <div
        :class="[
          'w-3 h-3 rounded-full border-2 shrink-0 mt-1.5',
          typeStyles.dot,
        ]"
      />
      <!-- Line -->
      <div class="w-px flex-1 bg-white/10 mt-2" />
    </div>

    <!-- Content -->
    <div class="flex-1 min-w-0 pb-2">
      <!-- Date label -->
      <p class="label-meta text-[10px] mb-1.5" :class="typeStyles.date">
        {{ formattedDate }}
      </p>

      <!-- Title -->
      <h3 class="font-display text-xl sm:text-2xl tracking-heading text-qwer-white">
        {{ localized(item.title) }}
      </h3>

      <!-- Description -->
      <p class="mt-2 text-sm text-qwer-white/70 leading-relaxed max-w-xl">
        {{ localized(item.description) }}
      </p>

      <!-- Type badge -->
      <div class="mt-3">
        <QwBadge :variant="item.type === 'debut' || item.type === 'milestone' ? 'crimson' : 'default'">
          {{ item.type }}
        </QwBadge>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useLanguage } from '@/composables/useLanguage'
import QwBadge from '@/components/shared/QwBadge.vue'
import type { TimelineItem } from '@/types'

const props = defineProps<{ item: TimelineItem }>()
const { localized } = useLanguage()

const formattedDate = computed(() => {
  const d = new Date(props.item.date)
  // Some dates are just YYYY-MM, some are full ISO
  if (props.item.date.length <= 7) {
    return d.toLocaleDateString('en', { year: 'numeric', month: 'long' })
  }
  return d.toLocaleDateString('en', { year: 'numeric', month: 'long', day: 'numeric' })
})

const typeStyles = computed(() => {
  switch (props.item.type) {
    case 'debut':
      return { dot: 'border-qwer-crimson bg-qwer-crimson', date: 'text-qwer-crimson' }
    case 'milestone':
      return { dot: 'border-qwer-crimson bg-transparent', date: 'text-qwer-crimson' }
    case 'release':
      return { dot: 'border-qwer-pink bg-transparent', date: 'text-qwer-pink' }
    case 'concert':
      return { dot: 'border-qwer-amber bg-transparent', date: 'text-qwer-amber' }
    default: // formation
      return { dot: 'border-qwer-gray bg-transparent', date: 'text-qwer-gray' }
  }
})
</script>
