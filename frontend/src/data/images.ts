import profilePhoto from '../assets/photo.jpeg'
import bjpLogo from '../assets/bjplogo.jpeg'
import { rajivPhotos } from './rajivPhotos'

export const images = {
  profile: profilePhoto,
  profileAlt: profilePhoto,
  logo: bjpLogo,

  heroBanner: 'https://images.unsplash.com/photo-1529107386315-e1a2af472a2e?w=1920&fit=crop',
  aboutBanner: 'https://images.unsplash.com/photo-1577495508048-b7d87b67b231?w=1920&fit=crop',
  publicWorkBanner: 'https://images.unsplash.com/photo-1559027615-cd4628903747?w=1920&fit=crop',
  mediaBanner: rajivPhotos[20] ?? rajivPhotos[16] ?? 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fba6?w=1920&fit=crop',
  galleryBanner: rajivPhotos[0] ?? 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&fit=crop',
  videosBanner: rajivPhotos[14] ?? rajivPhotos[10] ?? 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1920&fit=crop',
  contactBanner: 'https://images.unsplash.com/photo-1423666639043-f5603c27f903?w=1920&fit=crop',

  highlights: {
    spokesperson: rajivPhotos[24] ?? rajivPhotos[0],
    communication: rajivPhotos[10] ?? rajivPhotos[8],
    media: rajivPhotos[18] ?? rajivPhotos[16],
    leadership: rajivPhotos[30] ?? rajivPhotos[26],
    vision: rajivPhotos[28] ?? rajivPhotos[24] ?? rajivPhotos[0],
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

  quickNav: {
    videos: rajivPhotos[14] ?? rajivPhotos[0],
    gallery: rajivPhotos[2] ?? rajivPhotos[0],
    media: rajivPhotos[20] ?? rajivPhotos[16] ?? rajivPhotos[0],
  },
}
