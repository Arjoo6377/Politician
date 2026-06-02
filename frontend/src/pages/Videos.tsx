import { useState } from 'react'
import { Card } from '../components/ui/Card'
import { Icon, type IconName } from '../components/ui/Icon'
import { PageHero } from '../components/ui/PageHero'
import { SectionHeading } from '../components/ui/SectionHeading'
import { images } from '../data/images'
import { videos } from '../data/staticContent'

const categoryLabels: Record<string, string> = {
  'tv-debate': 'TV Debates',
  interview: 'Interviews',
  'public-speech': 'Public Speeches',
}

const categoryIcons: Record<string, IconName> = {
  'tv-debate': 'tv',
  interview: 'mic',
  'public-speech': 'megaphone',
}

export function VideosPage() {
  const [filter, setFilter] = useState<string>('all')
  const [activeVideo, setActiveVideo] = useState(videos[0])

  const filtered = filter === 'all' ? videos : videos.filter((v) => v.category === filter)

  return (
    <>
      <PageHero
        title="Video Gallery"
        subtitle="Latest debates, interviews, and speeches"
        image={images.videosBanner}
      />

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          {activeVideo && (
            <div className="mb-12">
              <a
                href={activeVideo.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-video rounded-xl overflow-hidden shadow-lg mb-4 bg-gray-900 group relative"
              >
                <img
                  src={activeVideo.thumbnail}
                  alt={activeVideo.title}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-orange-600 rounded-full flex items-center justify-center">
                    <Icon name="play" size={24} className="text-white ml-1" />
                  </div>
                </div>
              </a>
              <p className="text-gray-500 mt-1">
                {categoryLabels[activeVideo.category]} · {new Date(activeVideo.date).toLocaleDateString('en-IN')}
              </p>
              <a
                href={activeVideo.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg bg-orange-600 text-white font-medium hover:bg-orange-700 transition-colors"
              >
                <Icon name="play" size={16} /> Watch on Instagram
              </a>
            </div>
          )}

          <div className="flex flex-wrap gap-2 mb-8">
            {['all', 'tv-debate', 'interview', 'public-speech'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat ? 'bg-orange-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat === 'all' ? 'All Videos' : categoryLabels[cat]}
              </button>
            ))}
          </div>

          <SectionHeading title="Video Library" centered={false} />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((video) => (
              <Card
                key={video.id}
                className="cursor-pointer"
                hover
              >
                <div className="w-full text-left">
                  <div className="aspect-video bg-gray-900 rounded-lg mb-4 relative overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 bg-orange-600 rounded-full flex items-center justify-center">
                        <Icon name="play" size={24} className="text-white ml-1" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name={categoryIcons[video.category] ?? 'play'} size={16} className="text-orange-600" />
                    <span className="text-xs font-semibold text-orange-600">{categoryLabels[video.category]}</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">{new Date(video.date).toLocaleDateString('en-IN')}</p>
                  <div className="flex gap-2 mt-4">
                    <button
                      onClick={() => setActiveVideo(video)}
                      className="px-3 py-1.5 text-sm rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Preview
                    </button>
                    <a
                      href={video.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 text-sm rounded-lg bg-orange-600 text-white hover:bg-orange-700 transition-colors"
                    >
                      <Icon name="play" size={14} /> Open Video
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
