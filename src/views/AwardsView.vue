<template>
  <div class="min-h-screen relative overflow-hidden flex flex-col">
    <!-- Stage spotlights -->
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div class="spotlight spotlight-1" />
      <div class="spotlight spotlight-2" />
      <div class="spotlight spotlight-3" />
      <div class="spotlight spotlight-4" />
      <div class="absolute inset-0 bg-gradient-to-t from-qwer-black via-transparent to-qwer-black/80" />
    </div>

    <!-- Header -->
    <div class="relative z-10 pt-28 pb-6 text-center px-4">
      <p class="label-meta text-qwer-crimson mb-2">{{ t('awards.eyebrow') }}</p>
      <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl tracking-display text-qwer-white">
        {{ t('awards.title') }}
      </h1>
      <p class="mt-2 text-sm text-qwer-gray">
        {{ awardsSorted.length }} {{ t('awards.total') }}
      </p>
    </div>

    <!-- Trophy showcase -->
    <div class="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-8">
      <div class="relative w-full max-w-lg flex items-center justify-center">
        <!-- Left arrow -->
        <button
          :disabled="currentIndex <= 0"
          class="absolute left-0 sm:-left-16 z-20 p-3 text-qwer-gray hover:text-qwer-white
                 disabled:opacity-20 disabled:cursor-not-allowed transition-colors duration-200"
          @click="navigate(-1)"
        >
          <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <!-- Award card -->
        <div class="w-full">
          <Transition :name="slideDir" mode="out-in">
            <div :key="current.id" class="flex flex-col items-center">
              <!-- Trophy frame -->
              <div class="trophy-pan">
              <div class="trophy-frame group relative w-64 h-80 sm:w-72 sm:h-[22rem]">
                <!-- Ornate border -->
                <div
                  class="absolute inset-0 rounded-sm border-2 border-qwer-crimson/40
                         group-hover:border-qwer-crimson transition-colors duration-300"
                />
                <!-- Corner accents -->
                <div class="corner-accent top-0 left-0" />
                <div class="corner-accent top-0 right-0 -scale-x-100" />
                <div class="corner-accent bottom-0 left-0 -scale-y-100" />
                <div class="corner-accent bottom-0 right-0 scale-[-1]" />

                <!-- Photo placeholder -->
                <div
                  class="absolute inset-[3px] rounded-sm bg-qwer-black/70 overflow-hidden
                         flex items-center justify-center"
                >
                  <div class="text-center select-none">
                    <span class="block font-display text-6xl tracking-display text-qwer-crimson/15">
                      QWER
                    </span>
                    <span class="block mt-1 text-xs text-qwer-gray/40 tracking-meta uppercase">
                      {{ current.category === 'music-show' ? '🏆' : '🎖️' }}
                    </span>
                  </div>
                </div>

                <!-- Shine sweep on hover -->
                <div
                  class="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100
                         pointer-events-none overflow-hidden transition-opacity duration-300"
                >
                  <div class="shine-sweep" />
                </div>

                <!-- Glow -->
                <div
                  class="absolute -inset-3 rounded-sm opacity-0 group-hover:opacity-100
                         transition-opacity duration-500 pointer-events-none
                         bg-qwer-crimson/5 blur-xl"
                />
              </div>
              </div>

              <!-- Award info -->
              <div class="mt-8 text-center max-w-md">
                <p class="label-meta text-qwer-crimson text-[10px] mb-1">
                  {{ formattedDate }}
                </p>
                <h2 class="font-display text-2xl sm:text-3xl tracking-heading text-qwer-white">
                  {{ localized(current.award) }}
                </h2>
                <p class="mt-1 text-sm text-qwer-gray">
                  {{ localized(current.ceremony) }}
                </p>
                <p v-if="current.song" class="mt-2 text-sm text-qwer-pink">
                  ♪ {{ localized(current.song) }}
                </p>
              </div>
            </div>
          </Transition>
        </div>

        <!-- Right arrow -->
        <button
          :disabled="currentIndex >= awardsSorted.length - 1"
          class="absolute right-0 sm:-right-16 z-20 p-3 text-qwer-gray hover:text-qwer-white
                 disabled:opacity-20 disabled:cursor-not-allowed transition-colors duration-200"
          @click="navigate(1)"
        >
          <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Dot indicators -->
    <div class="relative z-10 pb-12 flex justify-center gap-1.5 flex-wrap px-8">
      <button
        v-for="(award, i) in awardsSorted"
        :key="award.id"
        class="w-2 h-2 rounded-full transition-all duration-200"
        :class="i === currentIndex
          ? 'bg-qwer-crimson scale-125'
          : 'bg-qwer-gray/30 hover:bg-qwer-gray/60'"
        @click="goTo(i)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useLanguage } from '@/composables/useLanguage'
import { useHead } from '@/composables/useHead'
import { awardsSorted } from '@/data/awards'

const { t, localized } = useLanguage()
useHead({ title: () => t('awards.title') })

const currentIndex = ref(0)
const slideDir = ref<'slide-left' | 'slide-right'>('slide-left')

const current = computed(() => awardsSorted[currentIndex.value])

const formattedDate = computed(() => {
  return new Date(current.value.date).toLocaleDateString('en', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
})

function navigate(dir: -1 | 1) {
  const next = currentIndex.value + dir
  if (next < 0 || next >= awardsSorted.length) return
  slideDir.value = dir === 1 ? 'slide-left' : 'slide-right'
  currentIndex.value = next
}

function goTo(i: number) {
  if (i === currentIndex.value) return
  slideDir.value = i > currentIndex.value ? 'slide-left' : 'slide-right'
  currentIndex.value = i
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'ArrowLeft') navigate(-1)
  else if (e.key === 'ArrowRight') navigate(1)
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<style scoped>
/* ── Spotlights ──────────────────────────────────────────────────────────── */
.spotlight {
  position: absolute;
  width: 300px;
  height: 100%;
  background: conic-gradient(
    from 0deg at 50% 0%,
    transparent 170deg,
    rgba(193, 39, 45, 0.06) 178deg,
    rgba(193, 39, 45, 0.12) 180deg,
    rgba(193, 39, 45, 0.06) 182deg,
    transparent 190deg
  );
  filter: blur(8px);
}

.spotlight-1 {
  top: 0;
  left: 8%;
  transform: rotate(-12deg);
  transform-origin: top center;
}

.spotlight-2 {
  top: 0;
  left: 30%;
  transform: rotate(-4deg);
  transform-origin: top center;
}

.spotlight-3 {
  top: 0;
  right: 30%;
  transform: rotate(4deg);
  transform-origin: top center;
}

.spotlight-4 {
  top: 0;
  right: 8%;
  transform: rotate(12deg);
  transform-origin: top center;
}

/* ── Trophy pan + frame ─────────────────────────────────────────────────── */
.trophy-pan {
  perspective: 800px;
  animation: trophy-pan 4s ease-in-out infinite;
}

@keyframes trophy-pan {
  0% { transform: rotateY(-15deg); }
  50% { transform: rotateY(15deg); }
  100% { transform: rotateY(-15deg); }
}

.trophy-frame {
  transition: transform 0.3s ease;
}

.trophy-frame:hover {
  transform: scale(1.05);
}

/* Corner accents */
.corner-accent {
  position: absolute;
  width: 16px;
  height: 16px;
  border-left: 2px solid #C1272D;
  border-top: 2px solid #C1272D;
  opacity: 0.6;
}

/* Shine sweep */
.shine-sweep {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    115deg,
    transparent 40%,
    rgba(255, 255, 255, 0.08) 45%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.08) 55%,
    transparent 60%
  );
  animation: shine 1.5s ease-in-out infinite;
}

@keyframes shine {
  0% { transform: translateX(-100%) translateY(-100%) rotate(0deg); }
  100% { transform: translateX(100%) translateY(100%) rotate(0deg); }
}
</style>
