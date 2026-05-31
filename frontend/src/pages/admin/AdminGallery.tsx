import { useEffect, useState } from 'react'
import { Plus, Trash2 } from 'lucide-react'
import { api } from '../../api/client'
import { Button } from '../../components/ui/Button'
import type { GalleryAlbum } from '../../types'

export function AdminGallery() {
  const [albums, setAlbums] = useState<GalleryAlbum[]>([])
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({
    title: '', description: '', category: 'event' as GalleryAlbum['category'],
    date: new Date().toISOString().split('T')[0], coverImage: '', imageUrls: '',
  })

  const token = localStorage.getItem('adminToken')!

  const load = () => api.getGallery().then(setAlbums).catch(() => {})
  useEffect(() => { load() }, [])

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    const urls = form.imageUrls.split('\n').map((u) => u.trim()).filter(Boolean)
    await api.createAlbum({
      title: form.title,
      description: form.description,
      category: form.category,
      date: form.date,
      coverImage: form.coverImage || urls[0] || '',
      images: urls.map((url, i) => ({ id: `img-${i}`, url, caption: '' })),
    }, token)
    setShowForm(false)
    setForm({ title: '', description: '', category: 'event', date: new Date().toISOString().split('T')[0], coverImage: '', imageUrls: '' })
    load()
  }

  const handleDelete = async (id: string) => {
    if (confirm('Delete this album?')) {
      await api.deleteAlbum(id, token)
      load()
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Photo Gallery</h1>
          <p className="text-gray-600">Manage event-wise photo albums</p>
        </div>
        <Button onClick={() => setShowForm(!showForm)}><Plus size={18} /> Add Album</Button>
      </div>

      {showForm && (
        <form onSubmit={handleCreate} className="bg-white p-6 rounded-xl border mb-8 space-y-4">
          <input required placeholder="Album Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full px-4 py-2 border rounded-lg" />
          <textarea required placeholder="Description" rows={2} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full px-4 py-2 border rounded-lg" />
          <div className="grid md:grid-cols-3 gap-4">
            <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value as GalleryAlbum['category'] })} className="px-4 py-2 border rounded-lg">
              <option value="event">Event</option>
              <option value="public-meeting">Public Meeting</option>
              <option value="media">Media Appearance</option>
              <option value="campaign">Campaign</option>
            </select>
            <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="px-4 py-2 border rounded-lg" />
            <input placeholder="Cover Image URL" value={form.coverImage} onChange={(e) => setForm({ ...form, coverImage: e.target.value })} className="px-4 py-2 border rounded-lg" />
          </div>
          <textarea required placeholder="Image URLs (one per line)" rows={4} value={form.imageUrls} onChange={(e) => setForm({ ...form, imageUrls: e.target.value })} className="w-full px-4 py-2 border rounded-lg font-mono text-sm" />
          <Button type="submit">Create Album</Button>
        </form>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        {albums.map((album) => (
          <div key={album.id} className="bg-white rounded-xl border overflow-hidden">
            <img src={album.coverImage} alt={album.title} className="w-full h-40 object-cover" />
            <div className="p-4 flex items-center justify-between">
              <div>
                <h3 className="font-bold">{album.title}</h3>
                <p className="text-sm text-gray-500">{album.images.length} photos</p>
              </div>
              <button onClick={() => handleDelete(album.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg"><Trash2 size={18} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
