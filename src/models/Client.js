import { DataTypes } from 'sequelize'
import { db } from '../db/index.js'
import { id } from '../db/fields/id.js'

export const Client = db.define('Client', {
  id,
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  phone: {
    type: DataTypes.TEXT,
  },
})
