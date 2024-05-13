import { request, response } from 'express'
import { service } from '../services/loan.service.js'

export const controller = {
  async create(req = request, res = response) {
    try {
      const { amount, clientId, periodicPayments } = req.body
      const data = await service.create({ amount, clientId, periodicPayments })
      res.json(data).status(200)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Internal server error' })
    }
  },

  async getLoan(req = request, res = response) {
    try {
      const data = await service.getLoanDetails({ id: req.params.id })
      res.json(data).status(200)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Internal server error' })
    }
  },
}
