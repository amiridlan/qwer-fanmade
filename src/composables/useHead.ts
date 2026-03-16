import { watchEffect, onUnmounted } from 'vue'

interface HeadOptions {
  title?: string | (() => string)
  description?: string | (() => string)
}

export function useHead(opts: HeadOptions) {
  const originalTitle = document.title

  watchEffect(() => {
    const title = typeof opts.title === 'function' ? opts.title() : opts.title
    if (title) {
      document.title = `${title} — QWER`
    }

    const desc = typeof opts.description === 'function' ? opts.description() : opts.description
    if (desc) {
      let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null
      if (!meta) {
        meta = document.createElement('meta')
        meta.name = 'description'
        document.head.appendChild(meta)
      }
      meta.content = desc
    }
  })

  onUnmounted(() => {
    document.title = originalTitle
  })
}
