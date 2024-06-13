import { request, response } from 'express'
import { service } from '../services/client.service.js'
import { OK, INTERNAL_SERVER_ERROR } from '../constants/https-status-codes.js'

export const controller = {
  async create(req = request, res = response) {
    try {
      const data = await service.create({ ...req.body })
      res.json(data).status(OK)
    } catch (error) {
      console.error(error)
      res.status(INTERNAL_SERVER_ERROR).json({ error: 'Internal server error' })
    }
  },
  async getClients(_ = request, res = response) {
    try {
      const data = await service.getClients()
      res.json(data).status(OK)
    } catch (error) {
      console.error(error)
      res.status(INTERNAL_SERVER_ERROR).json({ error: 'Internal server error' })
    }
  },
  async getClient(req = request, res = response) {
    try {
      const { id } = req.params
      const data = await service.getClient({ id })
      res.json(data).status(OK)
    } catch (error) {
      console.error(error)
      res.status(INTERNAL_SERVER_ERROR).json({ error: 'Internal server error' })
    }
  },
  async update(req = request, res = response) {
    try {
      const response = service.update({ ...req.body })

      return res.status(OK).json(response)
    } catch (error) {
      console.error(error)
      res.status(INTERNAL_SERVER_ERROR).json({ error: 'Algo salio mal al intenar actualizar el Cliente' })
    }
  },
}
