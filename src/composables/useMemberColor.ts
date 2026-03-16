import { computed } from 'vue'
import { getMemberBySlug } from '@/data/members'

export function useMemberColor(slug: string | (() => string)) {
  const resolvedSlug = typeof slug === 'function' ? computed(slug) : { value: slug }

  const member = computed(() => getMemberBySlug(resolvedSlug.value))
  const color = computed(() => member.value?.color ?? '#C1272D')

  const cssVars = computed(() => ({
    '--member-color': color.value,
  }))

  return { member, color, cssVars }
}
