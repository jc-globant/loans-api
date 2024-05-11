import { Router } from 'express';
import { loanController } from '../controllers/loan.controller.js';

export const loanRouter = Router();

loanRouter.post('/loans/:id', loanController.getLoanById);
