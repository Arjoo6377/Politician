export interface NewsItem {
  id: string
  title: string
  excerpt: string
  content: string
  category: 'announcement' | 'press-release' | 'event' | 'message'
  date: string
  image?: string
}

export interface Article {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  author: string
  date: string
  image?: string
  tags: string[]
}

export interface GalleryAlbum {
  id: string
  title: string
  category: 'media-interactions' | 'political-events' | 'public-engagement' | 'leadership-moments'
  description: string
  date: string
  coverImage: string
  images: GalleryImage[]
}

export interface GalleryImage {
  id: string
  url: string
  caption: string
}

export interface VideoItem {
  id: string
  title: string
  sourceUrl: string
  thumbnail: string
  category: 'tv-debate' | 'interview' | 'public-speech'
  date: string
}
