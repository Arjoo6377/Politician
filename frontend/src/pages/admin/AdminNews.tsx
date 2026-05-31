import { useEffect, useState } from 'react'
import { Plus, Trash2 } from 'lucide-react'
import { api } from '../../api/client'
import { Button } from '../../components/ui/Button'
import type { NewsItem } from '../../types'

export function AdminNews() {
  const [news, setNews] = useState<NewsItem[]>([])
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({
    title: '', excerpt: '', content: '', category: 'announcement' as NewsItem['category'], date: new Date().toISOString().split('T')[0], image: '',
  })

  const token = localStorage.getItem('adminToken')!

  const load = () => api.getNews().then(setNews).catch(() => {})
  useEffect(() => { load() }, [])

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    await api.createNews(form, token)
    setShowForm(false)
    setForm({ title: '', excerpt: '', content: '', category: 'announcement', date: new Date().toISOString().split('T')[0], image: '' })
    load()
  }

  const handleDelete = async (id: string) => {
    if (confirm('Delete this news item?')) {
      await api.deleteNews(id, token)
      load()
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">News & Announcements</h1>
          <p className="text-gray-600">Manage public announcements and updates</p>
        </div>
        <Button onClick={() => setShowForm(!showForm)}><Plus size={18} /> Add News</Button>
      </div>

      {showForm && (
        <form onSubmit={handleCreate} className="bg-white p-6 rounded-xl border mb-8 space-y-4">
          <input required placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full px-4 py-2 border rounded-lg" />
          <input required placeholder="Excerpt" value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} className="w-full px-4 py-2 border rounded-lg" />
          <textarea required placeholder="Content" rows={4} value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} className="w-full px-4 py-2 border rounded-lg" />
          <div className="grid md:grid-cols-3 gap-4">
            <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value as NewsItem['category'] })} className="px-4 py-2 border rounded-lg">
              <option value="announcement">Announcement</option>
              <option value="press-release">Press Release</option>
              <option value="event">Event Update</option>
              <option value="message">Public Message</option>
            </select>
            <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="px-4 py-2 border rounded-lg" />
            <input placeholder="Image URL (optional)" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} className="px-4 py-2 border rounded-lg" />
          </div>
          <Button type="submit">Publish</Button>
        </form>
      )}

      <div className="space-y-4">
        {news.map((item) => (
          <div key={item.id} className="bg-white p-5 rounded-xl border flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold px-2 py-1 bg-orange-100 text-orange-700 rounded-full capitalize">{item.category.replace('-', ' ')}</span>
              <h3 className="font-bold mt-2">{item.title}</h3>
              <p className="text-sm text-gray-500">{new Date(item.date).toLocaleDateString('en-IN')}</p>
            </div>
            <button onClick={() => handleDelete(item.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg"><Trash2 size={18} /></button>
          </div>
        ))}
      </div>
    </div>
  )
}
