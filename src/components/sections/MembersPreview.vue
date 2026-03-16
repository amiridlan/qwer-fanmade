<template>
  <section class="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <SectionHeader
      :eyebrow="t('members.title')"
      :title="t('members.subtitle')"
      centered
    />

    <div ref="gridRef" class="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      <MemberCard
        v-for="member in members"
        :key="member.slug"
        :member="member"
      />
    </div>

    <div class="mt-10 text-center">
      <QwButton variant="ghost" to="/members">
        {{ t('nav.members') }}
      </QwButton>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useLanguage } from '@/composables/useLanguage'
import { useScrollReveal } from '@/composables/useScrollReveal'
import { members } from '@/data/members'
import SectionHeader from '@/components/shared/SectionHeader.vue'
import MemberCard from '@/components/sections/MemberCard.vue'
import QwButton from '@/components/shared/QwButton.vue'

const { t } = useLanguage()

const gridRef = ref<HTMLElement | null>(null)
useScrollReveal(gridRef, { stagger: 0.1, y: 40 })
</script>
