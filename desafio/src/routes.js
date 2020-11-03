import { Router } from 'express';

import BillsController from './app/controllers/BillsController';

const routes = new Router();

routes.get('/bills', BillsController.index);
routes.get('/bills/details', BillsController.show);
routes.post('/bills', BillsController.store);

export default routes;
