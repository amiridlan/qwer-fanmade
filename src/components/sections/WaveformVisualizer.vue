<template>
  <div
    ref="containerRef"
    class="flex items-end gap-[2px] h-8"
    :style="{ '--bar-color': color }"
  >
    <div
      v-for="i in barCount"
      :key="i"
      class="waveform-bar flex-1 rounded-sm"
      :style="{
        height: `${bars[i - 1]}%`,
        backgroundColor: color,
        opacity: active ? 0.9 : 0.2,
        transition: active ? 'height 80ms ease-out' : 'height 300ms ease-out, opacity 300ms ease-out',
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'

const props = withDefaults(defineProps<{
  active?: boolean
  barCount?: number
  color?: string
}>(), {
  active: false,
  barCount: 24,
  color: '#C1272D',
})

const containerRef = ref<HTMLElement | null>(null)
const bars = ref<number[]>(Array(props.barCount).fill(8))

let rafId: number | null = null

function animateBars() {
  if (!props.active) {
    // Settle to idle state
    bars.value = bars.value.map(() => 6 + Math.random() * 6)
    return
  }

  bars.value = bars.value.map((_, i) => {
    // Simulate frequency distribution — center bars taller
    const center = props.barCount / 2
    const dist = Math.abs(i - center) / center
    const base = 20 + (1 - dist) * 40
    const variance = Math.random() * 35
    return Math.min(100, base + variance)
  })

  rafId = requestAnimationFrame(animateBars)
}

watch(() => props.active, (active) => {
  if (active) {
    animateBars()
  } else {
    if (rafId !== null) cancelAnimationFrame(rafId)
    rafId = null
    // Settle bars
    bars.value = bars.value.map(() => 6 + Math.random() * 6)
  }
})

onMounted(() => {
  if (props.active) animateBars()
})

onUnmounted(() => {
  if (rafId !== null) cancelAnimationFrame(rafId)
})
</script>
