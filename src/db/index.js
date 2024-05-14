import { Sequelize } from 'sequelize'

export const db = new Sequelize({ dialect: 'sqlite', storage: './src/db/loans.db' })

db.sync({ force: false })
  .then(() => {
    console.info('Tables synchronized successfully')
  })
  .catch(error => {
    console.error('Error synchronizing tables:', error)
  })
