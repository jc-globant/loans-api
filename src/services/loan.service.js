import { Loan, Client } from '../models/index.js'

const create = async ({ amount, ClientId, periodicPayments }) => {
  try {
    const resp = await Loan.create({
      amount,
      periodicPayments,
      ClientId,
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
        { model: Client, attributes: ['name'] }, // Incluye el nombre del cliente
        // { model: Payment, attributes: ['paymentDate', 'amountPaid', 'status'] } // Incluye los detalles de pago (si existen)
      ],
      attributes: ['id', 'ClientId', 'amount', 'periodicPayments'], // Atributos del préstamo
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
