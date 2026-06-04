import { useState } from 'react'
import { Card } from '../components/ui/Card'
import { Icon } from '../components/ui/Icon'
import { PageHero } from '../components/ui/PageHero'
import { SectionHeading } from '../components/ui/SectionHeading'
import {
  getYouTubeEmbedUrl,
  getYouTubeVideoId,
  ReelPlayerModal,
} from '../components/ui/ReelPlayerModal'
import { images } from '../data/images'
import {
  featuredChannels,
  mediaCoverageFooter,
  mediaCoverageIntro,
} from '../data/staticContent'

type FeaturedChannel = (typeof featuredChannels)[number]

export function MediaCoveragePage() {
  const [playingChannel, setPlayingChannel] = useState<FeaturedChannel | null>(null)

  return (
    <>
      <PageHero
        title="Media Coverage"
        subtitle={mediaCoverageIntro}
        image={images.mediaBanner}
      />

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading title="Featured Channels" />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredChannels.map((channel) => {
              const videoId = channel.videoUrl ? getYouTubeVideoId(channel.videoUrl) : undefined
              const hasVideo = Boolean(videoId)

              return (
                <Card key={channel.name} className="flex flex-col h-full overflow-hidden !p-0">
                  {hasVideo ? (
                    <button
                      type="button"
                      onClick={() => setPlayingChannel(channel)}
                      className="relative block w-full aspect-video overflow-hidden group"
                      aria-label={`Watch ${channel.name} video`}
                    >
                      <img
                        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                        alt=""
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <span className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors" />
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="w-14 h-14 rounded-full bg-orange-600 text-white flex items-center justify-center shadow-lg group-hover:bg-orange-500 transition-colors">
                          <Icon name="play" size={28} className="ml-1" />
                        </span>
                      </span>
                    </button>
                  ) : (
                    <div className="aspect-video bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                        <Icon name="tv" className="text-orange-700" size={32} />
                      </div>
                    </div>
                  )}

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{channel.name}</h3>
                    <p className="text-gray-600 flex-1">{channel.description}</p>
                    {hasVideo ? (
                      <button
                        type="button"
                        onClick={() => setPlayingChannel(channel)}
                        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange-700 hover:text-orange-600"
                      >
                        <Icon name="play" size={18} />
                        Watch Video
                      </button>
                    ) : null}
                  </div>
                </Card>
              )
            })}
          </div>

          <p className="mt-12 text-center text-gray-600 text-lg max-w-3xl mx-auto">
            {mediaCoverageFooter}
          </p>
        </div>
      </section>

      {playingChannel?.videoUrl && (
        <ReelPlayerModal
          embedUrl={getYouTubeEmbedUrl(playingChannel.videoUrl)}
          title={playingChannel.name}
          variant="youtube"
          onClose={() => setPlayingChannel(null)}
        />
      )}
    </>
  )
}
