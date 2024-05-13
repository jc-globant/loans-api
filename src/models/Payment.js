import { DataTypes } from 'sequelize';
import { sequelize } from '../db/index.js';

export const Payment = sequelize.define('Payment', {
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
