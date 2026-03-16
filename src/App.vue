<template>
  <div class="flex min-h-screen flex-col">
    <AppHeader />
    <main class="flex-1 pt-16">
      <RouterView v-slot="{ Component, route }">
        <Transition
          name="page"
          mode="out-in"
          @before-leave="onBeforeLeave"
          @after-enter="onAfterEnter"
        >
          <component :is="Component" :key="route.path" />
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
import { RouterView } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import AudioPlayer from '@/components/sections/AudioPlayer.vue'

const flashing = ref(false)

function onBeforeLeave() {
  flashing.value = true
}

function onAfterEnter() {
  flashing.value = false
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
</style>
