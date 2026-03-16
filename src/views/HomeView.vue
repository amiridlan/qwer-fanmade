<template>
  <div>
    <HeroSection />
    <QwDivider />
    <LatestReleaseTeaser />
    <QwDivider />
    <MembersPreview />
    <QwDivider />
    <TourTeaser />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import LatestReleaseTeaser from '@/components/sections/LatestReleaseTeaser.vue'
import MembersPreview from '@/components/sections/MembersPreview.vue'
import TourTeaser from '@/components/sections/TourTeaser.vue'
import QwDivider from '@/components/shared/QwDivider.vue'
</script>
