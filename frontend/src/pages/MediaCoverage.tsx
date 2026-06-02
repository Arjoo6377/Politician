import { Card } from '../components/ui/Card'
import { Icon, type IconName } from '../components/ui/Icon'
import { PageHero } from '../components/ui/PageHero'
import { SectionHeading } from '../components/ui/SectionHeading'
import { images } from '../data/images'
import { mediaCoverage } from '../data/staticContent'

const typeIcons: Record<string, IconName> = {
  'News Coverage': 'newspaper',
  'TV Debate': 'tv',
  Interview: 'mic',
  'Press Mention': 'radio',
  'Media Highlight': 'radio',
}

export function MediaCoveragePage() {
  return (
    <>
      <PageHero
        title="Media Coverage"
        subtitle="Featured news appearances, television discussions, interviews, and media mentions"
        image={images.mediaBanner}
      />

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading title="Media Presence" subtitle="Public appearances and media highlights" />

          <div className="space-y-6">
            {mediaCoverage.map((item) => (
              <Card key={item.title} className="!p-0 overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="md:w-72 lg:w-80 h-48 md:h-auto object-cover shrink-0"
                  />
                  <div className="p-6 flex-1">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="shrink-0 w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                        <Icon name={typeIcons[item.type] ?? 'newspaper'} className="text-orange-700" size={24} />
                      </div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-xs font-semibold px-3 py-1 bg-orange-100 text-orange-800 rounded-full">
                          {item.type}
                        </span>
                        <span className="text-sm text-gray-500">{item.outlet}</span>
                        <span className="text-sm text-gray-400">
                          {new Date(item.date).toLocaleDateString('en-IN')}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.excerpt}</p>
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
