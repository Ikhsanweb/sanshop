import { Router } from 'express';
import {
  getRecordedProduct,
  createRecordedProduct,
} from '../controllers/recordedProductController.js';
import { validateRecordedProductInput } from '../middlewares/validationMiddleware.js';

const router = Router();

router.get('/', getRecordedProduct);
router.post('/', validateRecordedProductInput, createRecordedProduct);

export default router;
