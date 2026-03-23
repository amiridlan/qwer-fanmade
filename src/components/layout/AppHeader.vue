<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled
        ? 'bg-qwer-black/95 backdrop-blur-md border-b border-white/5'
        : 'bg-transparent',
    ]"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <!-- Logo -->
        <RouterLink
          to="/"
          class="block hover:opacity-80 transition-opacity duration-hover"
        >
          <img :src="`${base}images/logo/logo.svg`" alt="QWER" class="h-8" />
        </RouterLink>

        <!-- Desktop nav -->
        <nav class="hidden md:flex items-center gap-8">
          <RouterLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            :class="[
              'relative font-body text-sm tracking-heading transition-colors duration-hover underline-crimson',
              isActive(link.to)
                ? 'text-qwer-white'
                : 'text-qwer-gray hover:text-qwer-white',
            ]"
          >
            {{ t(link.label) }}
          </RouterLink>
        </nav>

        <!-- Right side: language + hamburger -->
        <div class="flex items-center gap-4">
          <LanguageToggle />

          <!-- Mobile hamburger -->
          <button
            class="md:hidden relative w-8 h-8 flex items-center justify-center"
            aria-label="Toggle menu"
            @click="mobileOpen = !mobileOpen"
          >
            <span class="sr-only">Menu</span>
            <div class="flex flex-col gap-1.5 w-5">
              <span
                :class="[
                  'block h-[2px] bg-qwer-white transition-all duration-200 origin-center',
                  mobileOpen ? 'rotate-45 translate-y-[4px]' : '',
                ]"
              />
              <span
                :class="[
                  'block h-[2px] bg-qwer-white transition-all duration-200',
                  mobileOpen ? 'opacity-0 scale-x-0' : '',
                ]"
              />
              <span
                :class="[
                  'block h-[2px] bg-qwer-white transition-all duration-200 origin-center',
                  mobileOpen ? '-rotate-45 -translate-y-[4px]' : '',
                ]"
              />
            </div>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile nav overlay -->
    <MobileNav :open="mobileOpen" @close="mobileOpen = false" />
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useLanguage } from '@/composables/useLanguage'
import LanguageToggle from '@/components/shared/LanguageToggle.vue'
import MobileNav from '@/components/layout/MobileNav.vue'

const base = import.meta.env.BASE_URL
const { t } = useLanguage()
const route = useRoute()

const mobileOpen = ref(false)
const scrolled = ref(false)

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

function onScroll() {
  scrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
