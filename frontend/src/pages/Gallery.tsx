import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../components/ui/Icon'
import { PageHero } from '../components/ui/PageHero'
import { images } from '../data/images'
import { galleryAlbums } from '../data/staticData'

const categoryLabels: Record<string, string> = {
  'media-interactions': 'Media Interactions',
  'political-events': 'Political Events',
  'public-engagement': 'Public Engagement',
  'leadership-moments': 'Leadership Moments',
}

export function GalleryPage() {
  const [filter, setFilter] = useState<string>('all')

  const filtered = filter === 'all' ? galleryAlbums : galleryAlbums.filter((a) => a.category === filter)

  return (
    <>
      <PageHero
        title="Photo Gallery"
        subtitle="Events, media appearances, and public engagement"
        image={images.galleryBanner}
      />

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {['all', 'media-interactions', 'political-events', 'public-engagement', 'leadership-moments'].map((cat) => (
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

          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <Icon name="image" size={48} className="mx-auto text-gray-300 mb-4" />
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
                      {categoryLabels[album.category] ?? album.category}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mt-2 mb-1">{album.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">{album.description}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <Icon name="calendar" size={14} />
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
