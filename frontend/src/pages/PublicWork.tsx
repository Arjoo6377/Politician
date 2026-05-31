import { Building, Heart, Megaphone, Users } from 'lucide-react'
import { Card } from '../components/ui/Card'
import { PageHero } from '../components/ui/PageHero'
import { SectionHeading } from '../components/ui/SectionHeading'
import { images } from '../data/images'
import { publicWork } from '../data/staticContent'

const categoryIcons: Record<string, typeof Heart> = {
  'Social Work': Heart,
  'Public Welfare': Users,
  Campaign: Megaphone,
  Development: Building,
  'Community Engagement': Users,
}

export function PublicWorkPage() {
  return (
    <>
      <PageHero
        title="Public Work & Initiatives"
        subtitle="Development work, welfare activities, and community engagement programs"
        image={images.publicWorkBanner}
      />

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            title="Our Initiatives"
            subtitle="Dedicated efforts for social welfare, development, and community empowerment"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publicWork.map((item) => {
              const Icon = categoryIcons[item.category] || Heart
              return (
                <Card key={item.title} className="!p-0 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-52 object-cover" />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-orange-100 rounded-lg">
                        <Icon className="text-orange-700" size={24} />
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 bg-orange-100 text-orange-800 rounded-full">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="pt-4 border-t border-gray-100">
                      <span className="text-sm font-semibold text-orange-600">{item.impact}</span>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
