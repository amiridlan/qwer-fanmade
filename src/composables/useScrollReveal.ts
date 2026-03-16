import { onMounted, onUnmounted, ref, type Ref } from 'vue'
import gsap from 'gsap'

interface ScrollRevealOptions {
  threshold?: number
  y?: number
  duration?: number
  delay?: number
  stagger?: number
}

export function useScrollReveal(
  target: Ref<HTMLElement | null>,
  opts: ScrollRevealOptions = {},
) {
  const {
    threshold = 0.15,
    y = 30,
    duration = 0.7,
    delay = 0,
    stagger = 0,
  } = opts

  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const el = target.value
    if (!el) return

    // Set initial state
    const children = stagger ? Array.from(el.children) : [el]
    gsap.set(children, { opacity: 0, y })

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(children, {
            opacity: 1,
            y: 0,
            duration,
            delay,
            stagger,
            ease: 'power3.out',
          })
          observer?.disconnect()
        }
      },
      { threshold },
    )

    observer.observe(el)
  })

  onUnmounted(() => observer?.disconnect())
}

/**
 * Directive-style: returns a ref to attach to an element.
 * The element and its direct children will reveal on scroll.
 */
export function useRevealRef(opts: ScrollRevealOptions = {}) {
  const el = ref<HTMLElement | null>(null)
  useScrollReveal(el, opts)
  return el
}
