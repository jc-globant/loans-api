import { ExampleModel } from '../models/ExampleModel.js';

export const exampleController = {
  async createExample(req, res) {
    try {
      // const { name, description } = req.body;
      const example = await ExampleModel.create({ name: 'hola', description: 'mundo' });
      res.status(201).json(example);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  async getExample(req, res) {
    try {
      const id = req.params.id;
      const example = await ExampleModel.findByPk(id);
      if (!example) {
        return res.status(404).json({ error: 'Example not found' });
      }
      res.json(example);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};
