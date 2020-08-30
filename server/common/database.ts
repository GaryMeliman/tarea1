import { Sequelize } from 'sequelize-typescript';
import Examples from '../api/model/example';
  // @ts-ignore
export default new Sequelize({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  dialect: 'mysql',
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  storage: ':memory:',
  models: [Examples],
});
