<template>
  <component
    :is="href ? 'a' : to ? RouterLink : 'button'"
    v-bind="linkProps"
    :class="[
      'inline-flex items-center justify-center gap-2 font-body text-sm font-medium tracking-heading transition-all duration-hover',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-qwer-crimson focus-visible:ring-offset-2 focus-visible:ring-offset-qwer-black',
      variantClasses,
      small ? 'px-4 py-2 text-xs' : 'px-6 py-3',
    ]"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps<{
  variant?: 'primary' | 'ghost' | 'member'
  memberColor?: string
  to?: string
  href?: string
  small?: boolean
}>()

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'ghost':
      return 'border border-white/20 text-qwer-white hover:border-qwer-crimson hover:text-qwer-crimson bg-transparent'
    case 'member':
      return 'border text-qwer-white bg-transparent hover:scale-[1.02]'
    default: // primary
      return 'bg-qwer-crimson text-qwer-white hover:bg-qwer-crimson/85 active:scale-[0.98]'
  }
})

const linkProps = computed(() => {
  if (props.href) {
    return { href: props.href, target: '_blank', rel: 'noopener noreferrer' }
  }
  if (props.to) {
    return { to: props.to }
  }
  return { type: 'button' }
})
</script>
