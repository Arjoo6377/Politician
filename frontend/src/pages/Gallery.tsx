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

const categoryColors: Record<string, string> = {
  'media-interactions': 'bg-blue-600',
  'political-events': 'bg-orange-600',
  'public-engagement': 'bg-green-700',
  'leadership-moments': 'bg-purple-600',
}

export function GalleryPage() {
  const [filter, setFilter] = useState<string>('all')

  const filtered =
    filter === 'all' ? galleryAlbums : galleryAlbums.filter((a) => a.category === filter)

  return (
    <>
      <PageHero
        title="Photo Gallery"
        subtitle="Moments from political events, public engagement, media appearances, and leadership milestones"
        image={images.galleryBanner}
      />

      <section className="py-12 md:py-16 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {['all', 'political-events', 'public-engagement', 'media-interactions', 'leadership-moments'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                  filter === cat
                    ? 'bg-orange-600 text-white border-orange-600 shadow-md shadow-orange-200'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-orange-400 hover:text-orange-600'
                }`}
              >
                {cat === 'all' ? 'All Albums' : categoryLabels[cat]}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <Icon name="image" size={56} className="mx-auto text-gray-300 mb-4" />
              <p className="text-gray-400 text-lg">No albums in this category.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
              {filtered.map((album) => (
                <Link
                  key={album.id}
                  to={`/gallery/${album.id}`}
                  className="group relative overflow-hidden rounded-xl bg-gray-900 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={album.coverImage}
                      alt={album.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    <div className="absolute top-4 left-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white ${categoryColors[album.category] ?? 'bg-orange-600'}`}>
                        {categoryLabels[album.category] ?? album.category}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                      <Icon name="image" size={12} />
                      {album.images.length} photos
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-orange-600/90 backdrop-blur-sm text-white rounded-full px-5 py-2.5 font-semibold text-sm flex items-center gap-2 shadow-lg -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <Icon name="eye" size={16} />
                        View Album
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                      <h3 className="text-base font-bold text-white mb-0.5 leading-tight drop-shadow-sm line-clamp-1">
                        {album.title}
                      </h3>
                      <p className="text-gray-300 text-xs line-clamp-1">{album.description}</p>

                      <div className="flex items-center gap-1 mt-2">
                        {album.images.slice(0, 3).map((img, i) => (
                          <div
                            key={img.id}
                            className="w-6 h-6 rounded-md overflow-hidden border border-white/40 shrink-0"
                            style={{ marginLeft: i > 0 ? '-6px' : '0' }}
                          >
                            <img src={img.url} alt="" className="w-full h-full object-cover" loading="lazy" />
                          </div>
                        ))}
                        {album.images.length > 3 && (
                          <div
                            className="w-6 h-6 rounded-md bg-black/60 border border-white/40 flex items-center justify-center text-white text-[10px] font-bold shrink-0"
                            style={{ marginLeft: '-6px' }}
                          >
                            +{album.images.length - 3}
                          </div>
                        )}
                      </div>
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
