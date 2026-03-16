<template>
  <div class="min-h-screen">
    <!-- Hero -->
    <section class="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div
        class="absolute inset-0 opacity-[0.06]"
        style="background: radial-gradient(ellipse at 50% 0%, #C1272D 0%, transparent 70%)"
      />
      <div class="absolute inset-0 noise-overlay pointer-events-none" />

      <div class="relative z-10 max-w-3xl mx-auto text-center">
        <p class="label-meta text-qwer-crimson mb-3">{{ t('bawige.title') }}</p>
        <h1 class="font-display text-5xl sm:text-6xl lg:text-7xl tracking-display text-qwer-white">
          바위게
        </h1>
        <p class="mt-2 font-body text-lg text-qwer-gray tracking-sub">
          {{ t('bawige.subtitle') }}
        </p>
      </div>
    </section>

    <!-- What is Bawige -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <h2 class="label-meta mb-6 text-qwer-crimson">{{ t('bawige.what_is') }}</h2>
      <p class="text-sm text-qwer-white/80 leading-relaxed">
        {{ localized(fandom.description) }}
      </p>
    </section>

    <QwDivider />

    <!-- Fandom facts -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <h2 class="label-meta mb-8">{{ t('bawige.fandom_facts') }}</h2>
      <ul class="space-y-5">
        <li
          v-for="(fact, i) in fandom.facts"
          :key="i"
          class="flex items-start gap-4"
        >
          <span class="shrink-0 mt-1 w-6 h-6 rounded-sm border border-qwer-crimson/30 bg-qwer-crimson/5
                       flex items-center justify-center font-mono text-[10px] text-qwer-crimson">
            {{ i + 1 }}
          </span>
          <p class="text-sm text-qwer-white/80 leading-relaxed">
            {{ localized(fact) }}
          </p>
        </li>
      </ul>
    </section>

    <QwDivider />

    <!-- Official links -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <h2 class="label-meta mb-8 text-qwer-crimson">{{ t('bawige.official') }}</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a
          v-for="link in fandom.officialLinks"
          :key="link.url"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-3 p-4 rounded-sm border border-white/10 bg-qwer-stage/30
                 hover:border-qwer-crimson/40 hover:shadow-[0_0_16px_-4px_rgba(193,39,45,0.2)]
                 transition-all duration-hover group"
        >
          <span class="flex-1 text-sm text-qwer-white group-hover:text-qwer-crimson transition-colors duration-hover">
            {{ localized(link.label) }}
          </span>
          <span class="label-meta text-[9px] text-qwer-gray/50">{{ link.platform }}</span>
          <span class="text-qwer-gray/40 group-hover:text-qwer-crimson transition-colors duration-hover">&nearr;</span>
        </a>
      </div>
    </section>

    <QwDivider />

    <!-- Community links -->
    <section v-if="fandom.communityLinks.length" class="py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <h2 class="label-meta mb-8">{{ t('bawige.community') }}</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a
          v-for="link in fandom.communityLinks"
          :key="link.url"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-3 p-4 rounded-sm border border-white/5 bg-qwer-black/30
                 hover:border-white/20 transition-all duration-hover group"
        >
          <span class="flex-1 text-sm text-qwer-gray group-hover:text-qwer-white transition-colors duration-hover">
            {{ localized(link.label) }}
          </span>
          <span class="label-meta text-[9px] text-qwer-gray/30">{{ link.platform }}</span>
          <span class="text-qwer-gray/30">&nearr;</span>
        </a>
      </div>
    </section>

    <QwDivider />

    <!-- Fan disclaimer — prominent -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 max-w-xl mx-auto">
      <FanDisclaimer />
    </section>
  </div>
</template>

<script setup lang="ts">
import { useLanguage } from '@/composables/useLanguage'
import { fandom } from '@/data/fandom'
import QwDivider from '@/components/shared/QwDivider.vue'
import FanDisclaimer from '@/components/shared/FanDisclaimer.vue'

const { t, localized } = useLanguage()
</script>
