import { Router } from 'express';
import { controller } from '../controllers/client.controller.js';

export const clientController = Router();

clientController.post('/clients', controller.create);
