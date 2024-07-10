import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
	connectionString: process.env.POSTGRES_URL,
});

dotenv.config({ path: '.env' });
const {
	DB_USER,
	DB_PASSWORD,
	DB_HOST,
	POSTGRES_USER,
	POSTGRES_HOST,
	POSTGRES_PASSWORD,
} = process.env;

const db = new Sequelize(
	`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/Igportfolio`
);

export default db;
