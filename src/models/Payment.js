import { DataTypes } from 'sequelize';
import { sequelize } from '../db/index.js';

export const Payment = sequelize.define('Payment', {
  id: {
    type: DataTypes.TEXT,
    primaryKey: true,
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
});

Payment.associate = models => {
  Payment.belongsTo(models.Loan, { foreignKey: 'loanId' });
};
