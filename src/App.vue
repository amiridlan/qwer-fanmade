<template>
  <div class="flex min-h-screen flex-col">
    <!-- Skip to content (a11y) -->
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[9999]
             focus:px-4 focus:py-2 focus:bg-qwer-crimson focus:text-qwer-white focus:rounded-sm
             focus:text-sm focus:font-medium"
    >
      Skip to content
    </a>

    <AppHeader />
    <main id="main-content" class="flex-1 pt-16" role="main">
      <RouterView v-slot="{ Component, route }">
        <Transition
          :name="transitionName"
          mode="out-in"
          @before-leave="onBeforeLeave"
          @after-enter="onAfterEnter"
        >
          <component :is="Component" :key="routeKey(route)" />
        </Transition>
      </RouterView>
    </main>
    <AppFooter />
  </div>

  <!-- Global audio player -->
  <AudioPlayer />

  <!-- Page transition black flash overlay -->
  <Transition name="flash">
    <div v-if="flashing" class="fixed inset-0 z-[999] bg-qwer-black pointer-events-none" />
  </Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterView, type RouteLocationNormalizedLoaded } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import AudioPlayer from '@/components/sections/AudioPlayer.vue'

const transitionName = ref('page')

/** Keep same key for release-detail routes so the component stays mounted during prev/next nav */
function routeKey(route: RouteLocationNormalizedLoaded): string {
  if (route.name === 'release-detail') return 'release-detail'
  return route.path
}

const flashing = ref(false)

function onBeforeLeave() {
  flashing.value = true
}

function onAfterEnter() {
  flashing.value = false
  transitionName.value = 'page'
}
</script>

<style>
/* Page transition — cross-fade with brief black flash (stage blackout) */
.page-enter-active {
  transition: opacity 200ms cubic-bezier(0.22, 1, 0.36, 1);
}
.page-leave-active {
  transition: opacity 100ms ease-in;
}
.page-enter-from {
  opacity: 0;
}
.page-leave-to {
  opacity: 0;
}

/* Black flash overlay */
.flash-enter-active {
  transition: opacity 80ms ease-in;
}
.flash-leave-active {
  transition: opacity 150ms ease-out;
}
.flash-enter-from,
.flash-leave-to {
  opacity: 0;
}

/* Slide-left: next release (content slides left) */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 250ms cubic-bezier(0.22, 1, 0.36, 1), opacity 250ms cubic-bezier(0.22, 1, 0.36, 1);
}
.slide-left-enter-from {
  opacity: 0;
  transform: translateX(60px);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-60px);
}

/* Slide-right: previous release (content slides right) */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 250ms cubic-bezier(0.22, 1, 0.36, 1), opacity 250ms cubic-bezier(0.22, 1, 0.36, 1);
}
.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-60px);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(60px);
}
</style>
