import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Calendar, Tag, User } from 'lucide-react'
import { getArticleImage } from '../data/images'
import { getArticleBySlug } from '../data/staticData'

export function ArticleDetail() {
  const { slug } = useParams()
  const article = slug ? getArticleBySlug(slug) : undefined

  useEffect(() => {
    if (article) {
      document.title = `${article.title} | Articles`
    }
  }, [article])

  if (!article) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <p className="text-gray-500">Article not found.</p>
        <Link to="/articles" className="text-orange-600 hover:underline mt-4 inline-block">Back to Articles</Link>
      </div>
    )
  }

  return (
    <article className="py-12">
      <div className="max-w-3xl mx-auto px-4">
        <Link to="/articles" className="inline-flex items-center gap-2 text-orange-600 hover:underline mb-6 text-sm">
          <ArrowLeft size={16} /> Back to Articles
        </Link>

        <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-xs font-semibold rounded-full mb-4 capitalize">
          {article.category}
        </span>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{article.title}</h1>

        <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm mb-8">
          <span className="flex items-center gap-1">
            <User size={16} /> {article.author}
          </span>
          <span className="flex items-center gap-1">
            <Calendar size={16} />
            {new Date(article.date).toLocaleDateString('en-IN', { dateStyle: 'long' })}
          </span>
        </div>

        <img
          src={getArticleImage(article.category, article.image)}
          alt={article.title}
          className="w-full h-64 md:h-80 object-cover rounded-xl mb-8 shadow-md"
        />

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line mb-8">
          {article.content}
        </div>

        <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-200">
          {article.tags.map((tag) => (
            <span key={tag} className="inline-flex items-center gap-1 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
              <Tag size={12} /> {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
