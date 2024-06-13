import { request, response } from 'express'
import { service } from '../services/loan.service.js'
import { OK, INTERNAL_SERVER_ERROR } from '../constants/https-status-codes.js'

export const controller = {
  async create(req = request, res = response) {
    try {
      const { amount, ClientId, periodicPayments, active } = req.body
      const data = await service.create({ amount, ClientId, periodicPayments, active })
      res.json(data).status(OK)
    } catch (error) {
      console.error(error)
      res.status(INTERNAL_SERVER_ERROR).json({ error: 'Internal server error' })
    }
  },

  async getLoan(req = request, res = response) {
    try {
      const data = await service.getLoan({ id: req.params.id })
      res.json(data).status(OK)
    } catch (error) {
      console.error(error)
      res.status(INTERNAL_SERVER_ERROR).json({ error: 'Internal server error' })
    }
  },

  async getLoans(_ = request, res = response) {
    try {
      const data = await service.getLoans()
      res.json(data).status(OK)
    } catch (error) {
      console.error(error)
      res.status(INTERNAL_SERVER_ERROR).json({ error: 'Internal server error' })
    }
  },
}
