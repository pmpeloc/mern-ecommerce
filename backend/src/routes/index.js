import { Router } from 'express';
const router = Router();
// import all routes
import productRouter from './product.js';

router.use('/products', productRouter);

export default router;
