import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { PublicWorkPage } from './pages/PublicWork'
import { MediaCoveragePage } from './pages/MediaCoverage'
import { GalleryPage } from './pages/Gallery'
import { GalleryDetail } from './pages/GalleryDetail'
import { VideosPage } from './pages/Videos'
import { ContactPage } from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="public-work" element={<PublicWorkPage />} />
          <Route path="media" element={<MediaCoveragePage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="gallery/:id" element={<GalleryDetail />} />
          <Route path="videos" element={<VideosPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
