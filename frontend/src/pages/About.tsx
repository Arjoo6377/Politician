import { Award, BookOpen, Eye, Flag, Target } from 'lucide-react'
import { Card } from '../components/ui/Card'
import { PageHero } from '../components/ui/PageHero'
import { ProfileImage } from '../components/ui/ProfileImage'
import { SectionHeading } from '../components/ui/SectionHeading'
import { images } from '../data/images'
import { aboutContent, profile } from '../data/staticContent'

export function About() {
  return (
    <>
      <PageHero
        title={`About ${profile.name.split(' ').slice(-1)[0]}`}
        subtitle={profile.tagline}
        image={images.aboutBanner}
      />

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <ProfileImage size="xl" className="rounded-2xl shadow-xl mx-auto lg:mx-0" bordered />
            <div>
              <SectionHeading title="Introduction" centered={false} />
              <p className="text-gray-700 leading-relaxed text-lg">{aboutContent.introduction}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="!p-0 overflow-hidden">
              <img src={images.publicWork.health} alt="Political work" className="w-full h-40 object-cover" />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Flag className="text-orange-600" size={28} />
                  <h3 className="text-xl font-bold">Political Background</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{aboutContent.politicalBackground}</p>
              </div>
            </Card>
            <Card className="!p-0 overflow-hidden">
              <img src={images.highlights.healthcare} alt="Public service" className="w-full h-40 object-cover" />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="text-orange-700" size={28} />
                  <h3 className="text-xl font-bold">Public Service Experience</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{aboutContent.publicService}</p>
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="text-orange-600" size={28} />
                <h3 className="text-xl font-bold">Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{aboutContent.vision}</p>
            </Card>
            <Card>
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-orange-700" size={28} />
                <h3 className="text-xl font-bold">Ideology</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{aboutContent.ideology}</p>
            </Card>
          </div>

          <SectionHeading title="Achievements" subtitle="Key milestones in public service journey" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {aboutContent.achievements.map((item, i) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200 overflow-hidden">
                <img
                  src={[images.highlights.roads, images.highlights.healthcare, images.highlights.youth][i % 3]}
                  alt=""
                  className="w-16 h-16 rounded-lg object-cover shrink-0"
                />
                <div className="flex items-start gap-2 flex-1">
                  <Award className="text-orange-600 shrink-0 mt-0.5" size={20} />
                  <p className="text-gray-700">{item}</p>
                </div>
              </div>
            ))}
          </div>

          <SectionHeading title="Responsibilities" subtitle="Current roles and committee memberships" />
          <div className="grid md:grid-cols-3 gap-6">
            {aboutContent.responsibilities.map((item) => (
              <Card key={item} className="text-center">
                <p className="font-semibold text-gray-800">{item}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
