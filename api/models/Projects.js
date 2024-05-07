import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const Project = db.define('projects', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	image: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	deploy: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	technologies: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});

export default Project;
