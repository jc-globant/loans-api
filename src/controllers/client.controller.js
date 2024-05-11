import { createClient } from '../services/client.service.js';

export const controller = {
  async create(req, res) {
    try {
      const data = await createClient({ name: 'jorge', phone: '121' });
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};
