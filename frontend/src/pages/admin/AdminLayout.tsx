import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom'
import { FileText, Image, LayoutDashboard, LogOut, Newspaper } from 'lucide-react'

function useAuth() {
  const token = localStorage.getItem('adminToken')
  return !!token
}

export function AdminLayout() {
  const authed = useAuth()
  const navigate = useNavigate()

  if (!authed) return <Navigate to="/admin/login" replace />

  const logout = () => {
    localStorage.removeItem('adminToken')
    navigate('/admin/login')
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <aside className="w-64 bg-gray-900 text-white shrink-0">
        <div className="p-6 border-b border-gray-800">
          <h2 className="font-bold text-lg">Admin Panel</h2>
          <p className="text-gray-400 text-sm">Content Management</p>
        </div>
        <nav className="p-4 space-y-1">
          {[
            { to: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
            { to: '/admin/news', label: 'News', icon: Newspaper },
            { to: '/admin/articles', label: 'Articles', icon: FileText },
            { to: '/admin/gallery', label: 'Gallery', icon: Image },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
            >
              <item.icon size={18} />
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-800 mt-auto">
          <Link to="/" className="block text-sm text-gray-400 hover:text-white mb-3">← View Website</Link>
          <button onClick={logout} className="flex items-center gap-2 text-sm text-red-400 hover:text-red-300">
            <LogOut size={16} /> Logout
          </button>
        </div>
      </aside>
      <main className="flex-1 p-8 overflow-auto">
        <Outlet />
      </main>
    </div>
  )
}

export function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Dashboard</h1>
      <p className="text-gray-600 mb-8">Manage your website content from here.</p>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { to: '/admin/news', title: 'News & Announcements', desc: 'Manage public announcements and press releases' },
          { to: '/admin/articles', title: 'Articles / Blog', desc: 'Publish and edit SEO-friendly articles' },
          { to: '/admin/gallery', title: 'Photo Gallery', desc: 'Upload and organize event photos' },
        ].map((item) => (
          <Link key={item.to} to={item.to} className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
