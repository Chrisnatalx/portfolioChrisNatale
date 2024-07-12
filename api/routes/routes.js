import express from 'express';
import { handlerGetProjects } from '../handlers/handlerGetProjects.js';
const router = express.Router();

router.get('/projects', handlerGetProjects);

export default router;
