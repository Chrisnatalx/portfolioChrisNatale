import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const db = new Sequelize(
	`postgresql://postgres:OayGDSvwuVhlfuhGyAMXdroEQSHfQVWU@roundhouse.proxy.rlwy.net:22089/railway`
);

export default db;
