import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const db = new Sequelize(
	`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/Igportfolio`
);

export default db;
