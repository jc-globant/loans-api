import { Router } from 'express';
import { loanController } from '../controllers/loan.controller.js';
// import { exampleController } from '../controllers/example.controller.js';

export const loanRouter = Router();

loanRouter.get('/loans/:id', loanController.getLoanById);

// loanRouter.post('/example', exampleController.createExample);
// loanRouter.get('/example/:id', exampleController.getExample);
