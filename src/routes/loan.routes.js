import { Router } from 'express';
import { loanController } from '../controllers/loan.controller.js';

export const loanRouter = Router();

loanRouter.get('/loans/:id', loanController.getLoanById);
