import { useCallback, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Icon } from '../components/ui/Icon'
import { getGalleryAlbum } from '../data/staticData'

export function GalleryDetail() {
  const { id } = useParams()
  const album = id ? getGalleryAlbum(id) : undefined
  const [lightbox, setLightbox] = useState<number | null>(null)

  const closeLightbox = useCallback(() => setLightbox(null), [])

  const goPrev = useCallback(() => {
    if (lightbox === null || !album) return
    setLightbox((lightbox - 1 + album.images.length) % album.images.length)
  }, [lightbox, album])

  const goNext = useCallback(() => {
    if (lightbox === null || !album) return
    setLightbox((lightbox + 1) % album.images.length)
  }, [lightbox, album])

  useEffect(() => {
    if (lightbox === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox, closeLightbox, goPrev, goNext])

  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  if (!album) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <Icon name="image" size={52} className="mx-auto text-gray-300 mb-4" />
        <p className="text-gray-500 text-lg mb-4">Album not found.</p>
        <Link to="/gallery" className="text-orange-600 hover:underline font-semibold">
          ← Back to Gallery
        </Link>
      </div>
    )
  }

  return (
    <>
      <section
        className="relative text-white py-14 md:py-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #7c2d12 0%, #c2410c 50%, #9a3412 100%)' }}
      >
        <img
          src={album.coverImage}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />
        <div className="relative max-w-7xl mx-auto px-4">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-orange-200 hover:text-white mb-6 text-sm font-medium transition-colors"
          >
            <Icon name="arrow-left" size={16} /> Back to Gallery
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold mb-3">{album.title}</h1>
          <p className="text-orange-100 text-lg max-w-2xl">{album.description}</p>
          <div className="mt-4 flex items-center gap-3 text-orange-200 text-sm">
            <Icon name="image" size={16} />
            <span>{album.images.length} photos</span>
            <span className="text-orange-400">·</span>
            <Icon name="calendar" size={16} />
            <span>{new Date(album.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-semibold text-gray-700 hover:bg-orange-600 hover:text-white hover:border-orange-600 shadow-sm transition-all duration-200"
            >
              <Icon name="arrow-left" size={16} />
              Back to Gallery
            </Link>
            <span className="text-sm text-gray-400">{album.images.length} photos</span>
          </div>

          <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 md:gap-4 space-y-3 md:space-y-4">
            {album.images.map((img, idx) => (
              <button
                key={img.id}
                type="button"
                onClick={() => setLightbox(idx)}
                className="block w-full break-inside-avoid rounded-xl overflow-hidden cursor-pointer group relative shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={img.url}
                  alt={img.caption || `Photo ${idx + 1}`}
                  loading="lazy"
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <Icon name="eye" size={22} className="text-white" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex flex-col"
          onClick={closeLightbox}
        >
          <div className="flex items-center justify-between px-4 py-3 shrink-0" onClick={(e) => e.stopPropagation()}>
            <span className="text-white/70 text-sm font-medium">
              {lightbox + 1} / {album.images.length}
            </span>
            <button
              type="button"
              onClick={closeLightbox}
              className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Close"
            >
              <Icon name="x" size={24} />
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center px-14 md:px-20 min-h-0" onClick={(e) => e.stopPropagation()}>
            <img
              src={album.images[lightbox].url}
              alt={album.images[lightbox].caption || `Photo ${lightbox + 1}`}
              className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
              style={{ maxHeight: 'calc(100vh - 120px)' }}
            />
          </div>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goPrev() }}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-3 md:p-4 bg-white/10 hover:bg-white/25 text-white rounded-full backdrop-blur-sm transition-colors"
            aria-label="Previous photo"
          >
            <Icon name="arrow-left" size={22} />
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goNext() }}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-3 md:p-4 bg-white/10 hover:bg-white/25 text-white rounded-full backdrop-blur-sm transition-colors"
            aria-label="Next photo"
          >
            <Icon name="arrow-right" size={22} />
          </button>

          <div className="shrink-0 px-4 pb-4 pt-2 flex justify-center gap-2 overflow-x-auto" onClick={(e) => e.stopPropagation()}>
            {album.images.map((img, idx) => (
              <button
                key={img.id}
                type="button"
                onClick={() => setLightbox(idx)}
                className={`shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-lg overflow-hidden border-2 transition-all ${
                  idx === lightbox ? 'border-orange-500 scale-110' : 'border-transparent opacity-50 hover:opacity-80'
                }`}
              >
                <img src={img.url} alt="" className="w-full h-full object-cover" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
