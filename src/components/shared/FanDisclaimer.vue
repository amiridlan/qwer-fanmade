<template>
  <div :class="['border border-white/10 rounded px-4 py-3 text-center', compact ? '' : 'bg-qwer-stage/50']">
    <p :class="[compact ? 'text-[10px]' : 'text-xs', 'text-qwer-gray leading-relaxed']">
      {{ t('bawige.disclaimer') }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { useLanguage } from '@/composables/useLanguage'

defineProps<{ compact?: boolean }>()
const { t } = useLanguage()
</script>
