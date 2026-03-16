<template>
  <span
    :class="[
      'inline-block px-2.5 py-0.5 text-[10px] font-medium tracking-meta uppercase rounded-sm border',
      colorClass,
    ]"
    :style="memberColor ? { borderColor: memberColor, color: memberColor } : undefined"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  variant?: 'default' | 'crimson' | 'member'
  memberColor?: string
}>()

const colorClass = computed(() => {
  if (props.variant === 'member' && props.memberColor) return ''
  if (props.variant === 'crimson') return 'border-qwer-crimson/40 text-qwer-crimson'
  return 'border-white/20 text-qwer-gray'
})
</script>
