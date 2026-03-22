<template>
  <Transition
    enter-active-class="transition-opacity duration-200"
    leave-active-class="transition-opacity duration-200"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <div
      v-if="open"
      class="fixed inset-0 top-16 z-40 bg-qwer-black/98 backdrop-blur-lg"
      @click.self="emit('close')"
    >
      <Transition
        enter-active-class="transition-transform duration-300 ease-snap-out"
        leave-active-class="transition-transform duration-200"
        enter-from-class="translate-x-full"
        leave-to-class="translate-x-full"
      >
        <nav
          v-if="open"
          class="absolute right-0 top-0 bottom-0 w-72 bg-qwer-stage border-l border-white/5 flex flex-col px-8 pt-12 gap-2"
        >
          <RouterLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            :class="[
              'block py-3 font-display text-2xl tracking-heading transition-colors duration-hover border-b border-white/5',
              isActive(link.to)
                ? 'text-qwer-crimson'
                : 'text-qwer-white hover:text-qwer-crimson',
            ]"
            @click="emit('close')"
          >
            {{ t(link.label) }}
          </RouterLink>

          <!-- Fan disclaimer at bottom -->
          <p class="mt-auto mb-8 text-[10px] tracking-meta uppercase text-qwer-gray leading-relaxed">
            {{ t('footer.disclaimer') }}
          </p>
        </nav>
      </Transition>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useLanguage } from '@/composables/useLanguage'

const props = defineProps<{ open: boolean }>()
const emit = defineEmits<{ close: [] }>()
const { t } = useLanguage()
const route = useRoute()

const navLinks = [
  { to: '/', label: 'nav.home' },
  { to: '/members', label: 'nav.members' },
  { to: '/music', label: 'nav.music' },
  { to: '/live', label: 'nav.live' },
  { to: '/awards', label: 'nav.awards' },
  { to: '/bawige', label: 'nav.bawige' },
  { to: '/about', label: 'nav.about' },
]

function isActive(to: string): boolean {
  if (to === '/') return route.path === '/'
  return route.path.startsWith(to)
}

// Lock body scroll when open
watch(() => props.open, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
})
</script>
