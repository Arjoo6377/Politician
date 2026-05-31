import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Calendar } from 'lucide-react'
import { api } from '../api/client'
import { getNewsImage } from '../data/images'
import type { NewsItem } from '../types'

const categoryLabels: Record<string, string> = {
  announcement: 'Announcement',
  'press-release': 'Press Release',
  event: 'Event Update',
  message: 'Public Message',
}

export function NewsDetail() {
  const { id } = useParams()
  const [item, setItem] = useState<NewsItem | null>(null)

  useEffect(() => {
    if (id) {
      api.getNewsById(id).then(setItem).catch(() => setItem(null))
    }
  }, [id])

  if (!item) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <p className="text-gray-500">News item not found.</p>
        <Link to="/news" className="text-orange-600 hover:underline mt-4 inline-block">Back to News</Link>
      </div>
    )
  }

  return (
    <article className="py-12">
      <div className="max-w-3xl mx-auto px-4">
        <Link to="/news" className="inline-flex items-center gap-2 text-orange-600 hover:underline mb-6 text-sm">
          <ArrowLeft size={16} /> Back to News
        </Link>

        <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full mb-4">
          {categoryLabels[item.category]}
        </span>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{item.title}</h1>

        <div className="flex items-center gap-2 text-gray-500 text-sm mb-8">
          <Calendar size={16} />
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
