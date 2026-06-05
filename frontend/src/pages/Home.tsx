import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon, type IconName } from '../components/ui/Icon'
import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from '../components/ui/SocialIcons'
import { ProfileImage } from '../components/ui/ProfileImage'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { getReelEmbedUrl, ReelPlayerModal } from '../components/ui/ReelPlayerModal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { images } from '../data/images'
import { aboutContent, featuredVideos, keyHighlights, profile } from '../data/staticContent'

const quickNavItems: { label: string; path: string; icon: IconName; image: string }[] = [
  { label: 'Video Gallery', path: '/videos', icon: 'video', image: images.quickNav.videos },
  { label: 'Photo Gallery', path: '/gallery', icon: 'image', image: images.quickNav.gallery },
  { label: 'Media Coverage', path: '/media', icon: 'newspaper', image: images.quickNav.media },
]

const videoCategoryLabels: Record<string, string> = {
  'tv-debate': 'TV Debates',
  interview: 'Interviews',
  'public-speech': 'Public Speeches',
}

export function Home() {
  const [activeHomeVideo, setActiveHomeVideo] = useState(featuredVideos[0])
  const [playingHomeVideo, setPlayingHomeVideo] = useState<(typeof featuredVideos)[number] | null>(null)

  const socialLinks = [
    { icon: FacebookIcon, href: profile.social.facebook, label: 'Facebook', handle: '' },
    { icon: TwitterIcon, href: profile.social.twitter, label: 'X (Twitter)', handle: '@RajeevJaitly' },
    { icon: InstagramIcon, href: profile.social.instagram, label: 'Instagram', handle: '@rajeevjaitly' },
    { icon: LinkedInIcon, href: profile.social.linkedin, label: 'LinkedIn', handle: '' },
  ].filter((s) => s.href)
  const getPreviewEmbedUrl = (url: string) => `${url.replace(/\/$/, '')}/embed`

  return (
    <>
      <section className="relative text-white overflow-hidden">
        <img src={images.heroBanner} alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/92 via-orange-800/88 to-orange-900/90" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-10 sm:py-12 md:py-16 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            <div className="min-w-0">
              <div className="grid grid-cols-[minmax(0,1fr)_clamp(7.5rem,32vw,10.5rem)] gap-x-3 sm:gap-x-4 items-start lg:block">
                <p className="text-orange-100 font-medium mb-2 text-sm sm:text-base col-start-1 row-start-1">
                  {profile.party}
                </p>
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight col-start-1 row-start-2 mb-0 lg:mb-2">
                  {profile.name}
                </h1>

                <div className="col-start-2 row-start-1 row-span-5 flex items-center justify-center lg:hidden">
                  <ProfileImage bordered className="!w-32 !h-32 sm:!w-36 sm:!h-36 md:!w-40 md:!h-40" />
                </div>

                <p className="text-lg sm:text-xl md:text-2xl text-orange-100 mb-1 mt-3 col-start-1 row-start-3 lg:mt-0">
                  {profile.designation}
                </p>
                <p className="text-base sm:text-lg text-orange-50 mb-3 sm:mb-4 col-start-1 row-start-4">
                  {profile.constituency}
                </p>
                <p className="text-base sm:text-lg font-semibold text-orange-100 mb-3 col-start-1 row-start-5 lg:row-auto italic">
                  &ldquo;{profile.tagline}&rdquo;
                </p>
                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed text-orange-50/95 col-start-1 row-start-6 col-span-2 lg:col-span-1 lg:row-auto mb-6">
                  <p>{aboutContent.introduction}</p>
                  <p>{aboutContent.politicalBackground}</p>
                </div>
                <div className="flex flex-wrap gap-3 sm:gap-4 col-start-1 row-start-7 col-span-2 lg:col-span-1 lg:row-auto">
                  <Button to="/contact" variant="secondary" size="lg">
                    Contact Us <Icon name="arrow-right" size={18} />
                  </Button>
                  <Button to="/media" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                    Media Coverage
                  </Button>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex justify-center lg:sticky lg:top-24">
              <ProfileImage size="lg" bordered />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {quickNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="group relative block min-h-[200px] sm:min-h-[220px] rounded-2xl overflow-hidden border border-gray-200 bg-gray-200 shadow-sm hover:border-orange-400 hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 flex items-center gap-3">
                  <div className="shrink-0 p-2.5 bg-orange-600/90 rounded-xl shadow-md">
                    <Icon name={item.icon} size={20} className="text-white" />
                  </div>
                  <span className="font-bold text-white text-base md:text-lg drop-shadow-sm">{item.label}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading compact title="Key Highlights" subtitle="Leadership, communication, and nation-building" />
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {keyHighlights.map((item) => (
              <Card key={item.title} className="!p-0 overflow-hidden h-full flex flex-col">
                <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                  <img
                    src={item.image}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{item.description}</p>
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
                      src={getPreviewEmbedUrl(video.sourceUrl)}
                      title={`${video.title} preview`}
                      className="w-full h-full pointer-events-none border-0"
                      loading="lazy"
                      allow="encrypted-media; picture-in-picture; web-share"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                    <div className="absolute left-3 right-3 bottom-3 text-left pointer-events-none">
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

      <section className="py-8 md:py-10 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <SectionHeading
            compact
            light
            title="Connect With Us"
            subtitle="Follow on social media for daily updates and public messages"
          />
          <div className="flex flex-wrap justify-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1.5 px-3 sm:px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors min-w-[72px]"
              >
                <social.icon size={22} />
                <span className="text-xs sm:text-sm font-medium leading-tight text-center">{social.label}</span>
                {'handle' in social && social.handle && (
                  <span className="text-[10px] sm:text-xs text-orange-100">{social.handle}</span>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

      {playingHomeVideo && (
        <ReelPlayerModal
          embedUrl={getReelEmbedUrl(playingHomeVideo.sourceUrl)}
          title={playingHomeVideo.title}
          onClose={() => setPlayingHomeVideo(null)}
        />
      )}
    </>
  )
}
