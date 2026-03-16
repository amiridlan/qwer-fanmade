<template>
  <section class="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden">
    <!-- Background waveform lines -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div class="waveform-bg" />
    </div>

    <!-- Noise texture overlay -->
    <div class="absolute inset-0 pointer-events-none noise-overlay" aria-hidden="true" />

    <!-- Content -->
    <div class="relative z-10 text-center px-4">
      <!-- Logotype -->
      <h1
        ref="logoRef"
        class="hero-logo font-display text-[clamp(4rem,15vw,9rem)] leading-none tracking-display text-qwer-white"
      >
        QWER
      </h1>

      <!-- Korean subtitle -->
      <p class="mt-2 font-ko text-lg sm:text-xl text-qwer-gray tracking-sub">
        큐더블유이알
      </p>

      <!-- Tagline -->
      <p class="mt-4 text-sm sm:text-base text-qwer-white/70 tracking-heading">
        {{ t('hero.tagline') }}
      </p>

      <!-- Subtitle -->
      <p class="mt-1 label-meta">
        {{ t('hero.subtitle') }}
      </p>

      <!-- CTAs -->
      <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
        <QwButton to="/music">
          {{ t('hero.cta_music') }}
        </QwButton>
        <QwButton variant="ghost" to="/live">
          {{ t('hero.cta_tour') }}
        </QwButton>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
      <div class="scroll-indicator flex flex-col items-center gap-2">
        <span class="label-meta text-[9px]">{{ t('hero.scroll') }}</span>
        <div class="w-px h-8 bg-gradient-to-b from-qwer-gray/60 to-transparent scroll-line" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useLanguage } from '@/composables/useLanguage'
import { useGlitch } from '@/composables/useGlitch'
import QwButton from '@/components/shared/QwButton.vue'

const { t } = useLanguage()

const logoRef = ref<HTMLElement | null>(null)
useGlitch(logoRef, { onLoad: true, interval: 6000, duration: 0.1 })
</script>

<style scoped>
/* Waveform background — animated sine waves */
.waveform-bg {
  position: absolute;
  inset: 0;
  background:
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 3px,
      rgba(193, 39, 45, 0.03) 3px,
      rgba(193, 39, 45, 0.03) 4px
    );
}

.waveform-bg::before,
.waveform-bg::after {
  content: '';
  position: absolute;
  left: -10%;
  right: -10%;
  height: 1px;
  background: linear-gradient(90deg,
    transparent 0%,
    rgba(193, 39, 45, 0.15) 20%,
    rgba(193, 39, 45, 0.3) 50%,
    rgba(193, 39, 45, 0.15) 80%,
    transparent 100%
  );
  animation: waveMove 8s ease-in-out infinite alternate;
}

.waveform-bg::before {
  top: 42%;
}

.waveform-bg::after {
  top: 58%;
  animation-delay: -4s;
  opacity: 0.5;
}

@keyframes waveMove {
  0%   { transform: translateX(-3%) scaleY(1); }
  50%  { transform: translateX(3%) scaleY(2); }
  100% { transform: translateX(-3%) scaleY(1); }
}

/* Hero logo glitch-ready — CSS placeholder until GSAP Phase 10 */
.hero-logo {
  text-shadow:
    0 0 80px rgba(193, 39, 45, 0.15),
    0 0 40px rgba(193, 39, 45, 0.05);
  animation: heroFadeIn 1s cubic-bezier(0.22, 1, 0.36, 1) both;
}

@keyframes heroFadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
    filter: blur(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

/* Scroll indicator pulse */
.scroll-indicator {
  animation: scrollPulse 2.5s ease-in-out infinite;
}

.scroll-line {
  animation: scrollDraw 2.5s ease-in-out infinite;
}

@keyframes scrollPulse {
  0%, 100% { opacity: 0.5; }
  50%      { opacity: 1; }
}

@keyframes scrollDraw {
  0%   { transform: scaleY(0); transform-origin: top; }
  50%  { transform: scaleY(1); transform-origin: top; }
  51%  { transform-origin: bottom; }
  100% { transform: scaleY(0); transform-origin: bottom; }
}
</style>
