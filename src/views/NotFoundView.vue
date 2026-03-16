<template>
  <div class="min-h-screen flex items-center justify-center px-4">
    <div class="text-center">
      <p class="font-display text-8xl tracking-display text-qwer-crimson">404</p>
      <p class="mt-4 text-lg text-qwer-gray">{{ t('common.not_found') }}</p>
      <QwButton to="/" class="mt-8">
        {{ t('nav.home') }}
      </QwButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLanguage } from '@/composables/useLanguage'
import { useHead } from '@/composables/useHead'
import QwButton from '@/components/shared/QwButton.vue'

const { t } = useLanguage()
useHead({ title: '404' })
</script>
