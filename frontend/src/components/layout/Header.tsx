import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Icon } from '../ui/Icon'
import { images } from '../../data/images'
import { mainNavLinks, mediaDropdown, profile } from '../../data/staticContent'

const linkClass = (isActive: boolean) =>
  `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
    isActive ? 'bg-orange-100 text-orange-700' : 'text-gray-700 hover:bg-gray-100'
  }`

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mediaOpen, setMediaOpen] = useState(false)
  const [mobileMediaOpen, setMobileMediaOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  const mediaActive = mediaDropdown.some((item) => location.pathname.startsWith(item.path))

  useEffect(() => {
    setMediaOpen(false)
    setMobileOpen(false)
    setMobileMediaOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setMediaOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-700 text-white text-center py-1.5 text-sm">
        Serving {profile.constituency} with dedication & commitment
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={images.logo}
              alt="BJP logo"
              className="w-10 h-10 rounded-full object-cover ring-2 ring-orange-200"
            />
            <div className="hidden sm:block">
              <p className="font-bold text-gray-900 text-sm leading-tight">{profile.name}</p>
              <p className="text-xs text-orange-600">{profile.designation}</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <NavLink to="/" end className={({ isActive }) => linkClass(isActive)}>
              Home
            </NavLink>

            <div ref={dropdownRef} className="relative">
              <button
                type="button"
                onClick={() => setMediaOpen((v) => !v)}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  mediaActive || mediaOpen
                    ? 'bg-orange-100 text-orange-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                aria-expanded={mediaOpen}
                aria-haspopup="true"
              >
                Media
                <Icon
                  name="chevron-down"
                  size={16}
                  className={`transition-transform duration-200 ${mediaOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {mediaOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 animate-fade-in-up">
                  {mediaDropdown.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block px-4 py-2.5 text-sm font-medium transition-colors hover:bg-orange-50 hover:text-orange-700 ${
                        location.pathname.startsWith(item.path) ? 'text-orange-700 bg-orange-50' : 'text-gray-700'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {mainNavLinks
              .filter((link) => link.path !== '/')
              .map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => linkClass(isActive)}
                >
                  {link.label}
                </NavLink>
              ))}
          </nav>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <Icon name="x" size={24} /> : <Icon name="menu" size={24} />}
          </button>
        </div>

        {mobileOpen && (
          <nav className="lg:hidden pb-4 border-t border-gray-100">
            <div className="pt-3 space-y-1">
              <NavLink
                to="/"
                end
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) => `block ${linkClass(isActive)}`}
              >
                Home
              </NavLink>

              <div>
                <button
                  type="button"
                  onClick={() => setMobileMediaOpen((v) => !v)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium ${
                    mediaActive ? 'bg-orange-100 text-orange-700' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Media
                  <Icon
                    name="chevron-down"
                    size={16}
                    className={`transition-transform duration-200 ${mobileMediaOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {mobileMediaOpen && (
                  <div className="ml-3 mt-1 space-y-0.5 border-l-2 border-orange-200 pl-3">
                    {mediaDropdown.map((item) => (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        onClick={() => setMobileOpen(false)}
                        className={({ isActive }) =>
                          `block px-3 py-2 rounded-lg text-sm font-medium ${
                            isActive ? 'bg-orange-100 text-orange-700' : 'text-gray-600 hover:bg-gray-50'
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              {mainNavLinks
                .filter((link) => link.path !== '/')
                .map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) => `block ${linkClass(isActive)}`}
                  >
                    {link.label}
                  </NavLink>
                ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
