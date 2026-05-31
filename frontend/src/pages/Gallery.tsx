import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Image } from 'lucide-react'
import { PageHero } from '../components/ui/PageHero'
import { api } from '../api/client'
import { images } from '../data/images'
import type { GalleryAlbum } from '../types'

const categoryLabels: Record<string, string> = {
  event: 'Event',
  'public-meeting': 'Public Meeting',
  media: 'Media Appearance',
  campaign: 'Campaign',
}

export function GalleryPage() {
  const [albums, setAlbums] = useState<GalleryAlbum[]>([])
  const [filter, setFilter] = useState<string>('all')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.getGallery()
      .then(setAlbums)
      .catch(() => setAlbums([]))
      .finally(() => setLoading(false))
  }, [])

  const filtered = filter === 'all' ? albums : albums.filter((a) => a.category === filter)

  return (
    <>
      <PageHero
        title="Photo Gallery"
        subtitle="Event-wise photos from public meetings, campaigns, and media appearances"
        image={images.galleryBanner}
      />

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {['all', 'event', 'public-meeting', 'media', 'campaign'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat === 'all' ? 'All' : categoryLabels[cat]}
              </button>
            ))}
          </div>

          {loading ? (
            <p className="text-center text-gray-500">Loading gallery...</p>
          ) : filtered.length === 0 ? (
            <div className="text-center py-16">
              <Image size={48} className="mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500">No albums found in this category.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((album) => (
                <Link
                  key={album.id}
                  to={`/gallery/${album.id}`}
                  className="group rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-video bg-gray-200 overflow-hidden">
                    <img
                      src={album.coverImage}
                      alt={album.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold px-2 py-1 bg-orange-100 text-orange-700 rounded-full">
                      {categoryLabels[album.category]}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mt-2 mb-1">{album.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">{album.description}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <Calendar size={14} />
                      {new Date(album.date).toLocaleDateString('en-IN')}
                      <span className="ml-auto">{album.images.length} photos</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
