# Public Profile Website

A professional political/public profile website built with **React**, **Tailwind CSS**, and **Node.js/Express** backend.

## Features

### Public Website
- **Home** — Banner, introduction, highlighted work, announcements, social links, quick navigation
- **About/Profile** — Political background, public service, vision, achievements
- **Public Work** — Social work, welfare activities, campaigns, community engagement
- **Media Coverage** — News, TV debates, interviews, press mentions
- **Photo Gallery** — Event-wise albums (backend managed)
- **Videos/Speeches** — YouTube video integration
- **News & Announcements** — Dynamic updates (backend managed)
- **Articles/Blog** — SEO-friendly articles with categories (backend managed)
- **Contact** — Contact form and office details

### Admin Panel (`/admin/login`)
Manage dynamic content:
- News & Announcements
- Articles / Blog
- Photo Gallery

**Default password:** `admin123`

## Getting Started

### Prerequisites
- Node.js 18+

### Install & Run

```bash
# Install root dependencies (optional, for running both together)
npm install

# Install frontend & backend
cd frontend && npm install
cd ../backend && npm install
```

### Development

Run backend and frontend separately:

```bash
# Terminal 1 - Backend (port 5000)
cd backend
npm run dev

# Terminal 2 - Frontend (port 5173)
cd frontend
npm run dev
```

Or from root (after `npm install`):
```bash
npm run dev
```

- Website: http://localhost:5173
- Admin Panel: http://localhost:5173/admin/login
- API: http://localhost:5000/api

### Production Build

```bash
cd frontend
npm run build
```

## Customization

Edit profile details in `frontend/src/data/staticContent.ts`:
- Name, designation, constituency
- About content, public work, media coverage
- Social media links, contact info

## Project Structure

```
bjp/
├── frontend/          # React + Tailwind frontend
│   └── src/
│       ├── pages/     # All public & admin pages
│       ├── components/
│       ├── data/      # Static content
│       └── api/       # API client
├── backend/           # Express API + JSON storage
│   ├── server.js
│   └── data/          # news.json, articles.json, gallery.json
└── README.md
```
