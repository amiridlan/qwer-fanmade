<template>
  <div class="relative w-full h-full bg-qwer-black/60 overflow-hidden">
    <!-- Spinner -->
    <Transition
      enter-active-class="transition-opacity duration-200"
      leave-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div v-if="!loaded" class="absolute inset-0 flex items-center justify-center">
        <div class="spinner" />
      </div>
    </Transition>

    <!-- Image -->
    <img
      :src="src"
      :alt="alt"
      :class="['w-full h-full object-cover transition-opacity duration-300', loaded ? 'opacity-100' : 'opacity-0', imgClass]"
      :loading="eager ? undefined : 'lazy'"
      :fetchpriority="eager ? 'high' : undefined"
      @load="loaded = true"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  src: string
  alt: string
  eager?: boolean
  imgClass?: string
}>()

const loaded = ref(false)

watch(() => props.src, () => {
  loaded.value = false
})
</script>

<style scoped>
.spinner {
  width: 24px;
  height: 24px;
  border: 2px solid rgba(193, 39, 45, 0.2);
  border-top-color: #C1272D;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
