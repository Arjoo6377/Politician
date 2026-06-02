import { Link } from 'react-router-dom'
import { ArrowRight, Megaphone, Newspaper, Play, Video } from 'lucide-react'
import { InstagramIcon } from '../components/ui/SocialIcons'
import { ProfileImage } from '../components/ui/ProfileImage'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { SectionHeading } from '../components/ui/SectionHeading'
import { getNewsImage, images } from '../data/images'
import { newsItems } from '../data/staticData'
import { featuredVideos, keyHighlights, profile } from '../data/staticContent'

const quickNavItems = [
  { label: 'Video Gallery', path: '/videos', icon: Video, image: images.quickNav.gallery },
  { label: 'Photo Gallery', path: '/gallery', icon: Megaphone, image: images.quickNav.publicWork },
  { label: 'Media Coverage', path: '/media', icon: Newspaper, image: images.quickNav.media },
  { label: 'Announcements', path: '/news', icon: Megaphone, image: images.quickNav.news },
]

const videoCategoryLabels: Record<string, string> = {
  'tv-debate': 'TV Debates',
  interview: 'Interviews',
  'public-speech': 'Public Speeches',
}

const latestNews = newsItems.slice(0, 3)

export function Home() {
  const socialLinks = [
    { icon: InstagramIcon, href: profile.social.instagram, label: 'Instagram', handle: '@rajeevjaitly' },
  ].filter((s) => s.href)

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
                  Know More <ArrowRight size={18} />
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
                    <item.icon size={16} className="text-white" />
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredVideos.map((video) => (
              <Link key={video.id} to="/videos" className="group">
                <Card className="!p-0 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gray-900 relative overflow-hidden">
                    <img
                      src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                        <Play size={20} className="text-white ml-0.5" fill="white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-semibold text-orange-600">{videoCategoryLabels[video.category]}</span>
                    <h3 className="font-bold text-gray-900 mt-1 line-clamp-2">{video.title}</h3>
                  </div>
                </Card>
              </Link>
            ))}
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
    </>
  )
}
