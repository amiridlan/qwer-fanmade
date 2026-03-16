<template>
  <div v-if="member" class="min-h-screen" :style="cssVars">
    <!-- Hero banner with member color tint -->
    <section class="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <!-- Color overlay -->
      <div
        class="absolute inset-0 opacity-[0.07]"
        :style="{ background: `radial-gradient(ellipse at 50% 0%, ${color} 0%, transparent 70%)` }"
      />
      <!-- Noise -->
      <div class="absolute inset-0 noise-overlay pointer-events-none" />

      <div class="relative z-10 max-w-4xl mx-auto">
        <!-- Back link -->
        <RouterLink
          to="/members"
          class="inline-flex items-center gap-2 text-sm text-qwer-gray hover:text-qwer-white transition-colors duration-hover mb-8"
        >
          <span>&larr;</span>
          <span>{{ t('nav.members') }}</span>
        </RouterLink>

        <div class="flex flex-col md:flex-row gap-10 items-start">
          <!-- Member portrait placeholder -->
          <div
            class="shrink-0 w-48 sm:w-56 md:w-64 aspect-[3/4] rounded-sm border-2 bg-qwer-black/60
                   flex items-center justify-center"
            :style="{ borderColor: color }"
          >
            <span
              class="font-display text-8xl tracking-display opacity-25"
              :style="{ color }"
            >
              {{ member.name.en.charAt(0) }}
            </span>
          </div>

          <!-- Info -->
          <div class="flex-1 min-w-0">
            <!-- Name -->
            <h1 class="font-display text-5xl sm:text-6xl tracking-heading" :style="{ color }">
              {{ localized(member.name) }}
            </h1>

            <!-- Role -->
            <p class="mt-2 text-lg text-qwer-gray">
              {{ localized(member.role) }}
            </p>

            <!-- Instrument badges -->
            <div class="mt-4 flex flex-wrap gap-2">
              <QwBadge
                v-for="instrument in member.instruments"
                :key="instrument"
                variant="member"
                :member-color="color"
              >
                {{ instrument }}
              </QwBadge>
            </div>

            <!-- Bio -->
            <p class="mt-6 text-sm text-qwer-white/80 leading-relaxed max-w-2xl">
              {{ localized(member.bio) }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Fun Facts -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h2 class="label-meta mb-6" :style="{ color }">Fun Facts</h2>
      <ul class="space-y-4">
        <li
          v-for="(fact, i) in member.funFacts"
          :key="i"
          class="flex items-start gap-3"
        >
          <span
            class="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full"
            :style="{ backgroundColor: color }"
          />
          <span class="text-sm text-qwer-white/80 leading-relaxed">
            {{ localized(fact) }}
          </span>
        </li>
      </ul>
    </section>

    <!-- Socials -->
    <section
      v-if="socialEntries.length"
      class="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-white/5"
    >
      <h2 class="label-meta mb-6" :style="{ color }">Connect</h2>
      <div class="flex flex-wrap gap-4">
        <a
          v-for="[platform, url] in socialEntries"
          :key="platform"
          :href="url"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm border border-white/10
                 bg-qwer-stage/30 text-sm text-qwer-white
                 hover:border-[var(--member-color)] hover:shadow-[0_0_16px_-4px_var(--member-color)]
                 transition-all duration-hover"
        >
          <span class="capitalize">{{ platform }}</span>
          <span class="text-qwer-gray">&nearr;</span>
        </a>
      </div>
    </section>

    <!-- Adjacent member navigation -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-white/5">
      <div class="flex justify-between items-center">
        <RouterLink
          v-if="prevMember"
          :to="`/members/${prevMember.slug}`"
          class="group flex items-center gap-3 text-sm text-qwer-gray hover:text-qwer-white transition-colors duration-hover"
        >
          <span>&larr;</span>
          <div>
            <p class="label-meta text-[9px] mb-0.5">Previous</p>
            <p class="font-display text-lg tracking-heading" :style="{ color: prevMember.color }">
              {{ localized(prevMember.name) }}
            </p>
          </div>
        </RouterLink>
        <div v-else />

        <RouterLink
          v-if="nextMember"
          :to="`/members/${nextMember.slug}`"
          class="group flex items-center gap-3 text-sm text-qwer-gray hover:text-qwer-white transition-colors duration-hover text-right"
        >
          <div>
            <p class="label-meta text-[9px] mb-0.5">Next</p>
            <p class="font-display text-lg tracking-heading" :style="{ color: nextMember.color }">
              {{ localized(nextMember.name) }}
            </p>
          </div>
          <span>&rarr;</span>
        </RouterLink>
        <div v-else />
      </div>
    </section>
  </div>

  <!-- Not found -->
  <div v-else class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <p class="font-display text-4xl tracking-display text-qwer-crimson">404</p>
      <p class="mt-2 text-sm text-qwer-gray">Member not found.</p>
      <QwButton to="/members" class="mt-6">
        {{ t('nav.members') }}
      </QwButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useLanguage } from '@/composables/useLanguage'
import { useMemberColor } from '@/composables/useMemberColor'
import { members } from '@/data/members'
import QwBadge from '@/components/shared/QwBadge.vue'
import QwButton from '@/components/shared/QwButton.vue'

const route = useRoute()
const { t, localized } = useLanguage()

const slug = computed(() => route.params.slug as string)
const { member, color, cssVars } = useMemberColor(() => slug.value)

const socialEntries = computed(() => {
  if (!member.value) return []
  return Object.entries(member.value.socials).filter(([, url]) => url) as [string, string][]
})

const currentIndex = computed(() =>
  members.findIndex(m => m.slug === slug.value)
)

const prevMember = computed(() =>
  currentIndex.value > 0 ? members[currentIndex.value - 1] : null
)

const nextMember = computed(() =>
  currentIndex.value < members.length - 1 ? members[currentIndex.value + 1] : null
)
</script>
