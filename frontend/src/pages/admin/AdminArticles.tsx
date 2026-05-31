import { useEffect, useState } from 'react'
import { Plus, Trash2 } from 'lucide-react'
import { api } from '../../api/client'
import { Button } from '../../components/ui/Button'
import type { Article } from '../../types'

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export function AdminArticles() {
  const [articles, setArticles] = useState<Article[]>([])
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({
    title: '', excerpt: '', content: '', category: 'governance', author: 'Shri Rajesh Kumar',
    date: new Date().toISOString().split('T')[0], image: '', tags: '',
  })

  const token = localStorage.getItem('adminToken')!

  const load = () => api.getArticles().then(setArticles).catch(() => {})
  useEffect(() => { load() }, [])

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    await api.createArticle({
      ...form,
      slug: slugify(form.title),
      tags: form.tags.split(',').map((t) => t.trim()).filter(Boolean),
    }, token)
    setShowForm(false)
    setForm({ title: '', excerpt: '', content: '', category: 'governance', author: 'Shri Rajesh Kumar', date: new Date().toISOString().split('T')[0], image: '', tags: '' })
    load()
  }

  const handleDelete = async (id: string) => {
    if (confirm('Delete this article?')) {
      await api.deleteArticle(id, token)
      load()
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Articles / Blog</h1>
          <p className="text-gray-600">Publish SEO-friendly articles and opinions</p>
        </div>
        <Button onClick={() => setShowForm(!showForm)}><Plus size={18} /> Add Article</Button>
      </div>

      {showForm && (
        <form onSubmit={handleCreate} className="bg-white p-6 rounded-xl border mb-8 space-y-4">
          <input required placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full px-4 py-2 border rounded-lg" />
          <input required placeholder="Excerpt" value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} className="w-full px-4 py-2 border rounded-lg" />
          <textarea required placeholder="Content" rows={6} value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} className="w-full px-4 py-2 border rounded-lg" />
          <div className="grid md:grid-cols-2 gap-4">
            <input placeholder="Category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="px-4 py-2 border rounded-lg" />
            <input placeholder="Tags (comma separated)" value={form.tags} onChange={(e) => setForm({ ...form, tags: e.target.value })} className="px-4 py-2 border rounded-lg" />
            <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="px-4 py-2 border rounded-lg" />
            <input placeholder="Image URL (optional)" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} className="px-4 py-2 border rounded-lg" />
          </div>
          <Button type="submit">Publish Article</Button>
        </form>
      )}

      <div className="space-y-4">
        {articles.map((item) => (
          <div key={item.id} className="bg-white p-5 rounded-xl border flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold px-2 py-1 bg-orange-100 text-orange-800 rounded-full capitalize">{item.category}</span>
              <h3 className="font-bold mt-2">{item.title}</h3>
              <p className="text-sm text-gray-500">/{item.slug}</p>
            </div>
            <button onClick={() => handleDelete(item.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg"><Trash2 size={18} /></button>
          </div>
        ))}
      </div>
    </div>
  )
}
