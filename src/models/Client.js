import { DataTypes } from 'sequelize'
import { db } from '../db/index.js'

export const Client = db.define('Client', {
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
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  phone: {
    type: DataTypes.TEXT,
  },
})
