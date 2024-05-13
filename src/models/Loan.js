import { DataTypes } from 'sequelize'
import { db } from '../db/index.js'
import { id } from '../db/fields/id.js'

export const Loan = db.define('Loan', {
  id,
  amount: {
    type: DataTypes.REAL,
    allowNull: false,
  },
  periodicPayments: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  clientId: {
    type: DataTypes.INTEGER,

    allowNull: false,
    // unique: true,
    validate: {
      isNumeric: true,
      len: [1, 6],
    },
  },
})

Loan.associate = models => {
  Loan.belongsTo(models.Client, { foreignKey: 'clientId' })
}
