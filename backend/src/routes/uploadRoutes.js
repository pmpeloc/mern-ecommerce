import { Router } from 'express';
import { upload } from '../controllers/uploadController.js';
import { admin, protect } from '../middlewares/authMiddleware.js';

const router = Router();

router.post('/', protect, admin, upload);

export default router;
