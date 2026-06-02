import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../components/ui/Icon'
import { PageHero } from '../components/ui/PageHero'
import { Card } from '../components/ui/Card'
import { getNewsImage, images } from '../data/images'
import { newsItems } from '../data/staticData'

const categoryLabels: Record<string, string> = {
  announcement: 'Announcement',
  'press-release': 'Press Release',
  event: 'Event Update',
  message: 'Public Message',
}

export function NewsPage() {
  const [filter, setFilter] = useState<string>('all')

  const filtered = filter === 'all' ? newsItems : newsItems.filter((n) => n.category === filter)

  return (
    <>
      <PageHero
        title="Announcements"
        subtitle="Latest updates, official statements, upcoming events, and important notices"
        image={images.newsBanner}
      />

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {['all', 'announcement', 'press-release', 'event', 'message'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat ? 'bg-orange-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat === 'all' ? 'All' : categoryLabels[cat]}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <Icon name="megaphone" size={48} className="mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500">No announcements found.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((item) => (
                <Card key={item.id} className="!p-0 overflow-hidden">
                  <img
                    src={getNewsImage(item.category, item.image)}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full mb-3">
                    {categoryLabels[item.category]}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Icon name="calendar" size={14} />
                      {new Date(item.date).toLocaleDateString('en-IN')}
                    </span>
                    <Link to={`/news/${item.id}`} className="text-orange-600 font-semibold text-sm hover:underline">
                      Read More →
                    </Link>
                  </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
