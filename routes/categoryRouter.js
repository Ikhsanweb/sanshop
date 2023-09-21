import { Router } from 'express';
import {
  createCategory,
  deleteCategory,
  getAllCategory,
  getSingleCategory,
  updateCategory,
} from '../controllers/categoryController.js';
import {
  validateCategoryIdParam,
  validateCategoryInput,
} from '../middlewares/validationMiddleware.js';
import { authorizePermissions } from '../middlewares/authMiddleware.js';
const router = Router();

router.get('/', getAllCategory);
router.post('/', [
  authorizePermissions('admin'),
  validateCategoryInput,
  createCategory,
]);
router.get('/:categoryId', validateCategoryIdParam, getSingleCategory);
router.patch(
  '/:categoryId',
  validateCategoryIdParam,
  validateCategoryInput,
  updateCategory
);
router.delete('/:categoryId', [
  authorizePermissions('admin'),
  validateCategoryIdParam,
  deleteCategory,
]);

export default router;
