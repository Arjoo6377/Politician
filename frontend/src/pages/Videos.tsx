import { useState } from 'react'
import { Mic, Megaphone, Play, Tv } from 'lucide-react'
import { Card } from '../components/ui/Card'
import { PageHero } from '../components/ui/PageHero'
import { SectionHeading } from '../components/ui/SectionHeading'
import { images } from '../data/images'
import { videos } from '../data/staticContent'

const categoryLabels: Record<string, string> = {
  speech: 'Speech',
  interview: 'Interview',
  press: 'Press Conference',
  campaign: 'Campaign',
}

const categoryIcons: Record<string, typeof Play> = {
  speech: Megaphone,
  interview: Mic,
  press: Tv,
  campaign: Megaphone,
}

export function VideosPage() {
  const [filter, setFilter] = useState<string>('all')
  const [activeVideo, setActiveVideo] = useState(videos[0])

  const filtered = filter === 'all' ? videos : videos.filter((v) => v.category === filter)

  return (
    <>
      <PageHero
        title="Videos & Speeches"
        subtitle="Speeches, interviews, press conferences, and campaign videos"
        image={images.videosBanner}
      />

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          {activeVideo && (
            <div className="mb-12">
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg mb-4">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.youtubeId}`}
                  title={activeVideo.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{activeVideo.title}</h2>
              <p className="text-gray-500 mt-1">
                {categoryLabels[activeVideo.category]} · {new Date(activeVideo.date).toLocaleDateString('en-IN')}
              </p>
            </div>
          )}

          <div className="flex flex-wrap gap-2 mb-8">
            {['all', 'speech', 'interview', 'press', 'campaign'].map((cat) => (
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
            {filtered.map((video) => {
              const Icon = categoryIcons[video.category] || Play
              return (
                <Card
                  key={video.id}
                  className="cursor-pointer"
                  hover
                >
                  <button className="w-full text-left" onClick={() => setActiveVideo(video)}>
                    <div className="aspect-video bg-gray-900 rounded-lg mb-4 relative overflow-hidden">
                      <img
                        src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover opacity-80"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 bg-orange-600 rounded-full flex items-center justify-center">
                          <Play size={24} className="text-white ml-1" fill="white" />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon size={16} className="text-orange-600" />
                      <span className="text-xs font-semibold text-orange-600">{categoryLabels[video.category]}</span>
                    </div>
                    <h3 className="font-bold text-gray-900">{video.title}</h3>
                    <p className="text-sm text-gray-400 mt-1">{new Date(video.date).toLocaleDateString('en-IN')}</p>
                  </button>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
