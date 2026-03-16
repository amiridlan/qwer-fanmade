<template>
  <RouterLink
    :to="`/members/${member.slug}`"
    class="group relative block rounded-sm border border-white/10 bg-qwer-stage/50 p-6
           transition-all duration-200 ease-snap-out
           hover:border-[var(--member-color)] hover:shadow-[0_0_24px_-6px_var(--member-color)]
           hover:scale-[1.02]"
    :style="{ '--member-color': member.color } as any"
  >
    <!-- Member image placeholder -->
    <div
      class="aspect-[3/4] w-full rounded-sm bg-qwer-black/60 mb-4 overflow-hidden
             flex items-center justify-center border border-white/5"
    >
      <span
        class="font-display text-5xl tracking-display opacity-20 transition-opacity duration-200 group-hover:opacity-40"
        :style="{ color: member.color }"
      >
        {{ member.name.en.charAt(0) }}
      </span>
    </div>

    <!-- Info -->
    <h3
      class="font-display text-xl tracking-heading text-qwer-white group-hover:text-[var(--member-color)] transition-colors duration-hover"
    >
      {{ localized(member.name) }}
    </h3>
    <p class="mt-1 text-xs text-qwer-gray tracking-sub">
      {{ localized(member.role) }}
    </p>

    <!-- Color accent bar -->
    <div
      class="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100
             transition-transform duration-200 ease-snap-out origin-left"
      :style="{ backgroundColor: member.color }"
    />
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useLanguage } from '@/composables/useLanguage'
import type { Member } from '@/types'

defineProps<{ member: Member }>()
const { localized } = useLanguage()
</script>
