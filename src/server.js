import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { routes } from './routes/index.js'

export const server = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

server.use(morgan('tiny'))
server.use(cors())
server.use(express.json())

server.use(routes)

server.get('/hello', (_, res) => {
  res.send('hello world')
})

// const date = new Date('2024-06-13T00:32:34.124Z')
// console.log(date.toLocaleString('es-MX', { timeZone: 'America/Mexico_City' }))

// console.log('2024-06-13T00:32:34.124Z')

server.use('/', express.static(path.join(__dirname, 'public')))
