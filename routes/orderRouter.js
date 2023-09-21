import { Router } from 'express';
import {
  sellerGetAllOrderItem,
  sellerGetHistory,
  sellerGetSingleOrderItems,
  sellerPatchToDelivered,
  sellerPatchToShipping,
  userCreateOrder,
  userDeleteOrderCompletely,
  userGetAllOrderItem,
  userGetHistory,
  userGetOrder,
  userGetSingleOrderItem,
  userPatchToApproved,
  userPushOrderItemToEachHistory,
} from '../controllers/orderController.js';
import { authorizePermissions } from '../middlewares/authMiddleware.js';
import {
  validateCreateOrderInput,
  validateUpdateToDeliveredInput,
  validateUpdateToShippingInput,
} from '../middlewares/validationMiddleware.js';
const router = Router();

router.post('/user/create-order', [
  authorizePermissions('user'),
  validateCreateOrderInput,
  userCreateOrder,
]);
router.get('/user/get-order', [authorizePermissions('user'), userGetOrder]);
router.get('/user/get-all-order-item', [
  authorizePermissions('user'),
  userGetAllOrderItem,
]);
router.get('/user/get-single-order-item/:orderItemId', [
  authorizePermissions('user'),
  userGetSingleOrderItem,
]);
router.get('/seller/get-all-order-item', [
  authorizePermissions('seller'),
  sellerGetAllOrderItem,
]);
router.get('/seller/get-single-order-item/:orderItemId', [
  authorizePermissions('seller'),
  sellerGetSingleOrderItems,
]);
router.patch('/seller/to-shipping/:orderItemId', [
  authorizePermissions('seller'),
  validateUpdateToShippingInput,
  sellerPatchToShipping,
]);
router.patch('/seller/to-delivered/:orderItemId', [
  authorizePermissions('seller'),
  validateUpdateToDeliveredInput,
  sellerPatchToDelivered,
]);
router.patch('/user/to-approved', userPatchToApproved);
router.post('/user/push-history', userPushOrderItemToEachHistory);
router.delete('/user/delete-order', userDeleteOrderCompletely);
router.get('/user/get-history', userGetHistory);
router.get('/seller/get-history', sellerGetHistory);

export default router;
