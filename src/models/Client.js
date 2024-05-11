import { DataTypes } from 'sequelize';
import { sequelize } from '../db/index.js';

export const Client = sequelize.define('Client', {
  id: {
    type: DataTypes.TEXT, //TODO: CHECK UUID
    primaryKey: true,
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  phone: {
    type: DataTypes.TEXT,
  },
});
