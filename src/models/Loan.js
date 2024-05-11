import { DataTypes } from 'sequelize';

export default function initExampleModel(sequelize) {
  const ExampleModel = sequelize.define('Prestamo', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  });

  return ExampleModel;
}
