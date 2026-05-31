import { images } from './images'

export const profile = {
  name: 'Shri Rajesh Kumar',
  designation: 'Member of Legislative Assembly',
  constituency: 'Varanasi North',
  party: 'Bharatiya Janata Party',
  tagline: 'Dedicated to Public Service & Nation Building',
  photo: images.profile,
  intro:
    'A committed public servant working tirelessly for the development of the constituency and welfare of every citizen. With decades of grassroots experience, focused on transparent governance and inclusive growth.',
  email: 'contact@example.com',
  phone: '+91 98765 43210',
  address: 'Constituency Office, Varanasi, Uttar Pradesh - 221001',
  social: {
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    instagram: 'https://instagram.com',
    youtube: 'https://youtube.com',
  },
}

export const mainNavLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Public Work', path: '/public-work' },
  { label: 'Contact', path: '/contact' },
]

export const mediaDropdown = [
  { label: 'Media Coverage', path: '/media' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Videos', path: '/videos' },
  { label: 'News', path: '/news' },
  { label: 'Articles', path: '/articles' },
]

/** All links — used in footer */
export const navLinks = [
  ...mainNavLinks.filter((l) => l.path !== '/'),
  ...mediaDropdown,
]

export const aboutContent = {
  introduction:
    'Born and raised in Varanasi, I have dedicated my life to public service and community development. My journey from a grassroots worker to a public representative reflects my commitment to the ideals of seva, sanskar, and suraksha.',
  politicalBackground:
    'Active in party organization since 1995, served as district president, state executive member, and now as MLA representing the people of Varanasi North with full dedication and accountability.',
  publicService:
    'Led multiple welfare schemes including health camps, education drives, women empowerment programs, and infrastructure development projects benefiting over 2 lakh citizens across the constituency.',
  vision:
    'Building a Viksit Bharat through grassroots empowerment, digital governance, sustainable development, and preserving our cultural heritage while embracing modern progress.',
  ideology:
    'Believing in Antyodaya — upliftment of the last person in the queue. Committed to nationalism, cultural pride, and inclusive development for all sections of society.',
  achievements: [
    'Developed 50+ km of rural roads connecting remote villages',
    'Established 12 primary health centers in underserved areas',
    'Launched skill development program for 5,000+ youth',
    'Implemented clean drinking water projects in 80 villages',
    'Led tree plantation drive planting 1 lakh+ saplings',
    'Championed women self-help groups benefiting 3,000 families',
  ],
  responsibilities: [
    'Member, Public Accounts Committee',
    'Chairperson, District Development Council',
    'Member, Education & Health Standing Committee',
  ],
}

export const publicWork = [
  {
    title: 'Health for All Initiative',
    category: 'Social Work',
    image: images.publicWork.health,
    description:
      'Free health camps organized across 45 villages providing medical checkups, medicines, and specialist consultations to over 15,000 beneficiaries.',
    impact: '15,000+ beneficiaries',
  },
  {
    title: 'Education Support Program',
    category: 'Public Welfare',
    image: images.publicWork.education,
    description:
      'Distribution of school kits, scholarships for meritorious students, and digital learning centers in rural schools.',
    impact: '2,500 students supported',
  },
  {
    title: 'Swachh Bharat Campaign',
    category: 'Campaign',
    image: images.publicWork.swachh,
    description:
      'Community-led cleanliness drives, waste management awareness, and construction of public toilets in slum areas.',
    impact: '120 wards covered',
  },
  {
    title: 'Youth Skill Development',
    category: 'Development',
    image: images.publicWork.youth,
    description:
      'Vocational training in IT, tailoring, and agriculture technology with placement assistance for unemployed youth.',
    impact: '800 youth trained',
  },
  {
    title: 'Women Empowerment Sabha',
    category: 'Community Engagement',
    image: images.publicWork.women,
    description:
      'Regular meetings with women groups addressing safety, livelihood, and government scheme awareness.',
    impact: '150 SHGs formed',
  },
  {
    title: 'Farmer Support Cell',
    category: 'Development',
    image: images.publicWork.farmer,
    description:
      'Kisan helpline, crop insurance awareness, and direct market linkages for agricultural produce.',
    impact: '5,000 farmers registered',
  },
]

export const mediaCoverage = [
  {
    title: 'Development Agenda for Varanasi',
    outlet: 'Times of India',
    type: 'News Coverage',
    date: '2026-03-15',
    image: images.media.news1,
    excerpt: 'MLA outlines comprehensive development plan for constituency focusing on infrastructure and healthcare.',
  },
  {
    title: 'Debate on Rural Healthcare',
    outlet: 'NDTV',
    type: 'TV Debate',
    date: '2026-02-28',
    image: images.media.debate,
    excerpt: 'Participated in prime-time debate discussing challenges and solutions for rural healthcare infrastructure.',
  },
  {
    title: 'Interview: Vision for Youth',
    outlet: 'India Today',
    type: 'Interview',
    date: '2026-01-20',
    image: images.media.interview,
    excerpt: 'Exclusive interview on youth employment, skill development, and startup ecosystem in tier-2 cities.',
  },
  {
    title: 'Press Release: Budget Response',
    outlet: 'Press Trust of India',
    type: 'Press Mention',
    date: '2026-01-05',
    image: images.media.press,
    excerpt: 'Welcomed state budget provisions for rural development and women welfare schemes.',
  },
  {
    title: 'Ground Report: Village Transformation',
    outlet: 'Republic Bharat',
    type: 'Media Highlight',
    date: '2025-12-10',
    image: images.media.village,
    excerpt: 'Feature story on successful implementation of Jal Jeevan Mission in adopted villages.',
  },
  {
    title: 'Panel Discussion on Education Reform',
    outlet: 'ABP News',
    type: 'TV Debate',
    date: '2025-11-22',
    image: images.media.education,
    excerpt: 'Shared insights on NEP implementation and digital education in government schools.',
  },
]

export const videos = [
  {
    id: '1',
    title: 'Independence Day Address to Constituency',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'speech' as const,
    date: '2025-08-15',
  },
  {
    id: '2',
    title: 'Interview on Public Service Journey',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'interview' as const,
    date: '2025-07-10',
  },
  {
    id: '3',
    title: 'Press Conference on Development Projects',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'press' as const,
    date: '2025-06-05',
  },
  {
    id: '4',
    title: 'Campaign Rally Highlights',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'campaign' as const,
    date: '2025-04-20',
  },
  {
    id: '5',
    title: 'Budget Session Speech in Assembly',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'speech' as const,
    date: '2025-03-12',
  },
  {
    id: '6',
    title: 'Town Hall with Citizens',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'interview' as const,
    date: '2025-02-08',
  },
]

export const homeHighlights = [
  {
    title: 'Rural Road Development',
    image: images.highlights.roads,
    description: '50+ km of all-weather roads connecting remote villages to main highways.',
  },
  {
    title: 'Healthcare Expansion',
    image: images.highlights.healthcare,
    description: '12 new primary health centers serving underserved rural communities.',
  },
  {
    title: 'Youth Employment Drive',
    image: images.highlights.youth,
    description: 'Skill training and placement program for 800+ young citizens.',
  },
]
