<template>
  <div ref="headerRef" :class="['mb-8', centered ? 'text-center' : '']">
    <p v-if="eyebrow" class="label-meta mb-2">{{ eyebrow }}</p>
    <h2 class="font-display text-4xl sm:text-5xl tracking-heading text-qwer-white uppercase">
      <slot>{{ title }}</slot>
    </h2>
    <p v-if="subtitle" class="mt-2 text-sm text-qwer-gray">{{ subtitle }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

defineProps<{
  title?: string
  subtitle?: string
  eyebrow?: string
  centered?: boolean
}>()

const headerRef = ref<HTMLElement | null>(null)
useScrollReveal(headerRef, { y: 20, duration: 0.6, stagger: 0.08 })
</script>
