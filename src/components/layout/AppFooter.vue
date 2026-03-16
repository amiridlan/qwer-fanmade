<template>
  <footer class="border-t border-white/5 bg-qwer-black">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <!-- Brand -->
        <div>
          <RouterLink
            to="/"
            class="font-display text-3xl tracking-display text-qwer-crimson"
          >
            QWER
          </RouterLink>
          <p class="mt-3 text-sm text-qwer-gray leading-relaxed max-w-xs">
            {{ t('hero.tagline') }}
          </p>
        </div>

        <!-- Navigation -->
        <div>
          <h4 class="label-meta mb-4">{{ t('nav.home') }}</h4>
          <nav class="flex flex-col gap-2">
            <RouterLink
              v-for="link in navLinks"
              :key="link.to"
              :to="link.to"
              class="text-sm text-qwer-gray hover:text-qwer-white transition-colors duration-hover"
            >
              {{ t(link.label) }}
            </RouterLink>
          </nav>
        </div>

        <!-- Socials -->
        <div>
          <h4 class="label-meta mb-4">Connect</h4>
          <div class="flex gap-4">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-qwer-gray hover:text-qwer-crimson transition-colors duration-hover"
              :aria-label="social.label"
            >
              <!-- Simple text links for socials — can be replaced with SVG icons later -->
              <span class="text-xs font-medium tracking-meta uppercase">{{ social.label }}</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Disclaimer -->
      <div class="mt-10 pt-6 border-t border-white/5">
        <FanDisclaimer compact />
        <p class="mt-3 text-center text-[10px] text-qwer-gray/50 tracking-meta uppercase">
          {{ t('footer.fan_note') }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useLanguage } from '@/composables/useLanguage'
import FanDisclaimer from '@/components/shared/FanDisclaimer.vue'

const { t } = useLanguage()

const navLinks = [
  { to: '/members', label: 'nav.members' },
  { to: '/music', label: 'nav.music' },
  { to: '/live', label: 'nav.live' },
  { to: '/bawige', label: 'nav.bawige' },
  { to: '/about', label: 'nav.about' },
]

const socials = [
  { label: 'YouTube', url: 'https://www.youtube.com/@QWER_official' },
  { label: 'Instagram', url: 'https://www.instagram.com/qwer_official' },
  { label: 'TikTok', url: 'https://www.tiktok.com/@qwer_official' },
  { label: 'X', url: 'https://x.com/QWER_official' },
]
</script>
