import { request, response } from 'express'
import { service } from '../services/payment.service.js'

export const controller = {
  async create(req = request, res = response) {
    try {
      const data = await service.create({ ...req.body })
      res.json(data).status(200)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Internal server error' })
    }
  },

  async getPayment(req = request, res = response) {
    try {
      const data = await service.getPayment({ id: req.params.id })
      res.json(data).status(200)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Internal server error' })
    }
  },

  async getPayments(_ = request, res = response) {
    try {
      const data = await service.getPayments()
      res.json(data).status(200)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Internal server error' })
    }
  },
}
