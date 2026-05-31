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
  category: 'event' | 'public-meeting' | 'media' | 'campaign'
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
  youtubeId: string
  category: 'speech' | 'interview' | 'press' | 'campaign'
  date: string
}
