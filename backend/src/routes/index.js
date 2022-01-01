import { Router } from 'express';
const router = Router();
// import all routes
import productRouter from './productRoutes.js';
import userRouter from './userRoutes.js';

router.use('/products', productRouter);
router.use('/users', userRouter);

export default router;
