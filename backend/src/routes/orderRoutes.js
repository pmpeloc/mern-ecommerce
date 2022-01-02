import { Router } from 'express';
import { addOrderItems } from '../controllers/orderController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = Router();

router.post('/', protect, addOrderItems);

export default router;
