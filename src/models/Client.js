import { DataTypes } from 'sequelize';
import { sequelize } from '../db/index.js';

export const Client = sequelize.define('Client', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    get() {
      const id = this.getDataValue('id');
      return id != null ? String(id).padStart(6, '0') : null;
    },
    allowNull: false,
    unique: true,
    validate: {
      isNumeric: true,
      len: [1, 6],
    },
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  phone: {
    type: DataTypes.TEXT,
  },
});
