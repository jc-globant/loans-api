import Database from 'better-sqlite3';
import { Sequelize } from 'sequelize';

export const db = new Database('./src/db/loans.db');

export const sequelize = new Sequelize({ dialect: 'sqlite', storage: './src/db/loans.db' });

sequelize
  .sync()
  .then(() => {
    console.log('Tables synchronized successfully');
  })
  .catch(error => {
    console.error('Error synchronizing tables:', error);
  });
