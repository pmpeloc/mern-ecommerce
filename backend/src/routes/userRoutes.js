import { Router } from 'express';
import { authUser, getUserProfile } from '../controllers/userController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = Router();

router.post('/login', authUser);
router.get('/profile', protect, getUserProfile);

export default router;
