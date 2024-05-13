import { Router } from 'express'
import { check } from 'express-validator'
import { controller } from '../controllers/payment.controller.js'
import { validateFields } from '../middlewares/validate-fields.js'

export const paymentRouter = Router()

paymentRouter.get('/payments/', controller.getPayments)

paymentRouter.get('/payments/:id', controller.getPayment)

paymentRouter.post(
  '/payments',
  [
    check('paymentDate', 'is required').notEmpty().isString(),
    check('actualPaymentDate', 'is required').isString(),
    check('amountPaid', 'is required').notEmpty().isFloat(),
    check('status', 'is required').notEmpty().isString(),
    check('note', 'is required').isString(),
    check('LoanId', 'is required').notEmpty().isNumeric(),
    validateFields,
  ],
  controller.create,
)
