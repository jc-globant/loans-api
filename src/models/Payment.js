import { DataTypes } from 'sequelize'
import { db } from '../db/index.js'

export const Payment = db.define('Payment', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
    validate: {
      isNumeric: true,
    },
  },
  paymentDate: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  actualPaymentDate: {
    type: DataTypes.TEXT,
  },
  amountPaid: {
    type: DataTypes.REAL,
  },
  status: {
    type: DataTypes.INTEGER,
  },
  note: {
    type: DataTypes.TEXT,
  },
})
