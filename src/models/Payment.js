import { DataTypes } from 'sequelize';

export default function initPaymentModel(sequelize) {
  const Payment = sequelize.define('Payment', {
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

  return Payment;
}
