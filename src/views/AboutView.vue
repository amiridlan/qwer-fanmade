<template>
  <div class="min-h-screen">
    <!-- Hero -->
    <section class="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div
        class="absolute inset-0 opacity-[0.06]"
        style="background: radial-gradient(ellipse at 50% 0%, #C1272D 0%, transparent 70%)"
      />
      <div class="absolute inset-0 noise-overlay pointer-events-none" />

      <div class="relative z-10 max-w-3xl mx-auto text-center">
        <p class="label-meta text-qwer-crimson mb-3">{{ t('about.title') }}</p>
        <h1 class="font-display text-5xl sm:text-6xl lg:text-7xl tracking-display text-qwer-white">
          {{ t('about.subtitle') }}
        </h1>
        <p class="mt-6 text-sm sm:text-base text-qwer-white/70 leading-relaxed max-w-xl mx-auto">
          {{ localized(storyIntro) }}
        </p>
      </div>
    </section>

    <!-- Origin narrative -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <h2 class="label-meta mb-6">{{ t('about.origin') }}</h2>
      <div class="space-y-4 text-sm text-qwer-white/80 leading-relaxed">
        <p>{{ localized(originP1) }}</p>
        <p>{{ localized(originP2) }}</p>
      </div>
    </section>

    <QwDivider />

    <!-- Timeline -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <h2 class="label-meta mb-10 text-qwer-crimson">{{ t('about.timeline') }}</h2>
      <div>
        <TimelineItemComponent
          v-for="item in timelineSorted"
          :key="item.id"
          :item="item"
        />
      </div>
    </section>

    <QwDivider />

    <!-- Inspirations -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <h2 class="label-meta mb-8">{{ t('about.inspirations') }}</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <div
          v-for="insp in inspirations"
          :key="insp.title"
          class="p-4 rounded-sm border border-white/5 bg-qwer-stage/30"
        >
          <p class="font-display text-lg tracking-heading text-qwer-white">{{ insp.title }}</p>
          <p class="mt-1 text-xs text-qwer-gray">{{ insp.type }}</p>
        </div>
      </div>
    </section>

    <QwDivider />

    <!-- Fan disclaimer -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 max-w-xl mx-auto">
      <FanDisclaimer />
      <p class="mt-3 text-center text-[10px] text-qwer-gray/50 tracking-meta uppercase">
        {{ t('about.disclaimer') }}
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useLanguage } from '@/composables/useLanguage'
import { useHead } from '@/composables/useHead'
import { timelineSorted } from '@/data/timeline'
import TimelineItemComponent from '@/components/sections/TimelineItem.vue'
import QwDivider from '@/components/shared/QwDivider.vue'
import FanDisclaimer from '@/components/shared/FanDisclaimer.vue'
import type { LocalizedString } from '@/types'

const { t, localized } = useLanguage()
useHead({ title: () => t('about.title'), description: 'The story of QWER — from a YouTube project to a real band.' })

const storyIntro: LocalizedString = {
  en: 'Four strangers from completely different worlds — a metal-loving streamer, an anime-obsessed bassist, a TikTok cosplayer, and a former J-pop idol. One YouTube project brought them together. What happened next was real.',
  ko: '완전히 다른 세계에서 온 네 명의 낯선 사람들 — 메탈을 사랑하는 스트리머, 애니메이션에 빠진 베이시스트, 틱톡 코스플레이어, 그리고 전 J-팝 아이돌. 하나의 유튜브 프로젝트가 그들을 모았습니다. 그 다음에 일어난 일은 진짜였습니다.',
  ms: 'Empat orang asing dari dunia yang sama sekali berbeza — seorang penstrim pencinta metal, seorang pemain bas yang terobsesi anime, seorang cosplayer TikTok, dan bekas idol J-pop. Satu projek YouTube menyatukan mereka. Apa yang berlaku seterusnya adalah nyata.',
  ja: '全く異なる世界から来た4人の見知らぬ人 — メタル好きのストリーマー、アニメに夢中のベーシスト、TikTokコスプレイヤー、そして元J-popアイドル。1つのYouTubeプロジェクトが彼女たちを引き合わせました。その後に起きたことは本物でした。',
}

const originP1: LocalizedString = {
  en: 'It started with a question: what if you built a real band from scratch and let the internet watch? YouTube creator Kim Gye-ran had the idea in early 2022 — a documentary project that would follow every audition, every practice session, every moment of doubt and discovery. No scripting. No safety net.',
  ko: '모든 것은 하나의 질문에서 시작됐습니다: 밴드를 처음부터 만들고 인터넷이 지켜보게 하면 어떨까? 유튜브 크리에이터 김계란은 2022년 초에 이 아이디어를 떠올렸습니다 — 모든 오디션, 모든 연습, 모든 의심과 발견의 순간을 따라가는 다큐멘터리 프로젝트. 대본도 없고, 안전망도 없었습니다.',
  ms: 'Ia bermula dengan satu soalan: bagaimana jika anda membina band sebenar dari awal dan membiarkan internet menyaksikannya? Pencipta YouTube Kim Gye-ran mempunyai idea itu pada awal 2022 — projek dokumentari yang akan mengikuti setiap audisi, setiap sesi latihan, setiap saat keraguan dan penemuan. Tanpa skrip. Tanpa jaring keselamatan.',
  ja: 'それは一つの問いから始まりました：バンドをゼロから作り、インターネットに見守らせたらどうなるか？YouTubeクリエイターのキム・ゲランは2022年初頭にこのアイデアを思いつきました — すべてのオーディション、すべての練習、すべての迷いと発見の瞬間を追うドキュメンタリープロジェクト。脚本なし。セーフティネットなし。',
}

const originP2: LocalizedString = {
  en: 'The name came from the keyboard — Q, W, E, R — the four skill keys in League of Legends. Four keys, four skills, one champion. Inspired by Bocchi the Rock!, K-ON!, and Oshi no Ko, the project sought musicians who were already internet personalities: streamers, cosplayers, content creators. People whose lives already lived online. What emerged wasn\'t a manufactured group — it was lightning in a bottle.',
  ko: '이름은 키보드에서 왔습니다 — Q, W, E, R — 리그 오브 레전드의 네 가지 스킬 키. 네 개의 키, 네 가지 스킬, 하나의 챔피언. 봇치 더 록!, 케이온!, 최애의 아이에서 영감을 받아 프로젝트는 이미 인터넷 인물인 뮤지션들을 찾았습니다: 스트리머, 코스플레이어, 콘텐츠 크리에이터. 이미 온라인에서 살고 있는 사람들. 나온 결과물은 기획된 그룹이 아니었습니다 — 그것은 예상치 못한 기적이었습니다.',
  ms: 'Nama itu datang dari papan kekunci — Q, W, E, R — empat kekunci kemahiran dalam League of Legends. Empat kekunci, empat kemahiran, satu juara. Terinspirasi oleh Bocchi the Rock!, K-ON!, dan Oshi no Ko, projek ini mencari pemuzik yang sudah pun personaliti Internet: penstrim, cosplayer, pencipta kandungan. Orang yang hidupnya sudah dalam talian. Apa yang muncul bukan kumpulan buatan — ia adalah kilat dalam botol.',
  ja: '名前はキーボードから — Q、W、E、R — リーグ・オブ・レジェンドの4つのスキルキー。4つのキー、4つのスキル、1人のチャンピオン。ぼっち・ざ・ろっく！、けいおん！、推しの子にインスピレーションを受け、プロジェクトはすでにインターネットパーソナリティであるミュージシャンを探しました：ストリーマー、コスプレイヤー、コンテンツクリエイター。すでにオンラインで生きている人々。生まれたのは製造されたグループではありませんでした — それは奇跡的な出会いでした。',
}

const inspirations = [
  { title: 'Bocchi the Rock!', type: 'Anime' },
  { title: 'K-ON!', type: 'Anime' },
  { title: 'Oshi no Ko', type: 'Anime' },
  { title: 'YOASOBI', type: 'Music' },
  { title: 'League of Legends', type: 'Game' },
  { title: 'Slipknot', type: 'Music' },
]
</script>
