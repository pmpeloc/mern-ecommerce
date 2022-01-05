import { Router } from 'express';
import {
  getProducts,
  getProductById,
  deleteProduct,
} from '../controllers/productController.js';
import { admin, protect } from '../middlewares/authMiddleware.js';

const router = Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.delete('/:id', protect, admin, deleteProduct);

export default router;
