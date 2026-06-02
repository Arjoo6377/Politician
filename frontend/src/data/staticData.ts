import type { Article, GalleryAlbum, NewsItem } from '../types'

export const newsItems: NewsItem[] = [
  {
    id: 'news-1',
    title: 'Official Statement on National Development Agenda',
    excerpt: 'Remarks on inclusive growth, good governance, and the Viksit Bharat mission.',
    content:
      'As National Spokesperson of the Bharatiya Janata Party, I reaffirm our commitment to building a developed India driven by inclusive growth, innovation, and good governance.\n\nKey priorities include:\n- Transparent communication of policy perspectives\n- Engaging citizens in meaningful political discourse\n- Advancing welfare and development initiatives nationwide\n\nWe remain dedicated to serving every section of society and working towards a prosperous, self-reliant India.',
    category: 'announcement',
    date: '2026-05-20',
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2af472a2e?w=800&fit=crop',
  },
  {
    id: 'news-2',
    title: 'Press Release: Response to Union Budget 2026',
    excerpt: 'Welcoming budget provisions for infrastructure, education, and digital governance.',
    content:
      'The Union Budget 2026 presents a forward-looking vision for India\'s growth. We welcome the increased allocation for:\n\n1. Infrastructure and connectivity\n2. Education and skill development\n3. Digital governance and innovation\n4. Support for MSMEs and entrepreneurs\n\nThis budget aligns with the mission of Viksit Bharat and will accelerate India\'s journey towards becoming a developed nation.',
    category: 'press-release',
    date: '2026-05-10',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&fit=crop',
  },
  {
    id: 'news-3',
    title: 'Public Message on International Yoga Day',
    excerpt: 'A message encouraging citizens to embrace wellness and mindfulness.',
    content:
      'Yoga is India\'s gift to the world — a path to physical wellness and mental peace. On the occasion of International Yoga Day, I encourage all citizens to incorporate yoga into their daily lives for a healthier tomorrow.\n\nLet us come together to celebrate this ancient tradition that unites mind, body, and spirit.',
    category: 'message',
    date: '2026-05-05',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&fit=crop',
  },
  {
    id: 'news-4',
    title: 'Upcoming Media Interaction — May 2026',
    excerpt: 'Scheduled press briefing on current affairs and party perspectives.',
    content:
      'A media interaction will be held on May 25th, 2026 at the Faridabad office from 4:00 PM to 6:00 PM.\n\nAgenda:\n- Current national affairs and policy updates\n- BJP\'s vision for development and governance\n- Q&A with media representatives\n\nAccredited media personnel are invited to attend.',
    category: 'event',
    date: '2026-05-01',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&fit=crop',
  },
]

export const articles: Article[] = [
  {
    id: 'article-1',
    title: 'Building Viksit Bharat from the Ground Up',
    slug: 'building-viksit-bharat-from-ground-up',
    excerpt: 'How grassroots development and citizen participation are key to achieving India\'s development goals.',
    content:
      'The vision of Viksit Bharat by 2047 is not merely a government slogan — it is a collective aspiration that requires every citizen\'s participation.\n\nReal development happens when:\n\n1. Local needs are identified by communities themselves\n2. Resources are allocated transparently\n3. Implementation is monitored with accountability\n4. Benefits reach the last person in the queue\n\nAs a voice of the BJP on national platforms, I have seen that articulating policy clearly and engaging citizens in discourse is essential to building public trust and driving inclusive growth.\n\nThe path to a developed India runs through every village, every ward, and every household.',
    category: 'governance',
    author: 'Rajeev Jaitly',
    date: '2026-05-15',
    image: 'https://images.unsplash.com/photo-1577495508048-b7d87b67b231?w=800&fit=crop',
    tags: ['development', 'viksit-bharat', 'governance'],
  },
  {
    id: 'article-2',
    title: 'The Role of Political Communication in Modern India',
    slug: 'political-communication-modern-india',
    excerpt: 'Why clear, responsible communication is vital for democracy and public engagement.',
    content:
      'In an era of rapid information flow, political communication plays a critical role in shaping public understanding of policy and governance.\n\nEffective communication requires:\n\n- Clarity in articulating policy perspectives\n- Responsiveness to public concerns\n- Engagement across regional and national platforms\n- Commitment to factual, constructive discourse\n\nAs National Spokesperson, my role is to bridge the gap between the party\'s vision and the public — fostering informed debate and meaningful participation in our democracy.',
    category: 'public affairs',
    author: 'Rajeev Jaitly',
    date: '2026-04-28',
    image: 'https://images.unsplash.com/photo-1488526537941-7dd1ef068d2e?w=800&fit=crop',
    tags: ['communication', 'media', 'democracy'],
  },
  {
    id: 'article-3',
    title: 'Digital Governance: Bringing Services to Every Citizen',
    slug: 'digital-governance-services-doorstep',
    excerpt: 'Leveraging technology to make government services accessible and transparent.',
    content:
      'Digital India is transforming how citizens interact with government. Technology, when deployed inclusively, can be the greatest equalizer — bringing services to doorsteps and empowering citizens with information.\n\nKey areas of progress include:\n\n- Digital service delivery platforms\n- Transparent governance mechanisms\n- Online access to welfare schemes\n- E-governance for faster grievance redressal\n\nA developed India must be a digitally empowered India, where every citizen can participate in and benefit from the nation\'s progress.',
    category: 'technology',
    author: 'Rajeev Jaitly',
    date: '2026-04-10',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&fit=crop',
    tags: ['digital india', 'governance', 'technology'],
  },
]

export const galleryAlbums: GalleryAlbum[] = [
  {
    id: 'album-1',
    title: 'Republic Day Celebrations 2026',
    category: 'political-events',
    description: 'Flag hoisting ceremony and official programs at the party office.',
    date: '2026-01-26',
    coverImage: 'https://images.unsplash.com/photo-1585829367279-e4412c4c1a34?w=800',
    images: [
      { id: 'img-1', url: 'https://images.unsplash.com/photo-1585829367279-e4412c4c1a34?w=800', caption: 'Flag hoisting ceremony' },
      { id: 'img-2', url: 'https://images.unsplash.com/photo-1577495508048-b7d87b67b231?w=800', caption: 'Official gathering' },
      { id: 'img-3', url: 'https://images.unsplash.com/photo-1529107386315-e1a2af472a2e?w=800', caption: 'Cultural program' },
    ],
  },
  {
    id: 'album-2',
    title: 'Citizen Outreach Program',
    category: 'public-engagement',
    description: 'Direct interaction with citizens to understand local issues and development needs.',
    date: '2026-03-15',
    coverImage: 'https://images.unsplash.com/photo-1559027615-cd4628903747?w=800',
    images: [
      { id: 'img-4', url: 'https://images.unsplash.com/photo-1559027615-cd4628903747?w=800', caption: 'Public meeting' },
      { id: 'img-5', url: 'https://images.unsplash.com/photo-1469571486222-7bfd56bef05b?w=800', caption: 'Community visit' },
      { id: 'img-6', url: 'https://images.unsplash.com/photo-1488526537941-7dd1ef068d2e?w=800', caption: 'Public gathering' },
    ],
  },
  {
    id: 'album-3',
    title: 'TV Studio — Development Agenda Interview',
    category: 'media-interactions',
    description: 'Media appearance discussing national development plans and public welfare initiatives.',
    date: '2026-02-20',
    coverImage: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fba6?w=800',
    images: [
      { id: 'img-7', url: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fba6?w=800', caption: 'Studio interview' },
      { id: 'img-8', url: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800', caption: 'Press interaction' },
    ],
  },
  {
    id: 'album-4',
    title: 'Meeting with Senior Party Leaders',
    category: 'leadership-moments',
    description: 'Official engagements and important occasions with senior leadership.',
    date: '2025-12-15',
    coverImage: 'https://images.unsplash.com/photo-1529107386315-e1a2af472a2e?w=800',
    images: [
      { id: 'img-9', url: 'https://images.unsplash.com/photo-1529107386315-e1a2af472a2e?w=800', caption: 'Leadership meeting' },
      { id: 'img-10', url: 'https://images.unsplash.com/photo-1540914124286-342544d918d5?w=800', caption: 'Official engagement' },
      { id: 'img-11', url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800', caption: 'Important occasion' },
    ],
  },
]

export function getNewsById(id: string) {
  return newsItems.find((item) => item.id === id)
}

export function getArticleBySlug(slug: string) {
  return articles.find((item) => item.slug === slug)
}

export function getGalleryAlbum(id: string) {
  return galleryAlbums.find((album) => album.id === id)
}
