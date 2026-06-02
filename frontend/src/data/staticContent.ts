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
    facebook: '',
    twitter: '',
    instagram: 'https://instagram.com/rajeevjaitly',
    youtube: '',
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
  { label: 'Announcements', path: '/news' },
  { label: 'Articles & Blogs', path: '/articles' },
]

/** All links — used in footer */
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
    image: images.highlights.roads,
    description: 'Bharatiya Janata Party (BJP) — the trusted voice of the party on national and regional platforms.',
  },
  {
    title: 'Political Communication & Public Engagement',
    image: images.highlights.healthcare,
    description: 'Effectively communicating policy perspectives and engaging citizens in meaningful political discourse.',
  },
  {
    title: 'Media Representation & Public Affairs',
    image: images.highlights.youth,
    description: 'Representing the BJP across television debates, interviews, press conferences, and media interactions.',
  },
  {
    title: 'Leadership & Nation Building Initiatives',
    image: images.publicWork.health,
    description: 'Contributing to the mission of Viksit Bharat through leadership, governance advocacy, and public service.',
  },
]

/** @deprecated Use keyHighlights — kept for backward compatibility */
export const homeHighlights = keyHighlights

export const publicWork = keyHighlights.map((item) => ({
  title: item.title,
  category: 'Leadership',
  image: item.image,
  description: item.description,
  impact: 'BJP · Viksit Bharat',
}))

export const mediaCoverage = [
  {
    title: 'National Debate on Economic Policy & Viksit Bharat',
    outlet: 'Times Now',
    type: 'TV Debate',
    date: '2026-04-10',
    image: images.media.debate,
    excerpt: 'Participated in a prime-time debate on economic reforms, inclusive growth, and the roadmap towards a developed India.',
  },
  {
    title: 'Exclusive Interview: BJP\'s Vision for 2026',
    outlet: 'India Today',
    type: 'Interview',
    date: '2026-03-22',
    image: images.media.interview,
    excerpt: 'In-depth discussion on the party\'s policy agenda, governance priorities, and communication strategy for national development.',
  },
  {
    title: 'Press Conference on Government Initiatives',
    outlet: 'PTI',
    type: 'Press Mention',
    date: '2026-02-15',
    image: images.media.press,
    excerpt: 'Addressed media on key government welfare schemes, digital governance, and public outreach programs.',
  },
  {
    title: 'Panel Discussion on National Security',
    outlet: 'Republic Bharat',
    type: 'TV Debate',
    date: '2026-01-28',
    image: images.media.news1,
    excerpt: 'Shared perspectives on national security, border policy, and India\'s role in regional stability.',
  },
  {
    title: 'Feature: Voice of the BJP on National Media',
    outlet: 'The Hindu',
    type: 'News Coverage',
    date: '2025-12-05',
    image: images.media.village,
    excerpt: 'Profile feature on Rajeev Jaitly\'s role as National Spokesperson and his contribution to political communication.',
  },
  {
    title: 'Debate on Education & Skill Development',
    outlet: 'ABP News',
    type: 'TV Debate',
    date: '2025-11-18',
    image: images.media.education,
    excerpt: 'Discussed NEP implementation, youth skill development, and employment generation strategies.',
  },
]

export const videos = [
  {
    id: '1',
    title: 'Prime-Time Debate on Viksit Bharat Agenda',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'tv-debate' as const,
    date: '2026-04-10',
  },
  {
    id: '2',
    title: 'Political Discussion on Economic Reforms',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'tv-debate' as const,
    date: '2026-03-28',
  },
  {
    id: '3',
    title: 'Current Affairs Debate — National Development',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'tv-debate' as const,
    date: '2026-02-20',
  },
  {
    id: '4',
    title: 'Television Interview — BJP\'s Policy Vision',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'interview' as const,
    date: '2026-03-22',
  },
  {
    id: '5',
    title: 'Podcast Interview on Governance & Public Affairs',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'interview' as const,
    date: '2026-01-15',
  },
  {
    id: '6',
    title: 'Media Interaction — Press Briefing Highlights',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'interview' as const,
    date: '2025-12-08',
  },
  {
    id: '7',
    title: 'Address at BJP National Executive Meeting',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'public-speech' as const,
    date: '2026-02-05',
  },
  {
    id: '8',
    title: 'Public Address on Citizen Engagement',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'public-speech' as const,
    date: '2025-11-20',
  },
  {
    id: '9',
    title: 'Conference Speech on Viksit Bharat Mission',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'public-speech' as const,
    date: '2025-10-12',
  },
]

export const featuredVideos = videos.slice(0, 9)
