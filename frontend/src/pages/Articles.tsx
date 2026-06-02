import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, FileText, Tag } from 'lucide-react'
import { PageHero } from '../components/ui/PageHero'
import { Card } from '../components/ui/Card'
import { SectionHeading } from '../components/ui/SectionHeading'
import { getArticleImage, images } from '../data/images'
import { articles } from '../data/staticData'

export function ArticlesPage() {
  const [filter, setFilter] = useState<string>('all')

  const categories = ['all', ...new Set(articles.map((a) => a.category))]
  const filtered = filter === 'all' ? articles : articles.filter((a) => a.category === filter)

  return (
    <>
      <PageHero
        title="Articles & Blogs"
        subtitle="Thought leadership articles, opinion pieces, and insights on governance and public affairs"
        image={images.articlesBanner}
      />

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          {categories.length > 1 && (
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors capitalize ${
                    filter === cat ? 'bg-orange-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat === 'all' ? 'All Categories' : cat}
                </button>
              ))}
            </div>
          )}

          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <FileText size={48} className="mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500">No articles published yet.</p>
            </div>
          ) : (
            <>
              <SectionHeading title="Latest Articles" subtitle="Insights and perspectives on public affairs" />
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((article) => (
                  <Card key={article.id} className="!p-0 overflow-hidden">
                    <img
                      src={getArticleImage(article.category, article.image)}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-xs font-semibold rounded-full mb-3 capitalize">
                      {article.category}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{article.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {article.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="inline-flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                          <Tag size={10} /> {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <Calendar size={14} />
                        {new Date(article.date).toLocaleDateString('en-IN')}
                      </span>
                      <Link to={`/articles/${article.slug}`} className="text-orange-600 font-semibold text-sm hover:underline">
                        Read Article →
                      </Link>
                    </div>
                    </div>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  )
}
