import { Icon, type IconName } from '../components/ui/Icon'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { PageHero } from '../components/ui/PageHero'
import { ProfileImage } from '../components/ui/ProfileImage'
import { SectionHeading } from '../components/ui/SectionHeading'
import { images } from '../data/images'
import { aboutContent, keyHighlights, profile } from '../data/staticContent'

const quickFacts: { icon: IconName; label: string; value: string }[] = [
  { icon: 'mic', label: 'Role', value: profile.designation },
  { icon: 'flag', label: 'Party', value: profile.party },
  { icon: 'eye', label: 'Mission', value: 'Viksit Bharat' },
  { icon: 'users', label: 'Focus', value: 'Public Engagement' },
]

const highlightIcons: IconName[] = ['award', 'mic', 'megaphone', 'users']

const focusAreas = [
  {
    icon: 'tv' as IconName,
    title: 'National Spokesperson',
    image: images.media.debate,
    description:
      "As the BJP's National Spokesperson, Rajeev Jaitly represents the party across television debates, interviews, press conferences, and media interactions — communicating policy perspectives and addressing important public issues on national platforms.",
  },
  {
    icon: 'eye' as IconName,
    title: 'Vision — Viksit Bharat',
    image: images.highlights.healthcare,
    description: aboutContent.vision,
  },
]

export function About() {
  return (
    <>
      <PageHero
        title={`About ${profile.name}`}
        subtitle={profile.tagline}
        image={images.aboutBanner}
      />

      <section className="relative z-10 -mt-8 md:-mt-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {quickFacts.map((fact) => (
              <div
                key={fact.label}
                className="bg-white rounded-xl border border-gray-200 shadow-md p-4 md:p-5 flex items-start gap-3"
              >
                <div className="p-2.5 bg-orange-100 rounded-lg shrink-0">
                  <Icon name={fact.icon} size={20} className="text-orange-700" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wide text-orange-600 mb-0.5">
                    {fact.label}
                  </p>
                  <p className="text-sm md:text-base font-bold text-gray-900 leading-snug">{fact.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5">
              <div className="relative max-w-md mx-auto lg:mx-0">
                <div className="absolute -inset-3 bg-gradient-to-br from-orange-200 to-orange-50 rounded-3xl -z-10" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-600/10 rounded-2xl -z-10" />
                <ProfileImage size="xl" className="rounded-2xl shadow-2xl w-full" bordered />
                <div className="absolute -bottom-5 left-4 right-4 md:left-6 md:right-6 bg-white rounded-xl border border-gray-200 shadow-lg px-4 py-3">
                  <p className="font-bold text-gray-900">{profile.name}</p>
                  <p className="text-sm text-orange-600">{profile.designation}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 lg:pt-4">
              <p className="text-orange-600 font-semibold mb-2">{profile.party}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                A trusted voice for the nation
              </h2>
              <blockquote className="border-l-4 border-orange-600 pl-5 py-1 mb-6 text-lg md:text-xl text-gray-700 italic">
                &ldquo;{profile.tagline}&rdquo;
              </blockquote>
              <p className="text-gray-700 leading-relaxed text-lg mb-5">{aboutContent.introduction}</p>
              <p className="text-gray-600 leading-relaxed">{aboutContent.politicalBackground}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            title="Role & Vision"
            subtitle="Representing the party nationally while working towards a developed India"
          />

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {focusAreas.map((area) => (
              <Card key={area.title} hover className="!p-0 overflow-hidden group">
                <div className="relative h-52 md:h-56 overflow-hidden">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center gap-3">
                    <div className="p-2.5 bg-orange-600 rounded-lg shadow-lg">
                      <Icon name={area.icon} size={22} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{area.title}</h3>
                  </div>
                </div>
                <div className="p-6 md:p-7">
                  <p className="text-gray-600 leading-relaxed">{area.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            title="Key Highlights"
            subtitle="Areas of leadership and public contribution"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyHighlights.map((item, index) => (
              <Card key={item.title} hover className="!p-0 overflow-hidden h-full flex flex-col">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 w-9 h-9 bg-white/95 rounded-lg flex items-center justify-center shadow-sm">
                    <span className="text-sm font-bold text-orange-700">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-1.5 bg-orange-100 rounded-md">
                      <Icon name={highlightIcons[index] ?? 'award'} size={16} className="text-orange-700" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 leading-snug">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-700 via-orange-600 to-orange-800 text-white px-6 py-10 md:px-12 md:py-14">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-white rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white rounded-full blur-3xl" />
            </div>
            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="max-w-xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">Connect with Rajeev Jaitly</h2>
                <p className="text-orange-100 text-lg leading-relaxed">
                  For media inquiries, event invitations, or general communication — reach out or explore recent
                  coverage and public engagements.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <Button
                  to="/contact"
                  variant="primary"
                  size="lg"
                  className="bg-gray-900 text-white hover:bg-gray-800 shadow-lg"
                >
                  Contact Us
                  <Icon name="arrow-right" size={18} />
                </Button>
                <Button
                  to="/media"
                  variant="primary"
                  size="lg"
                  className="bg-gray-900 text-white hover:bg-gray-800 shadow-lg"
                >
                  Media Coverage
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
