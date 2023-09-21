import { Router } from 'express';
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getAllSellerProducts,
  getSingleProduct,
  getSingleSellerProduct,
  updateProduct,
} from '../controllers/productController.js';
import {
  validateProductIdParam,
  validateProductInput,
} from '../middlewares/validationMiddleware.js';
import { authorizePermissions } from '../middlewares/authMiddleware.js';
const router = Router();

// router.get('/getproductcount', getCount);
router.get('/', [authorizePermissions('user'), getAllProducts]);

router.post('/seller', [
  authorizePermissions('seller'),
  validateProductInput,
  createProduct,
]);
router.get('/seller', [authorizePermissions('seller'), getAllSellerProducts]);

router.get('/:productId', [
  authorizePermissions('user'),
  validateProductIdParam,
  getSingleProduct,
]);
router.get('/seller/:productId', [
  authorizePermissions('seller'),
  validateProductIdParam,
  getSingleSellerProduct,
]);
router.patch('/seller/:productId', [
  authorizePermissions('seller'),
  validateProductIdParam,
  validateProductInput,
  updateProduct,
]);
router.delete('/seller/:productId', [
  authorizePermissions('seller'),
  validateProductIdParam,
  deleteProduct,
]);

export default router;
