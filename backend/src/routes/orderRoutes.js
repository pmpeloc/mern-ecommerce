import { Router } from 'express';
import { addOrderItems, getOrderById } from '../controllers/orderController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = Router();

router.post('/', protect, addOrderItems);
router.get('/:id', protect, getOrderById);

export default router;
