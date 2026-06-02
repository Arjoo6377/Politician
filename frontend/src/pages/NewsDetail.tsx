import { Link, useParams } from 'react-router-dom'
import { Icon } from '../components/ui/Icon'
import { getNewsImage } from '../data/images'
import { getNewsById } from '../data/staticData'

const categoryLabels: Record<string, string> = {
  announcement: 'Announcement',
  'press-release': 'Press Release',
  event: 'Event Update',
  message: 'Public Message',
}

export function NewsDetail() {
  const { id } = useParams()
  const item = id ? getNewsById(id) : undefined

  if (!item) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <p className="text-gray-500">Announcement not found.</p>
        <Link to="/news" className="text-orange-600 hover:underline mt-4 inline-block">Back to Announcements</Link>
      </div>
    )
  }

  return (
    <article className="py-12">
      <div className="max-w-3xl mx-auto px-4">
        <Link to="/news" className="inline-flex items-center gap-2 text-orange-600 hover:underline mb-6 text-sm">
          <Icon name="arrow-left" size={16} /> Back to Announcements
        </Link>

        <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full mb-4">
          {categoryLabels[item.category]}
        </span>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{item.title}</h1>

        <div className="flex items-center gap-2 text-gray-500 text-sm mb-8">
          <Icon name="calendar" size={16} />
          {new Date(item.date).toLocaleDateString('en-IN', { dateStyle: 'long' })}
        </div>

        <img
          src={getNewsImage(item.category, item.image)}
          alt={item.title}
          className="w-full h-64 md:h-80 object-cover rounded-xl mb-8 shadow-md"
        />

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
          {item.content}
        </div>
      </div>
    </article>
  )
}
