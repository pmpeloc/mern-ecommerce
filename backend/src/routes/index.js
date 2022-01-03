import { Router } from 'express';
const router = Router();
// import all routes
import productRouter from './productRoutes.js';
import userRouter from './userRoutes.js';
import orderRouter from './orderRoutes.js';
import config from '../config/index.js';

router.use('/products', productRouter);
router.use('/users', userRouter);
router.use('/orders', orderRouter);

router.use('/config/paypal', (req, res) => res.send(config.payPal));

export default router;
