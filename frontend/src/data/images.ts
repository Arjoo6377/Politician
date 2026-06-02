import profilePhoto from '../assets/photo.jpeg'

/** Central image URLs — replace with your own photos in production */
export const images = {
  profile: profilePhoto,
  profileAlt: profilePhoto,

  heroBanner: 'https://images.unsplash.com/photo-1529107386315-e1a2af472a2e?w=1920&fit=crop',
  aboutBanner: 'https://images.unsplash.com/photo-1577495508048-b7d87b67b231?w=1920&fit=crop',
  publicWorkBanner: 'https://images.unsplash.com/photo-1559027615-cd4628903747?w=1920&fit=crop',
  mediaBanner: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fba6?w=1920&fit=crop',
  galleryBanner: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&fit=crop',
  videosBanner: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1920&fit=crop',
  newsBanner: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&fit=crop',
  articlesBanner: 'https://images.unsplash.com/photo-1456324504439-367cee3b3b32?w=1920&fit=crop',
  contactBanner: 'https://images.unsplash.com/photo-1423666639043-f5603c27f903?w=1920&fit=crop',

  highlights: {
    roads: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&fit=crop',
    healthcare: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&fit=crop',
    youth: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&fit=crop',
  },

  publicWork: {
    health: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&fit=crop',
    education: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&fit=crop',
    swachh: 'https://images.unsplash.com/photo-1532996122724-7aac0fdcb2c7?w=800&fit=crop',
    youth: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&fit=crop',
    women: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&fit=crop',
    farmer: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&fit=crop',
  },

  media: {
    news1: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&fit=crop',
    debate: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fba6?w=600&fit=crop',
    interview: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&fit=crop',
    press: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&fit=crop',
    village: 'https://images.unsplash.com/photo-1469571486222-7bfd56bef05b?w=600&fit=crop',
    education: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&fit=crop',
  },

  news: {
    announcement: 'https://images.unsplash.com/photo-1529107386315-e1a2af472a2e?w=800&fit=crop',
    pressRelease: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&fit=crop',
    event: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&fit=crop',
    message: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&fit=crop',
  },

  articles: {
    governance: 'https://images.unsplash.com/photo-1577495508048-b7d87b67b231?w=800&fit=crop',
    socialWelfare: 'https://images.unsplash.com/photo-1488526537941-7dd1ef068d2e?w=800&fit=crop',
    technology: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&fit=crop',
  },

  quickNav: {
    publicWork: 'https://images.unsplash.com/photo-1559027615-cd4628903747?w=400&fit=crop',
    media: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fba6?w=400&fit=crop',
    gallery: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&fit=crop',
    news: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&fit=crop',
  },
}

export function getNewsImage(category: string, image?: string) {
  if (image) return image
  const map: Record<string, string> = {
    announcement: images.news.announcement,
    'press-release': images.news.pressRelease,
    event: images.news.event,
    message: images.news.message,
  }
  return map[category] ?? images.news.announcement
}

export function getArticleImage(category: string, image?: string) {
  if (image) return image
  const map: Record<string, string> = {
    governance: images.articles.governance,
    'social welfare': images.articles.socialWelfare,
    technology: images.articles.technology,
  }
  return map[category.toLowerCase()] ?? images.articles.governance
}
