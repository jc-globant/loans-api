import { Loan, Client, Payment } from '../models/index.js'

const create = async ({ amount, ClientId, periodicPayments, active }) => {
  try {
    const resp = await Loan.create({
      amount,
      periodicPayments,
      ClientId,
      active,
    })

    return resp
  } catch (error) {
    console.error('error:', error)
    throw error
  }
}

const getLoans = async () => {
  try {
    const loans = await Loan.findAll()
    return loans
  } catch (error) {
    console.error('error:', error)
    throw error
  }
}

const getLoan = async ({ id }) => {
  try {
    const loanDetails = await Loan.findOne({
      where: { id },
      include: [
        { model: Client, attributes: ['name', 'phone'] },
        { model: Payment, attributes: ['paymentDate', 'amountPaid', 'status'] },
      ],
      attributes: ['id', 'ClientId', 'amount', 'periodicPayments', 'createdAt'],
    })

    return loanDetails
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const service = {
  create,
  getLoans,
  getLoan,
}
