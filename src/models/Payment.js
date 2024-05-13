// import { DataTypes } from 'sequelize'
// import { db } from '../db/index.js'
// import { id } from '../db/fields/id.js'

// export const Payment = db.define('Payment', {
//   id,
//   paymentDate: {
//     type: DataTypes.TEXT,
//     allowNull: false,
//   },
//   actualPaymentDate: {
//     type: DataTypes.TEXT,
//   },
//   amountPaid: {
//     type: DataTypes.REAL,
//   },
//   status: {
//     type: DataTypes.INTEGER,
//   },
//   note: {
//     type: DataTypes.TEXT,
//   },
// })

// Payment.associate = models => {
//   Payment.belongsTo(models.Loan, { foreignKey: 'loanId' })
// }
