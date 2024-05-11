import { DataTypes } from 'sequelize';

export default function initClientModel(sequelize) {
  const Client = sequelize.define('Client', {
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

  return Client;
}
