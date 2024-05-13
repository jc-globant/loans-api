import { DataTypes } from 'sequelize'
import { db } from '../db/index.js'

export const Loan = db.define('Loan', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    get() {
      const id = this.getDataValue('id')
      return id != null ? String(id).padStart(6, '0') : null
    },
    allowNull: false,
    unique: true,
    validate: {
      isNumeric: true,
      len: [1, 6],
    },
  },
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
