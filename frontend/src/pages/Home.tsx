import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon, type IconName } from '../components/ui/Icon'
import { InstagramIcon } from '../components/ui/SocialIcons'
import { ProfileImage } from '../components/ui/ProfileImage'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { SectionHeading } from '../components/ui/SectionHeading'
import { getNewsImage, images } from '../data/images'
import { newsItems } from '../data/staticData'
import { featuredVideos, keyHighlights, profile } from '../data/staticContent'

const quickNavItems: { label: string; path: string; icon: IconName; image: string }[] = [
  { label: 'Video Gallery', path: '/videos', icon: 'video', image: images.quickNav.gallery },
  { label: 'Photo Gallery', path: '/gallery', icon: 'image', image: images.quickNav.publicWork },
  { label: 'Media Coverage', path: '/media', icon: 'newspaper', image: images.quickNav.media },
  { label: 'Announcements', path: '/news', icon: 'megaphone', image: images.quickNav.news },
]

const videoCategoryLabels: Record<string, string> = {
  'tv-debate': 'TV Debates',
  interview: 'Interviews',
  'public-speech': 'Public Speeches',
}

const latestNews = newsItems.slice(0, 3)

export function Home() {
  const [activeHomeVideo, setActiveHomeVideo] = useState(featuredVideos[0])
  const [playingHomeVideo, setPlayingHomeVideo] = useState<(typeof featuredVideos)[number] | null>(null)

  const socialLinks = [
    { icon: InstagramIcon, href: profile.social.instagram, label: 'Instagram', handle: '@rajeevjaitly' },
  ].filter((s) => s.href)
  const getEmbedUrl = (url: string) => `${url.replace(/\/$/, '')}/embed`

  useEffect(() => {
    document.body.style.overflow = playingHomeVideo ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [playingHomeVideo])

  return (
    <>
      <section className="relative text-white overflow-hidden min-h-[420px] md:min-h-[460px] flex items-center">
        <img src={images.heroBanner} alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/92 via-orange-800/88 to-orange-900/90" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-16 w-full">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-orange-100 font-medium mb-2">{profile.party}</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3">{profile.name}</h1>
              <p className="text-xl md:text-2xl text-orange-100 mb-1">{profile.designation}</p>
              <p className="text-lg text-orange-50 mb-5">{profile.constituency}</p>
              <p className="text-lg leading-relaxed mb-6 max-w-xl">{profile.intro}</p>
              <div className="flex flex-wrap gap-4">
                <Button to="/about" variant="secondary" size="lg">
                  Know More <Icon name="arrow-right" size={18} />
                </Button>
                <Button to="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <ProfileImage size="lg" bordered />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="group relative rounded-xl overflow-hidden border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all aspect-[4/3]"
              >
                <img src={item.image} alt={item.label} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 flex items-center gap-2">
                  <div className="p-1.5 bg-white/20 backdrop-blur rounded-lg">
                    <Icon name={item.icon} size={16} className="text-white" />
                  </div>
                  <span className="font-semibold text-white text-sm">{item.label}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading compact title="Key Highlights" subtitle="Leadership, communication, and nation-building" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyHighlights.map((item) => (
              <Card key={item.title} className="!p-0 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading compact title="Video Gallery" subtitle="Latest debates, interviews & speeches" />

          <div className="rounded-3xl border border-gray-200 bg-white px-4 py-8 md:px-8 md:py-10">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-4xl font-bold text-gray-900">
                Follow <span className="text-orange-600">@rajeevjaitly</span>
              </h3>
              <p className="text-gray-600 mt-3">Latest debates, interviews, and public speeches in one place.</p>
            </div>

            <div className="overflow-x-auto pb-3">
              <div className="flex gap-4 md:gap-6 min-w-max px-1">
                {featuredVideos.map((video) => (
                  <button
                    type="button"
                    key={video.id}
                    onMouseEnter={() => setActiveHomeVideo(video)}
                    onFocus={() => setActiveHomeVideo(video)}
                    onClick={() => {
                      setActiveHomeVideo(video)
                      setPlayingHomeVideo(video)
                    }}
                    className={`group relative w-[210px] md:w-[230px] h-[370px] md:h-[410px] rounded-2xl overflow-hidden shadow-md transition-all ${
                      activeHomeVideo?.id === video.id
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
                        {videoCategoryLabels[video.category]} · {new Date(video.date).toLocaleDateString('en-IN')}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {activeHomeVideo && (
              <div className="text-center mt-7">
                <button
                  type="button"
                  onClick={() => setPlayingHomeVideo(activeHomeVideo)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors"
                >
                  <Icon name="play" size={16} />
                  Watch on Instagram
                </button>
              </div>
            )}
          </div>
          <div className="text-center mt-6">
            <Button to="/videos" variant="outline">View All Videos</Button>
          </div>
        </div>
      </section>

      <section className="pt-4 pb-10 md:pt-6 md:pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading compact title="Announcements" subtitle="Latest updates, official statements, and important notices" />
          {latestNews.length === 0 ? (
            <p className="text-center text-gray-500">No announcements yet. Check back soon.</p>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {latestNews.map((item) => (
                <Card key={item.id} className="!p-0 overflow-hidden">
                  <img
                    src={getNewsImage(item.category, item.image)}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full mb-3 capitalize">
                      {item.category.replace('-', ' ')}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.excerpt}</p>
                    <p className="text-xs text-gray-400 mb-4">{new Date(item.date).toLocaleDateString('en-IN')}</p>
                    <Link to={`/news/${item.id}`} className="text-orange-600 font-semibold text-sm hover:underline">
                      Read More →
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          )}
          <div className="text-center mt-6">
            <Button to="/news" variant="outline">All Announcements</Button>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-10 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <SectionHeading
            compact
            light
            title="Connect With Us"
            subtitle="Follow on social media for daily updates and public messages"
          />
          <div className="flex justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1.5 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
              >
                <social.icon size={24} />
                <span className="text-sm font-medium">{social.label}</span>
                {'handle' in social && social.handle && (
                  <span className="text-xs text-orange-100">{social.handle}</span>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

      {playingHomeVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/75 p-4 md:p-8 flex items-center justify-center"
          onClick={() => setPlayingHomeVideo(null)}
        >
          <div
            className="relative w-full max-w-md md:max-w-lg"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setPlayingHomeVideo(null)}
              className="absolute -top-12 right-0 text-white/90 hover:text-white"
              aria-label="Close video"
            >
              <Icon name="x" size={28} />
            </button>
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-black aspect-[9/16]">
              <iframe
                src={getEmbedUrl(playingHomeVideo.sourceUrl)}
                title={playingHomeVideo.title}
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
