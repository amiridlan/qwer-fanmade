<template>
  <div class="flex items-center gap-1">
    <button
      v-for="lang in supportedLocales"
      :key="lang"
      :class="[
        'px-2 py-1 text-[11px] font-body font-medium tracking-meta uppercase transition-all duration-hover',
        currentLocale === lang
          ? 'text-qwer-crimson'
          : 'text-qwer-gray hover:text-qwer-white',
      ]"
      @click="setLocale(lang)"
    >
      {{ labels[lang] }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useLanguage } from '@/composables/useLanguage'
import type { Locale } from '@/types'

const { currentLocale, setLocale, supportedLocales } = useLanguage()

const labels: Record<Locale, string> = {
  en: 'EN',
  ko: 'KR',
  ms: 'MY',
  ja: 'JP',
}
</script>
