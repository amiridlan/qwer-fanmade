import { ref, computed, onUnmounted, watch } from 'vue'
import { Howl } from 'howler'

export interface AudioTrack {
  id: string
  title: string
  src: string
}

const currentTrack = ref<AudioTrack | null>(null)
const isPlaying = ref(false)
const progress = ref(0)
const duration = ref(0)
const volume = ref(0.8)

let howl: Howl | null = null
let rafId: number | null = null

function updateProgress() {
  if (howl && isPlaying.value) {
    const seek = howl.seek() as number
    progress.value = seek
    duration.value = howl.duration()
    rafId = requestAnimationFrame(updateProgress)
  }
}

function stopProgressLoop() {
  if (rafId !== null) {
    cancelAnimationFrame(rafId)
    rafId = null
  }
}

function destroyHowl() {
  stopProgressLoop()
  if (howl) {
    howl.unload()
    howl = null
  }
  isPlaying.value = false
  progress.value = 0
  duration.value = 0
}

export function useAudioPlayer() {
  function play(track: AudioTrack) {
    // If same track, just resume
    if (currentTrack.value?.id === track.id && howl) {
      if (!isPlaying.value) {
        howl.play()
        isPlaying.value = true
        updateProgress()
      }
      return
    }

    // New track
    destroyHowl()
    currentTrack.value = track

    howl = new Howl({
      src: [track.src],
      html5: true,
      volume: volume.value,
      onplay: () => {
        isPlaying.value = true
        duration.value = howl?.duration() ?? 0
        updateProgress()
      },
      onpause: () => {
        isPlaying.value = false
        stopProgressLoop()
      },
      onstop: () => {
        isPlaying.value = false
        progress.value = 0
        stopProgressLoop()
      },
      onend: () => {
        isPlaying.value = false
        progress.value = 0
        stopProgressLoop()
      },
      onloaderror: () => {
        isPlaying.value = false
        stopProgressLoop()
      },
    })

    howl.play()
  }

  function pause() {
    howl?.pause()
  }

  function togglePlayPause() {
    if (!howl || !currentTrack.value) return
    if (isPlaying.value) {
      pause()
    } else {
      howl.play()
    }
  }

  function stop() {
    destroyHowl()
    currentTrack.value = null
  }

  function seek(time: number) {
    if (howl) {
      howl.seek(time)
      progress.value = time
    }
  }

  function setVolume(v: number) {
    volume.value = Math.max(0, Math.min(1, v))
    if (howl) howl.volume(volume.value)
  }

  const progressPercent = computed(() =>
    duration.value > 0 ? (progress.value / duration.value) * 100 : 0
  )

  const formattedProgress = computed(() => formatTime(progress.value))
  const formattedDuration = computed(() => formatTime(duration.value))

  // Cleanup on component unmount
  onUnmounted(() => stopProgressLoop())

  return {
    currentTrack,
    isPlaying,
    progress,
    duration,
    volume,
    progressPercent,
    formattedProgress,
    formattedDuration,
    play,
    pause,
    togglePlayPause,
    stop,
    seek,
    setVolume,
  }
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${String(s).padStart(2, '0')}`
}
