import { Link } from 'react-router-dom'
import { Icon } from '../ui/Icon'
import { FacebookIcon, InstagramIcon, YoutubeIcon } from '../ui/SocialIcons'
import { navLinks, profile } from '../../data/staticContent'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">{profile.name}</h3>
            <p className="text-sm leading-relaxed mb-4">{profile.tagline}</p>
            <p className="text-orange-400 text-sm font-medium">{profile.party}</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm hover:text-orange-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Icon name="map-pin" size={16} className="mt-0.5 shrink-0 text-orange-400" />
                {profile.address}
              </li>
              <li className="flex items-center gap-2">
                <Icon name="phone" size={16} className="shrink-0 text-orange-400" />
                {profile.phone}
              </li>
              <li className="flex items-center gap-2">
                <Icon name="mail" size={16} className="shrink-0 text-orange-400" />
                {profile.email}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {profile.social.facebook && (
                <a href={profile.social.facebook} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-lg hover:bg-orange-600 transition-colors" aria-label="Facebook">
                  <FacebookIcon size={20} />
                </a>
              )}
              {profile.social.instagram && (
                <a href={profile.social.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-lg hover:bg-orange-600 transition-colors" aria-label="Instagram">
                  <InstagramIcon size={20} />
                </a>
              )}
              {profile.social.youtube && (
                <a href={profile.social.youtube} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-lg hover:bg-orange-600 transition-colors" aria-label="YouTube">
                  <YoutubeIcon size={20} />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
