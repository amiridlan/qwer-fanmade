<template>
  <div class="min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <SectionHeader
      :eyebrow="t('members.title')"
      :title="t('members.subtitle')"
      centered
    />

    <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <MemberCard
        v-for="member in members"
        :key="member.slug"
        :member="member"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLanguage } from '@/composables/useLanguage'
import { members } from '@/data/members'
import SectionHeader from '@/components/shared/SectionHeader.vue'
import MemberCard from '@/components/sections/MemberCard.vue'

const { t } = useLanguage()
</script>
