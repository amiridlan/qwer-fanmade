<template>
  <div :class="['mb-8', centered ? 'text-center' : '']">
    <p v-if="eyebrow" class="label-meta mb-2">{{ eyebrow }}</p>
    <h2 class="font-display text-4xl sm:text-5xl tracking-heading text-qwer-white uppercase">
      <slot>{{ title }}</slot>
    </h2>
    <p v-if="subtitle" class="mt-2 text-sm text-qwer-gray">{{ subtitle }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
  subtitle?: string
  eyebrow?: string
  centered?: boolean
}>()
</script>
