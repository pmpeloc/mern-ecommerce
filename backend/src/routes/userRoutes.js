import { Router } from 'express';
import { authUser } from '../controllers/userController.js';

const router = Router();

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
router.post('/login', authUser);

export default router;
