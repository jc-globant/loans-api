import { Client } from './Client.js'
import { Loan } from './Loan.js'
// import { Payment } from './Payment.js'

Client.hasMany(Loan)
Loan.belongsTo(Client)

export {
  Client,
  Loan,
  // Payment
}
