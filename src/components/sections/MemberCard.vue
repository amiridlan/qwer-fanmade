<template>
  <RouterLink
    :to="`/members/${member.slug}`"
    class="member-panel group relative block overflow-hidden flex-1
           transition-all duration-300 ease-snap-out
           hover:flex-[1.15] hover:z-10"
    :style="{
      '--member-color': member.color,
      clipPath: clipPath,
    }"
  >
    <!-- Full-bleed member image -->
    <div class="absolute inset-0">
      <img
        :src="`${base}images/members/${member.slug}.jpg`"
        :alt="member.name.en"
        class="w-full h-full object-cover transition-transform duration-500
               group-hover:scale-105"
      />
      <div class="absolute inset-0 bg-qwer-black/40 transition-all duration-300
                  group-hover:bg-qwer-black/20" />
    </div>

    <!-- Bottom gradient overlay -->
    <div class="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-qwer-black/90 to-transparent" />

    <!-- Member name -->
    <div class="absolute inset-x-0 bottom-0 p-6 sm:p-8">
      <h3
        class="font-display text-2xl sm:text-3xl lg:text-4xl tracking-heading text-qwer-white
               transition-colors duration-200 group-hover:text-[var(--member-color)]"
      >
        {{ localized(member.name) }}
      </h3>
    </div>

    <!-- Member color edge glow on hover -->
    <div
      class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      :style="{
        boxShadow: `inset 0 0 60px -20px ${member.color}, 0 0 30px -10px ${member.color}`,
      }"
    />
  </RouterLink>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useLanguage } from '@/composables/useLanguage'
import type { Member } from '@/types'

const props = defineProps<{
  member: Member
  index: number
  total: number
}>()

const base = import.meta.env.BASE_URL
const { localized } = useLanguage()

const clipPath = computed(() => {
  const slant = 8
  const isFirst = props.index === 0
  const isLast = props.index === props.total - 1

  const topLeft = isFirst ? 0 : slant
  const topRight = 100
  const bottomRight = isLast ? 100 : 100 - slant
  const bottomLeft = 0

  return `polygon(${topLeft}% 0, ${topRight}% 0, ${bottomRight}% 100%, ${bottomLeft}% 100%)`
})
</script>
