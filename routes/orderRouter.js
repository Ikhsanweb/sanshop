import { Router } from 'express';
import {
  sellerGetAllOrderItem,
  sellerGetHistories,
  sellerGetHistory,
  sellerGetSingleOrderItems,
  sellerPatchToDelivered,
  sellerPatchToReturned,
  sellerPatchToShipping,
  userCreateOrder,
  userGetAllOrderItem,
  userGetHistories,
  userGetHistory,
  userGetOrder,
  userGetOrders,
  userGetSingleOrderItem,
  userPatchToApproved,
  userPatchToNotApproved,
} from '../controllers/orderController.js';
import { authorizePermissions } from '../middlewares/authMiddleware.js';
import {
  validateCreateOrderInput,
  validateUpdateToApprovedOrderItemInput,
  validateUpdateToDeliveredInput,
  validateUpdateToNotApprovedOrderItemInput,
  validateUpdateToReturnedOrderItemInput,
  validateUpdateToShippingInput,
} from '../middlewares/validationMiddleware.js';
const router = Router();

router.post('/user/create-order', [
  authorizePermissions('user'),
  validateCreateOrderInput,
  userCreateOrder,
]);
router.get('/user/get-order', [authorizePermissions('user'), userGetOrders]);
router.get('/user/get-order/:orderId', [
  authorizePermissions('user'),
  userGetOrder,
]);
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
router.patch('/user/to-approved/:orderItemId', [
  authorizePermissions('user'),
  validateUpdateToApprovedOrderItemInput,
  userPatchToApproved,
]);
router.patch('/user/to-not-approved/:orderItemId', [
  authorizePermissions('user'),
  validateUpdateToNotApprovedOrderItemInput,
  userPatchToNotApproved,
]);
router.patch('/seller/to-returned/:orderItemId', [
  authorizePermissions('seller'),
  validateUpdateToReturnedOrderItemInput,
  sellerPatchToReturned,
]);
router.get('/user/get-history', [
  authorizePermissions('user'),
  userGetHistories,
]);
router.get('/user/get-history/:userHistoryId', [
  authorizePermissions('user'),
  userGetHistory,
]);
router.get('/seller/get-history', [
  authorizePermissions('seller'),
  sellerGetHistories,
]);
router.get('/seller/get-history/:sellerHistoryId', [
  authorizePermissions('seller'),
  sellerGetHistory,
]);

export default router;
