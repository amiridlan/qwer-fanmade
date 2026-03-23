<template>
  <div class="min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <SectionHeader
      :title="t('members.subtitle')"
      centered
    />

    <div class="mt-12 flex h-[60vh] sm:h-[70vh] lg:h-[75vh] -mx-4 sm:-mx-6 lg:-mx-8 border-2 border-qwer-crimson rounded-sm overflow-hidden">
      <MemberCard
        v-for="(member, i) in members"
        :key="member.slug"
        :member="member"
        :index="i"
        :total="members.length"
        :class="i > 0 ? '-ml-[4%]' : ''"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLanguage } from '@/composables/useLanguage'
import { useHead } from '@/composables/useHead'
import { members } from '@/data/members'
import SectionHeader from '@/components/shared/SectionHeader.vue'
import MemberCard from '@/components/sections/MemberCard.vue'

const { t } = useLanguage()
useHead({ title: () => t('members.title'), description: 'Meet the four members of QWER — Chodan, Magenta, Hina, and Siyeon.' })
</script>
