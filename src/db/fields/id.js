import { DataTypes } from 'sequelize'

export const id = {
  type: DataTypes.INTEGER,
  primaryKey: true,
  autoIncrement: true,
  get() {
    const id = this.getDataValue('id')
    return id != null ? String(id).padStart(6, '0') : null
  },
  allowNull: false,
  unique: true,
  validate: {
    isNumeric: true,
    len: [1, 6],
  },
}
