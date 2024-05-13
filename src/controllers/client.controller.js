import { request, response } from 'express';
import { createClient } from '../services/client.service.js';

export const controller = {
  async create(req = request, res = response) {
    try {
      const { name, phone } = req.body;
      console.log(name, phone);
      const data = await createClient({ name, phone });
      res.json(data).status(200);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};
