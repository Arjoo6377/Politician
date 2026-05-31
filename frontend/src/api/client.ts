import type { Article, GalleryAlbum, NewsItem } from '../types'

const API_BASE = '/api'

async function fetchJson<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${url}`, options)
  if (!res.ok) throw new Error(`API error: ${res.statusText}`)
  return res.json()
}

export const api = {
  getNews: () => fetchJson<NewsItem[]>('/news'),
  getNewsById: (id: string) => fetchJson<NewsItem>(`/news/${id}`),
  createNews: (data: Omit<NewsItem, 'id'>, token: string) =>
    fetchJson<NewsItem>('/news', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(data),
    }),
  updateNews: (id: string, data: Partial<NewsItem>, token: string) =>
    fetchJson<NewsItem>(`/news/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(data),
    }),
  deleteNews: (id: string, token: string) =>
    fetch(`${API_BASE}/news/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    }),

  getArticles: () => fetchJson<Article[]>('/articles'),
  getArticleBySlug: (slug: string) => fetchJson<Article>(`/articles/${slug}`),
  createArticle: (data: Omit<Article, 'id'>, token: string) =>
    fetchJson<Article>('/articles', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(data),
    }),
  updateArticle: (id: string, data: Partial<Article>, token: string) =>
    fetchJson<Article>(`/articles/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(data),
    }),
  deleteArticle: (id: string, token: string) =>
    fetch(`${API_BASE}/articles/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    }),

  getGallery: () => fetchJson<GalleryAlbum[]>('/gallery'),
  getGalleryAlbum: (id: string) => fetchJson<GalleryAlbum>(`/gallery/${id}`),
  createAlbum: (data: Omit<GalleryAlbum, 'id'>, token: string) =>
    fetchJson<GalleryAlbum>('/gallery', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(data),
    }),
  updateAlbum: (id: string, data: Partial<GalleryAlbum>, token: string) =>
    fetchJson<GalleryAlbum>(`/gallery/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(data),
    }),
  deleteAlbum: (id: string, token: string) =>
    fetch(`${API_BASE}/gallery/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    }),
  uploadImage: async (file: File, token: string) => {
    const formData = new FormData()
    formData.append('image', file)
    const res = await fetch(`${API_BASE}/upload`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    })
    if (!res.ok) throw new Error('Upload failed')
    return res.json() as Promise<{ url: string }>
  },

  login: (password: string) =>
    fetchJson<{ token: string }>('/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    }),
}
