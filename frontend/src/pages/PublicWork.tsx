import { Icon, type IconName } from '../components/ui/Icon'
import { Card } from '../components/ui/Card'
import { PageHero } from '../components/ui/PageHero'
import { SectionHeading } from '../components/ui/SectionHeading'
import { images } from '../data/images'
import { keyHighlights } from '../data/staticContent'

const highlightIcons: IconName[] = ['award', 'mic', 'megaphone', 'users']

export function PublicWorkPage() {
  return (
    <>
      <PageHero
        title="Key Highlights"
        subtitle="Leadership, communication, and nation-building initiatives"
        image={images.publicWorkBanner}
      />

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            title="Leadership & Contribution"
            subtitle="National spokesperson, media representation, and public engagement"
          />

          <div className="grid md:grid-cols-2 gap-6">
            {keyHighlights.map((item, i) => (
              <Card key={item.title} className="!p-0 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-52 object-cover" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <Icon name={highlightIcons[i] ?? 'award'} className="text-orange-700" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
