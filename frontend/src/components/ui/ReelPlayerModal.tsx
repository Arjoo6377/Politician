import { useEffect } from 'react'
import { Icon } from './Icon'

interface ReelPlayerModalProps {
  embedUrl: string
  title: string
  onClose: () => void
}

export function getReelEmbedUrl(url: string) {
  const base = `${url.replace(/\/$/, '')}/embed`
  return `${base}${base.includes('?') ? '&' : '?'}autoplay=1`
}

export function ReelPlayerModal({ embedUrl, title, onClose }: ReelPlayerModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Video player"
    >
      <div className="relative w-full max-w-[min(100%,400px)]" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-10 sm:-top-12 right-0 z-20 p-2 text-white hover:text-orange-200"
          aria-label="Close video"
        >
          <Icon name="x" size={28} />
        </button>
        <div className="reel-modal-shell">
          <iframe
            src={embedUrl}
            title={title}
            className="reel-modal-iframe"
            allow="autoplay; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}
