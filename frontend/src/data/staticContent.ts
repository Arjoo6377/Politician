import { images } from './images'

export const profile = {
  name: 'Rajeev Jaitly',
  designation: 'National Spokesperson',
  constituency: 'Bharatiya Janata Party (BJP)',
  party: 'Bharatiya Janata Party',
  tagline: 'Voice of the Nation · Committed to Viksit Bharat',
  photo: images.profile,
  intro:
    'A trusted voice of the BJP across regional and national platforms — communicating policy perspectives, addressing public issues, and championing the vision of a developed, inclusive India.',
  email: 'contact@rajeevjaitly.in',
  phone: '',
  address: '365, Indira Enclave, Sector-21D, Faridabad, Haryana – 121012',
  social: {
    facebook: 'https://www.facebook.com/share/1BJiaQktuu/',
    twitter: 'https://x.com/RajeevJaitly',
    instagram: 'https://instagram.com/rajeevjaitly',
    youtube: '',
    linkedin: 'https://in.linkedin.com/in/rajeevjaitlybjp',
  },
}

export const mainNavLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export const mediaDropdown = [
  { label: 'Media Coverage', path: '/media' },
  { label: 'Photo Gallery', path: '/gallery' },
  { label: 'Video Gallery', path: '/videos' },
]

export const navLinks = [
  ...mainNavLinks.filter((l) => l.path !== '/'),
  ...mediaDropdown,
]

export const aboutContent = {
  introduction:
    'Rajeev Jaitly is a prominent political leader and respected public figure in India, playing a significant role in the Bharatiya Janata Party\'s (BJP) national media and communication framework. As a National Spokesperson of the BJP, he serves as a trusted voice of the party across regional and national platforms, effectively communicating policy perspectives, addressing important public issues, and engaging in meaningful political discourse.',
  politicalBackground:
    'Through his articulate representation of the party\'s vision, he actively contributes towards the mission of Viksit Bharat (Developed India) — a nation driven by inclusive growth, innovation, good governance, and sustainable development.',
  publicService: '',
  vision:
    'Building a Viksit Bharat through inclusive growth, innovation, good governance, and sustainable development — empowering every citizen to participate in the nation\'s progress.',
  ideology: '',
  achievements: [] as string[],
  responsibilities: [] as string[],
}

export const keyHighlights = [
  {
    title: 'National Spokesperson',
    image: images.highlights.spokesperson,
    description: 'Bharatiya Janata Party (BJP) — the trusted voice of the party on national and regional platforms.',
  },
  {
    title: 'Political Communication & Public Engagement',
    image: images.highlights.communication,
    description: 'Effectively communicating policy perspectives and engaging citizens in meaningful political discourse.',
  },
  {
    title: 'Media Representation & Public Affairs',
    image: images.highlights.media,
    description: 'Representing the BJP across television debates, interviews, press conferences, and media interactions.',
  },
  {
    title: 'Leadership & Nation Building Initiatives',
    image: images.highlights.leadership,
    description: 'Contributing to the mission of Viksit Bharat through leadership, governance advocacy, and public service.',
  },
]

export const homeHighlights = keyHighlights

export const publicWork = keyHighlights.map((item) => ({
  title: item.title,
  category: 'Leadership',
  image: item.image,
  description: item.description,
  impact: 'BJP · Viksit Bharat',
}))

export const mediaCoverageIntro =
  'Featured appearances across leading news and media platforms, showcasing political discussions, public engagement, interviews, and national conversations.'

export const featuredChannels = [
  {
    name: 'AVP News',
    description: 'Political discussions, current affairs analysis, and media appearances.',
    videoUrl: 'https://youtu.be/GY-0ODTVZds',
  },
  {
    name: 'Zee News',
    description: 'Television debates and public policy conversations.',
    videoUrl: 'https://youtu.be/X8jQ1Oyr7i4',
  },
  {
    name: 'News India',
    description: 'Media interaction and public discourse coverage.',
    videoUrl: 'https://youtu.be/CVWgJySqM-Y',
  },
  {
    name: 'Zee Salaam',
    description: 'Public affairs discussions and media engagement.',
    videoUrl: 'https://youtu.be/f6jSgt5fnQk',
  },
]

export const mediaCoverageFooter =
  'Stay updated with the latest television appearances, debates, interviews, and media interactions.'

export const videos = [
  {
    id: '1',
    title: 'Featured Reel',
    sourceUrl: 'https://www.instagram.com/reel/C4f1cSvvMSH/',
    thumbnail: images.media.debate,
    category: 'tv-debate' as const,
    date: '2026-05-20',
  },
  {
    id: '2',
    title: 'Featured Reel',
    sourceUrl: 'https://www.instagram.com/reel/DQHcdBqinD1/',
    thumbnail: images.media.news1,
    category: 'tv-debate' as const,
    date: '2026-05-18',
  },
  {
    id: '3',
    title: 'Featured Reel',
    sourceUrl: 'https://www.instagram.com/reel/DGXjwZvPJXo/',
    thumbnail: images.media.debate,
    category: 'tv-debate' as const,
    date: '2026-05-16',
  },
  {
    id: '4',
    title: 'Featured Reel',
    sourceUrl: 'https://www.instagram.com/reel/DGN1vVpsc6t/',
    thumbnail: images.media.news1,
    category: 'tv-debate' as const,
    date: '2026-05-14',
  },
  {
    id: '5',
    title: 'Featured Reel',
    sourceUrl: 'https://www.instagram.com/reel/DFj9-5hpJUn/',
    thumbnail: images.media.debate,
    category: 'tv-debate' as const,
    date: '2026-05-12',
  },
  {
    id: '6',
    title: 'Media Reel',
    sourceUrl: 'https://www.instagram.com/reel/DYJ0jqqlZrb/',
    thumbnail: images.media.interview,
    category: 'interview' as const,
    date: '2026-05-10',
  },
  {
    id: '7',
    title: 'Media Reel',
    sourceUrl: 'https://www.instagram.com/reel/DYXaec3IOr3/',
    thumbnail: images.media.interview,
    category: 'interview' as const,
    date: '2026-05-08',
  },
  {
    id: '8',
    title: 'Media Reel',
    sourceUrl: 'https://www.instagram.com/reel/DYZ7tKrlDLZ/',
    thumbnail: images.media.interview,
    category: 'interview' as const,
    date: '2026-05-06',
  },
  {
    id: '9',
    title: 'Media Reel',
    sourceUrl: 'https://www.instagram.com/reel/DOvhZVoDPvf/',
    thumbnail: images.media.interview,
    category: 'interview' as const,
    date: '2026-05-04',
  },
  {
    id: '10',
    title: 'Public Address',
    sourceUrl: 'https://www.instagram.com/reel/DTIpHF-EaUc/',
    thumbnail: images.media.press,
    category: 'public-speech' as const,
    date: '2026-05-02',
  },
  {
    id: '11',
    title: 'Public Address',
    sourceUrl: 'https://www.instagram.com/reel/DPROLT1kx-i/',
    thumbnail: images.media.press,
    category: 'public-speech' as const,
    date: '2026-04-30',
  },
]

export const featuredVideos = videos.slice(0, 9)
