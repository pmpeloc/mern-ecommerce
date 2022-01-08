import { Router } from 'express';
import { upload, uploadConfig } from '../controllers/uploadController.js';
import { admin, protect } from '../middlewares/authMiddleware.js';

const router = Router();

router.post('/', protect, admin, uploadConfig.single('image'), upload);

export default router;
