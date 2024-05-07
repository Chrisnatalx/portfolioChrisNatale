import express from 'express';
import { handlerGetProjects } from '../handlers/handlerGetProjects.js';
const router = express.Router();

router.get('/', handlerGetProjects);

export default router;
