import { DataTypes } from 'sequelize';
import { sequelize } from '../db/index.js';

export const Loan = sequelize.define('Loan', {
  id: {
    type: DataTypes.TEXT,
    primaryKey: true,
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
