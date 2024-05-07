import express from 'express';
import router from './routes/routes.js';

const app = express();
const PORT = 3001;

app.use('/', router);

app.listen(PORT, () => {
	console.log(`El servidor esta funcionando en el puerto ${PORT}`);
});
