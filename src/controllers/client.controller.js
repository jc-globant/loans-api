import { request, response } from 'express'
import { service } from '../services/client.service.js'

export const controller = {
  async create(req = request, res = response) {
    try {
      const { name, phone, reference } = req.body
      const data = await service.create({ name, phone, reference })
      res.json(data).status(200)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Internal server error' })
    }
  },
  async getClients(_ = request, res = response) {
    try {
      const data = await service.getClients()
      res.json(data).status(200)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Internal server error' })
    }
  },
  async getClient(req = request, res = response) {
    try {
      const { id } = req.params
      const data = await service.getClient({ id })
      res.json(data).status(200)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Internal server error' })
    }
  },
}
