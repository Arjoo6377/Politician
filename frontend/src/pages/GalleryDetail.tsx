import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, X } from 'lucide-react'
import { api } from '../api/client'
import type { GalleryAlbum } from '../types'

export function GalleryDetail() {
  const { id } = useParams()
  const [album, setAlbum] = useState<GalleryAlbum | null>(null)
  const [lightbox, setLightbox] = useState<number | null>(null)

  useEffect(() => {
    if (id) {
      api.getGalleryAlbum(id).then(setAlbum).catch(() => setAlbum(null))
    }
  }, [id])

  if (!album) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <p className="text-gray-500">Album not found.</p>
        <Link to="/gallery" className="text-orange-600 hover:underline mt-4 inline-block">
          Back to Gallery
        </Link>
      </div>
    )
  }

  return (
    <>
      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <Link to="/gallery" className="inline-flex items-center gap-2 text-orange-200 hover:text-white mb-4 text-sm">
            <ArrowLeft size={16} /> Back to Gallery
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{album.title}</h1>
          <p className="text-gray-300">{album.description}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {album.images.map((img, idx) => (
              <button
                key={img.id}
                onClick={() => setLightbox(idx)}
                className="aspect-square rounded-lg overflow-hidden cursor-pointer group"
              >
                <img
                  src={img.url}
                  alt={img.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-4 right-4 text-white p-2" onClick={() => setLightbox(null)}>
            <X size={28} />
          </button>
          <img
            src={album.images[lightbox].url}
            alt={album.images[lightbox].caption}
            className="max-h-[85vh] max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          {album.images[lightbox].caption && (
            <p className="absolute bottom-6 text-white text-center">{album.images[lightbox].caption}</p>
          )}
        </div>
      )}
    </>
  )
}
