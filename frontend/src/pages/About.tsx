import { Eye, Flag } from 'lucide-react'
import { Card } from '../components/ui/Card'
import { PageHero } from '../components/ui/PageHero'
import { ProfileImage } from '../components/ui/ProfileImage'
import { SectionHeading } from '../components/ui/SectionHeading'
import { images } from '../data/images'
import { aboutContent, keyHighlights, profile } from '../data/staticContent'

export function About() {
  return (
    <>
      <PageHero
        title={`About ${profile.name}`}
        subtitle={profile.tagline}
        image={images.aboutBanner}
      />

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <ProfileImage size="xl" className="rounded-2xl shadow-xl mx-auto lg:mx-0" bordered />
            <div>
              <SectionHeading title="About" centered={false} />
              <p className="text-gray-700 leading-relaxed text-lg mb-6">{aboutContent.introduction}</p>
              <p className="text-gray-700 leading-relaxed text-lg">{aboutContent.politicalBackground}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="!p-0 overflow-hidden">
              <img src={images.media.debate} alt="Media representation" className="w-full h-40 object-cover" />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Flag className="text-orange-600" size={28} />
                  <h3 className="text-xl font-bold">National Spokesperson</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  As the BJP&apos;s National Spokesperson, Rajeev Jaitly represents the party across television debates,
                  interviews, press conferences, and media interactions — communicating policy perspectives and
                  addressing important public issues on national platforms.
                </p>
              </div>
            </Card>
            <Card className="!p-0 overflow-hidden">
              <img src={images.highlights.healthcare} alt="Viksit Bharat vision" className="w-full h-40 object-cover" />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="text-orange-600" size={28} />
                  <h3 className="text-xl font-bold">Vision — Viksit Bharat</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{aboutContent.vision}</p>
              </div>
            </Card>
          </div>

          <SectionHeading title="Key Highlights" subtitle="Areas of leadership and public contribution" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyHighlights.map((item) => (
              <Card key={item.title} className="!p-0 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-36 object-cover" />
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
