import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()
const port = process.env.PORT ? parseInt(process.env.PORT) : 4000

app.use(cors())
app.use(bodyParser.json())

app.get('/api/profile', (req, res) => {
  res.json({
    username: 'seeduser',
    displayName: 'Seed User',
    bio: 'A curious developer exploring AI-driven self-improvement.',
    skills: ['JavaScript','TypeScript','React']
  })
})

app.post('/api/predict', (req, res) => {
  // mock predict response
  const { seedText } = req.body || {}
  const milestones = [
    { id: 'm1', title: 'Lead a high-impact project', description: `Lead a project that delivers measurable results and grows your leadership profile. Seed: ${seedText?.slice(0,40)}` },
    { id: 'm2', title: 'Publish a technical talk or blog', description: 'Share your work via a conference talk or a well-received blog series.' },
    { id: 'm3', title: 'Mentor junior developers', description: 'Actively mentor others to solidify your expertise and grow influence.' }
  ]
  res.json({ visionSummary: 'A confident growth-focused trajectory', milestones })
})

app.listen(port, ()=>{
  console.log(`Backend running on http://localhost:${port}`)
})

