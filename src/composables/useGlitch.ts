import { onMounted, onUnmounted, type Ref } from 'vue'
import gsap from 'gsap'

interface GlitchOptions {
  /** Trigger glitch on load */
  onLoad?: boolean
  /** Repeat glitch periodically (ms interval, 0 = off) */
  interval?: number
  /** Glitch burst duration in seconds */
  duration?: number
}

export function useGlitch(
  target: Ref<HTMLElement | null>,
  opts: GlitchOptions = {},
) {
  const {
    onLoad = true,
    interval = 6000,
    duration = 0.1,
  } = opts

  let intervalId: ReturnType<typeof setInterval> | null = null

  function triggerGlitch() {
    const el = target.value
    if (!el) return

    const tl = gsap.timeline()

    // RGB split burst
    tl.to(el, {
      textShadow: '3px 0 #C1272D, -3px 0 #4A8FE7',
      skewX: 2,
      duration: duration * 0.4,
      ease: 'power4.in',
    })
    .to(el, {
      textShadow: '-2px 0 #D4637A, 2px 0 #3DAF68',
      skewX: -1,
      duration: duration * 0.3,
      ease: 'none',
    })
    .to(el, {
      textShadow: '0 0 80px rgba(193,39,45,0.15), 0 0 40px rgba(193,39,45,0.05)',
      skewX: 0,
      duration: duration * 0.3,
      ease: 'power2.out',
    })
  }

  onMounted(() => {
    if (onLoad) {
      gsap.delayedCall(1.2, triggerGlitch)
    }
    if (interval > 0) {
      intervalId = setInterval(triggerGlitch, interval)
    }
  })

  onUnmounted(() => {
    if (intervalId !== null) clearInterval(intervalId)
  })

  return { triggerGlitch }
}
