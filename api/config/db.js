import { Sequelize } from 'sequelize';
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const db = new Sequelize(
	`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/Igportfolio`
);
