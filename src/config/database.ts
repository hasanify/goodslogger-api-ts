import {Sequelize} from 'sequelize';
import {POSTGRES_DB_URL} from './secrets';

const db = new Sequelize(POSTGRES_DB_URL, {
  logging: false,
  dialect: 'postgres',
});

export default db;
