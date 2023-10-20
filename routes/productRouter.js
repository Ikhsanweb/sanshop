import { Router } from 'express';
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getAllSellerProducts,
  getSearchedProduct,
  getSingleProduct,
  getSingleSellerProduct,
  updateProduct,
} from '../controllers/productController.js';
import {
  validateProductIdSellerParam,
  validateProductIdUserParam,
  validateProductInput,
} from '../middlewares/validationMiddleware.js';
import { authorizePermissions } from '../middlewares/authMiddleware.js';
import upload from '../middlewares/multerMiddleware.js';
const router = Router();

// router.get('/getproductcount', getCount);
router.get('/', getAllProducts);

router.post('/seller', [
  authorizePermissions('seller'),
  upload.single('image'),
  validateProductInput,
  createProduct,
]);

router.get('/searchedProduct', getSearchedProduct);

router.get('/seller', [authorizePermissions('seller'), getAllSellerProducts]);

router.get('/:productId', validateProductIdUserParam, getSingleProduct);
router.get('/seller/:productId', [
  authorizePermissions('seller'),
  validateProductIdSellerParam,
  getSingleSellerProduct,
]);
router.patch('/seller/:productId', [
  authorizePermissions('seller'),
  upload.single('image'),
  validateProductIdSellerParam,
  validateProductInput,
  updateProduct,
]);
router.delete('/seller/:productId', [
  authorizePermissions('seller'),
  validateProductIdSellerParam,
  deleteProduct,
]);

export default router;
