import express from 'express';
import router from './routes/routes.js';
import db from './config/db.js';
import Projects from './models/Projects.js';
import cors from 'cors';
const app = express();

//conexion a la DB

try {
	await db.authenticate();
	db.sync({ force: false });
	console.log('Conexion correcta a la base de datos');
} catch (error) {
	console.log(error);
}

const PORT = 3001;

app.use(cors());
app.use('/', router);

app.listen(PORT, () => {
	console.log(`El servidor esta funcionando en el puerto ${PORT}`);
});
