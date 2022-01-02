import { Router } from 'express';
const router = Router();
// import all routes
import productRouter from './productRoutes.js';
import userRouter from './userRoutes.js';
import orderRouter from './orderRoutes.js';

router.use('/products', productRouter);
router.use('/users', userRouter);
router.use('/orders', orderRouter);

export default router;
