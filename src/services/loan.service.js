import { Loan } from '../models/index.js'
import { db } from '../db/index.js'

const getLoanById = ({ id }) => {
  try {
    const query = `
    SELECT
      L.id AS loanId,
      L.clientId,
      C.name AS clientName,
      L.loanAmount,
      L.monthlyPayments,
      L.referral,
      P.paymentDate,
      P.amountPaid,
      P.status
    FROM
        Loans AS L
    JOIN
        Clients AS C ON L.clientId = C.id
    LEFT JOIN
        Payments AS P ON L.id = P.loanId
    WHERE
        L.id = ?;
`

    const stmt = db.prepare(query)
    const result = stmt.get(id)

    return result
  } catch (error) {
    console.error(error)
    return {}
  }
}

const getLoanDetails = async ({ id }) => {
  try {
    // Utiliza los modelos y las relaciones para obtener los detalles del préstamo
    const loanDetails = await Loan.findOne({
      where: { id },
      // include: [
      //   { model: Client, attributes: ['name'] }, // Incluye el nombre del cliente
      //   { model: Payment, attributes: ['paymentDate', 'amountPaid', 'status'] } // Incluye los detalles de pago (si existen)
      // ],
      // attributes: [
      //   'id', 'clientId', 'loanAmount', 'monthlyPayments', 'referral'
      // ] // Atributos del préstamo
    })

    return loanDetails
  } catch (error) {
    console.error('Error al obtener los detalles del préstamo:', error)
    throw error
  }
}

const create = async ({ amount, clientId, periodicPayments }) => {
  try {
    const resp = await Loan.create({ amount, clientId, periodicPayments })

    return resp
  } catch (error) {
    console.error('error:', error)
    throw error
  }
}

export const service = {
  getLoanById,
  getLoanDetails,
  create,
}
