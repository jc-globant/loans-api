import { DataTypes } from 'sequelize';
import { sequelize } from '../db/index.js';

export const Loan = sequelize.define('Loan', {
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
  loanAmount: {
    type: DataTypes.REAL,
    allowNull: false,
  },
  monthlyPayments: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  referral: {
    type: DataTypes.TEXT,
  },
});

Loan.associate = models => {
  Loan.belongsTo(models.Client, { foreignKey: 'clientId' });
};
