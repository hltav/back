import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ProductController from './app/controllers/ProductController';
import CategoryController from './app/controllers/CategoryController';
import OrderController from './app/controllers/OrderController';

import authMiddleware from './app/middlewares/auth';

const upLoad = multer(multerConfig);
const routes = new Router();

routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.post('/products', upLoad.single('file'), ProductController.store);
routes.put('/products/:id', upLoad.single('file'), ProductController.update);
routes.get('/products', ProductController.index);

routes.post('/categories', upLoad.single('file'), CategoryController.store);
routes.put('/categories/:id', upLoad.single('file'), CategoryController.update);
routes.get('/categories', CategoryController.index);

routes.post('/orders', OrderController.store);
routes.put('/orders/:id', OrderController.update);
routes.get('/orders', OrderController.index);

export default routes;
