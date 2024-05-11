import { request, response } from 'express';
import service from '../services/loan.service.js';

export const loanController = {
  async getLoanById(req = request, res = response) {
    try {
      const data = await service.getLoanDetails({ id: req.params.id });
      res.json(data).status(200);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};
