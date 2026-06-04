const express = require('express')
const cors = require('cors')
const fs = require('fs')
const path = require('path')
const multer = require('multer')
const { v4: uuidv4 } = require('uuid')

const app = express()
const PORT = 5000
const ADMIN_PASSWORD = 'admin123'
const ADMIN_TOKEN = 'bjp-admin-token-2026'

const dataDir = path.join(__dirname, 'data')
const uploadsDir = path.join(__dirname, 'uploads')

if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true })

app.use(cors())
app.use(express.json())
app.use('/uploads', express.static(uploadsDir))

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadsDir),
  filename: (_req, file, cb) => cb(null, `${uuidv4()}${path.extname(file.originalname)}`),
})
const upload = multer({ storage })

function readData(file) {
  const filePath = path.join(dataDir, file)
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'))
}

function writeData(file, data) {
  const filePath = path.join(dataDir, file)
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
}

function auth(req, res, next) {
  const token = req.headers.authorization?.replace('Bearer ', '')
  if (token !== ADMIN_TOKEN) return res.status(401).json({ error: 'Unauthorized' })
  next()
}

app.post('/api/auth/login', (req, res) => {
  if (req.body.password === ADMIN_PASSWORD) {
    return res.json({ token: ADMIN_TOKEN })
  }
  res.status(401).json({ error: 'Invalid password' })
})

app.get('/api/gallery', (_req, res) => {
  const gallery = readData('gallery.json').sort((a, b) => new Date(b.date) - new Date(a.date))
  res.json(gallery)
})

app.get('/api/gallery/:id', (req, res) => {
  const item = readData('gallery.json').find((g) => g.id === req.params.id)
  if (!item) return res.status(404).json({ error: 'Not found' })
  res.json(item)
})

app.post('/api/gallery', auth, (req, res) => {
  const gallery = readData('gallery.json')
  const item = { id: uuidv4(), ...req.body }
  gallery.unshift(item)
  writeData('gallery.json', gallery)
  res.status(201).json(item)
})

app.put('/api/gallery/:id', auth, (req, res) => {
  const gallery = readData('gallery.json')
  const idx = gallery.findIndex((g) => g.id === req.params.id)
  if (idx === -1) return res.status(404).json({ error: 'Not found' })
  gallery[idx] = { ...gallery[idx], ...req.body }
  writeData('gallery.json', gallery)
  res.json(gallery[idx])
})

app.delete('/api/gallery/:id', auth, (req, res) => {
  const gallery = readData('gallery.json').filter((g) => g.id !== req.params.id)
  writeData('gallery.json', gallery)
  res.status(204).end()
})

app.post('/api/upload', auth, upload.single('image'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' })
  res.json({ url: `/uploads/${req.file.filename}` })
})

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`)
})
