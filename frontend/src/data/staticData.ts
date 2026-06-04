import type { GalleryAlbum } from '../types'
import { rajivPhotoSlice, rajivPhotos } from './rajivPhotos'

function buildAlbumImages(albumId: string, start: number, count: number) {
  return rajivPhotoSlice(start, count).map((url, index) => ({
    id: `${albumId}-img-${index + 1}`,
    url,
    caption: '',
  }))
}

const album1Photos = buildAlbumImages('album-1', 0, 8)
const album2Photos = buildAlbumImages('album-2', 8, 8)
const album3Photos = buildAlbumImages('album-3', 16, 8)
const album4Photos = buildAlbumImages('album-4', 24, 8)

export const galleryAlbums: GalleryAlbum[] = [
  {
    id: 'album-1',
    title: 'Political Events & Programs',
    category: 'political-events',
    description: 'Official programs, party events, and public ceremonies.',
    date: '2026-06-04',
    coverImage: album1Photos[0]?.url ?? rajivPhotos[0],
    images: album1Photos,
  },
  {
    id: 'album-2',
    title: 'Public Engagement',
    category: 'public-engagement',
    description: 'Meetings with citizens, community outreach, and field visits.',
    date: '2026-06-04',
    coverImage: album2Photos[0]?.url ?? rajivPhotos[0],
    images: album2Photos,
  },
  {
    id: 'album-3',
    title: 'Media Interactions',
    category: 'media-interactions',
    description: 'Television appearances, press interactions, and media coverage.',
    date: '2026-06-04',
    coverImage: album3Photos[0]?.url ?? rajivPhotos[0],
    images: album3Photos,
  },
  {
    id: 'album-4',
    title: 'Leadership Moments',
    category: 'leadership-moments',
    description: 'Key engagements, leadership meetings, and memorable occasions.',
    date: '2026-06-04',
    coverImage: album4Photos[0]?.url ?? rajivPhotos[0],
    images: album4Photos,
  },
]

export function getGalleryAlbum(id: string) {
  return galleryAlbums.find((album) => album.id === id)
}
