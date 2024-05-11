import { Router } from 'express';
import { authRouter } from './auth.routes.js';
import { loanRouter } from './loan.routes.js';

export const routes = Router();

routes.use(authRouter);
routes.use(loanRouter);
