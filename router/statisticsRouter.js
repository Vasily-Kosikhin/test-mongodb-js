import { Router } from 'express';
import statisticsController from '../controllers/statistics-controller.js';

const statisticsRouter = new Router();

statisticsRouter.post('/create', statisticsController.create);

export default statisticsRouter;
