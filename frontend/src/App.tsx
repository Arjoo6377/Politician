import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { PublicWorkPage } from './pages/PublicWork'
import { MediaCoveragePage } from './pages/MediaCoverage'
import { GalleryPage } from './pages/Gallery'
import { GalleryDetail } from './pages/GalleryDetail'
import { VideosPage } from './pages/Videos'
import { NewsPage } from './pages/News'
import { NewsDetail } from './pages/NewsDetail'
import { ArticlesPage } from './pages/Articles'
import { ArticleDetail } from './pages/ArticleDetail'
import { ContactPage } from './pages/Contact'
import { AdminLogin } from './pages/admin/AdminLogin'
import { AdminLayout, AdminDashboard } from './pages/admin/AdminLayout'
import { AdminNews } from './pages/admin/AdminNews'
import { AdminArticles } from './pages/admin/AdminArticles'
import { AdminGallery } from './pages/admin/AdminGallery'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="public-work" element={<PublicWorkPage />} />
       { /*  <Route path="media" element={<MediaCoveragePage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="gallery/:id" element={<GalleryDetail />} />
          <Route path="videos" element={<VideosPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="news/:id" element={<NewsDetail />} />
          <Route path="articles" element={<ArticlesPage />} />
          <Route path="articles/:slug" element={<ArticleDetail />} />*/}

   <Route path="media" element={<Home />} />
          <Route path="gallery" element={<Home />} />
          <Route path="gallery/:id" element={<Home />} />
          <Route path="videos" element={<Home />} />
          <Route path="news" element={<Home />} />
          <Route path="news/:id" element={<Home />} />
          <Route path="articles" element={<Home />} />
          <Route path="articles/:slug" element={<Home />} /> 



          <Route path="contact" element={<ContactPage />} />
        </Route>

        <Route path="admin/login" element={<AdminLogin />} />
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="news" element={<AdminNews />} />
          <Route path="articles" element={<AdminArticles />} />
          <Route path="gallery" element={<AdminGallery />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
