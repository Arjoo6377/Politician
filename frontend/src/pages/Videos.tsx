import { useEffect, useMemo, useState } from 'react'
import { Icon } from '../components/ui/Icon'
import { PageHero } from '../components/ui/PageHero'
import { images } from '../data/images'
import { videos } from '../data/staticContent'

const categoryLabels: Record<string, string> = {
  'tv-debate': 'TV Debates',
  interview: 'Interviews',
  'public-speech': 'Public Speeches',
}

export function VideosPage() {
  const [filter, setFilter] = useState<string>('all')
  const [activeVideo, setActiveVideo] = useState(videos[0])
  const [playingVideo, setPlayingVideo] = useState<(typeof videos)[number] | null>(null)

  const filtered = useMemo(
    () => (filter === 'all' ? videos : videos.filter((v) => v.category === filter)),
    [filter]
  )

  const activeIndex = filtered.findIndex((video) => video.id === activeVideo?.id)
  const reelDots = filtered.slice(0, 6)
  const getEmbedUrl = (url: string) => `${url.replace(/\/$/, '')}/embed`

  useEffect(() => {
    document.body.style.overflow = playingVideo ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [playingVideo])

  return (
    <>
      <PageHero
        title="Video Gallery"
        subtitle="Latest debates, interviews, and speeches"
        image={images.videosBanner}
      />

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8 flex flex-wrap gap-2 justify-center">
            {['all', 'tv-debate', 'interview', 'public-speech'].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setFilter(cat)
                  const list = cat === 'all' ? videos : videos.filter((v) => v.category === cat)
                  if (list.length > 0) {
                    setActiveVideo(list[0])
                  }
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat ? 'bg-orange-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat === 'all' ? 'All Videos' : categoryLabels[cat]}
              </button>
            ))}
          </div>

          <div className="rounded-3xl border border-gray-200 bg-gray-50 px-4 py-8 md:px-8 md:py-10 mb-14">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                Follow <span className="text-orange-600">@rajeevjaitly</span>
              </h2>
              <p className="text-gray-600 text-lg mt-3">
                Latest debates, interviews, and public speeches in one place.
              </p>
            </div>

            <div className="overflow-x-auto pb-3">
              <div className="flex gap-4 md:gap-6 min-w-max px-1">
                {filtered.map((video) => (
                  <button
                    type="button"
                    key={video.id}
                    onMouseEnter={() => setActiveVideo(video)}
                    onFocus={() => setActiveVideo(video)}
                    onClick={() => {
                      setActiveVideo(video)
                      setPlayingVideo(video)
                    }}
                    className={`group relative w-[210px] md:w-[230px] h-[370px] md:h-[410px] rounded-2xl overflow-hidden shadow-md transition-all ${
                      activeVideo?.id === video.id
                        ? 'ring-4 ring-orange-500 scale-[1.01]'
                        : 'hover:-translate-y-1 hover:shadow-xl'
                    }`}
                  >
                    <iframe
                      src={getEmbedUrl(video.sourceUrl)}
                      title={`${video.title} preview`}
                      className="w-full h-full pointer-events-none"
                      loading="lazy"
                      allow="encrypted-media; picture-in-picture; web-share"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/10" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center shadow-lg">
                        <Icon name="play" size={26} className="text-gray-900 ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute left-3 right-3 bottom-3 text-left">
                      <p className="text-white font-semibold text-sm line-clamp-2">{video.title}</p>
                      <p className="text-orange-100 text-xs mt-1">
                        {categoryLabels[video.category]} · {new Date(video.date).toLocaleDateString('en-IN')}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 mt-6 mb-6">
              {reelDots.map((video, index) => {
                const isActiveDot = video.id === activeVideo?.id || (activeIndex > 5 && index === 5)
                return (
                  <span
                    key={video.id}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      isActiveDot ? 'bg-orange-600' : 'bg-gray-300'
                    }`}
                  />
                )
              })}
            </div>

            {activeVideo && (
              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setPlayingVideo(activeVideo)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors"
                >
                  <Icon name="play" size={16} />
                  Watch on Instagram
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

      {playingVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/75 p-4 md:p-8 flex items-center justify-center"
          onClick={() => setPlayingVideo(null)}
        >
          <div
            className="relative w-full max-w-md md:max-w-lg"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setPlayingVideo(null)}
              className="absolute -top-12 right-0 text-white/90 hover:text-white"
              aria-label="Close video"
            >
              <Icon name="x" size={28} />
            </button>
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-black aspect-[9/16]">
              <iframe
                src={getEmbedUrl(playingVideo.sourceUrl)}
                title={playingVideo.title}
                className="w-full h-full"
                allow="autoplay; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
