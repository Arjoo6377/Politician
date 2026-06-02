import { useState } from 'react'
import { Clock, Mail, MapPin, MessageSquare, Phone, Send } from 'lucide-react'
import { InstagramIcon } from '../components/ui/SocialIcons'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { PageHero } from '../components/ui/PageHero'
import { ProfileImage } from '../components/ui/ProfileImage'
import { images } from '../data/images'
import { profile } from '../data/staticContent'

const contactItems = [
  { icon: MapPin, label: 'Office Address', value: profile.address },
  ...(profile.phone
    ? [{ icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` }]
    : []),
  ...(profile.email
    ? [{ icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` }]
    : []),
  ...(profile.social.instagram
    ? [{
        icon: InstagramIcon,
        label: 'Instagram',
        value: '@rajeevjaitly',
        href: profile.social.instagram,
      }]
    : []),
  {
    icon: Clock,
    label: 'Office Hours',
    value: 'Mon - Sat: 10:00 AM - 6:00 PM',
    sub: 'Sunday: Closed',
  },
]

export function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <>
      <PageHero
        compact
        title="Contact & Social Connect"
        subtitle="Reach out for media inquiries, event invitations, or general communication"
        image={images.contactBanner}
      />

      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-6 flex flex-col sm:flex-row">
            <img
              src={images.heroBanner}
              alt="Office"
              className="sm:w-48 md:w-56 h-36 sm:h-auto object-cover shrink-0"
            />
            <div className="p-5 flex items-center gap-4 flex-1">
              <ProfileImage size="md" className="ring-2 ring-orange-200 shrink-0" />
              <div>
                <p className="font-bold text-gray-900 text-lg">{profile.name}</p>
                <p className="text-orange-600 text-sm font-medium">{profile.designation}</p>
                <p className="text-gray-500 text-sm mt-0.5">{profile.constituency}</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-6 items-start">
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-lg font-bold text-gray-900 px-1">Get in Touch</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3">
                {contactItems.map((item) => (
                  <Card key={item.label} className="!p-4 flex gap-3 items-start">
                    <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center shrink-0">
                      <item.icon className="text-orange-600" size={20} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">
                        {item.label}
                      </p>
                      {'href' in item && item.href ? (
                        <a href={item.href} target={item.label === 'Instagram' ? '_blank' : undefined} rel={item.label === 'Instagram' ? 'noopener noreferrer' : undefined} className="text-gray-800 text-sm font-medium hover:text-orange-600 break-all">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-800 text-sm leading-relaxed">{item.value}</p>
                      )}
                      {'sub' in item && item.sub && <p className="text-gray-500 text-sm mt-0.5">{item.sub}</p>}
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              <Card className="h-full">
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-gray-100">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                    <MessageSquare className="text-orange-600" size={20} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Send a Message</h2>
                    <p className="text-gray-500 text-sm">We typically respond within 24–48 hours</p>
                  </div>
                </div>

                {submitted ? (
                  <div className="text-center py-10">
                    <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="text-orange-700" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600 text-sm">Thank you for reaching out. We will respond shortly.</p>
                    <Button className="mt-5" onClick={() => setSubmitted(false)} variant="outline">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                        <input
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        <input
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                        <select
                          required
                          value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm bg-white"
                        >
                          <option value="">Select subject</option>
                          <option value="media">Media Inquiry</option>
                          <option value="invitation">Event Invitation</option>
                          <option value="general">General Inquiry</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                      <textarea
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none resize-none text-sm"
                        placeholder="Write your message here..."
                      />
                    </div>
                    <Button type="submit" size="lg">
                      <Send size={18} /> Send Message
                    </Button>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
