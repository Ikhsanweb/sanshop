import { body, param, validationResult } from 'express-validator';
import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} from '../errors/customErrors.js';
import Category from '../models/categoryModel.js';
import Product from '../models/productModel.js';
import User from '../models/userModel.js';
import Order from '../models/orderModel.js';
import OrderItem from '../models/orderItemModel.js';
import RecordedProduct from '../models/recordedProductModel.js';
import mongoose from 'mongoose';

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);

        const firstMessage = errorMessages[0];
        console.log(Object.getPrototypeOf(firstMessage));

        if (errorMessages[0].startsWith('no category')) {
          throw new NotFoundError(errorMessages);
        }

        if (errorMessages[0].startsWith('no product')) {
          throw new NotFoundError(errorMessages);
        }

        if (errorMessages[0].startsWith('no user')) {
          throw new NotFoundError(errorMessages);
        }

        if (errorMessages[0].startsWith('not authorized')) {
          throw new UnauthorizedError(errorMessages);
        }

        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

// CATEGORY VALIDATION
export const validateCategoryInput = withValidationErrors([
  body('name').notEmpty().withMessage('name is required'),
  body('icon').notEmpty().withMessage('icon is required'),
  body('color').notEmpty().withMessage('color is required'),
]);

export const validateCategoryIdParam = withValidationErrors([
  param('categoryId').custom(async (value, { req }) => {
    const isValidMongoId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidMongoId) throw new BadRequestError('Invalid MongoDB id');

    const category = await Category.findById(value);
    if (!category) throw new NotFoundError(`no category with id ${value}`);
  }),
]);

// PRODUCT VALIDATION
export const validateProductInput = withValidationErrors([
  body('name').notEmpty().withMessage('name is required'),
  body('description').notEmpty().withMessage('description is required'),
  body('richDescription')
    .notEmpty()
    .withMessage('rich description is required'),
  body('brand').notEmpty().withMessage('brand is required'),
  body('price').notEmpty().withMessage('price is required'),
  body('category').custom(async (value, { req }) => {
    const isValidMongoId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidMongoId)
      throw new BadRequestError(
        'Invalid MongoDB id for collection in req.body categoryId'
      );

    const category = await Category.findById(value);
    if (!category) throw new NotFoundError(`no category with id ${value}`);
  }),
  body('countInStock').notEmpty().withMessage('count in stock is required'),
]);

export const validateProductIdUserParam = withValidationErrors([
  param('productId').custom(async (value, { req }) => {
    const isValidMongoId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidMongoId) throw new BadRequestError('Invalid MongoDB id');

    const product = await Product.findById(value);
    if (!product) throw new NotFoundError(`no product with id ${value}`);
  }),
]);

export const validateProductIdSellerParam = withValidationErrors([
  param('productId').custom(async (value, { req }) => {
    const isValidMongoId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidMongoId) throw new BadRequestError('Invalid MongoDB id');

    const product = await Product.findById(value);
    if (!product) throw new NotFoundError(`no product with id ${value}`);

    if (product.createdBy.toString() !== req.user.userId)
      throw new UnauthorizedError('not authorized to access this route');
  }),
]);

// AUTH VALIDATION
export const validateRegisterInput = withValidationErrors([
  body('fullName').notEmpty().withMessage('full name is required'),
  body('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email format')
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) {
        throw new BadRequestError('email already exists');
      }
    }),
  body('password')
    .notEmpty()
    .withMessage('password is required')
    .isLength({ min: 8 })
    .withMessage('password must be at least 8 characters long'),
  body('phoneNumber').notEmpty().withMessage('phone number is required'),
]);
export const validateLoginInput = withValidationErrors([
  body('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email format'),
  body('password').notEmpty().withMessage('password is required'),
]);

export const validateUpdateUserInput = withValidationErrors([
  body('fullName').notEmpty().withMessage('full name is required'),
  body('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email format')
    .custom(async (email, { req }) => {
      const user = await User.findOne({ email });
      if (user && user._id.toString() !== req.user.userId) {
        throw new BadRequestError('email is already exist');
      }
    }),
  body('phoneNumber').notEmpty().withMessage('phone number is required'),
]);

// ORDER VALIDATION
export const validateCreateOrderInput = withValidationErrors([
  body('orderItems')
    .isArray()
    .withMessage('order item is must be an array of objects'),
  body('orderItems.*.orderedProducts')
    .isArray()
    .withMessage('ordered products is must be an array of objects'),
  body('orderItems.*.orderedProducts.*.recordedProduct')
    .notEmpty()
    .withMessage('recordedProduct id is required')
    .custom(async (value, { ref }) => {
      const isValidMongoId = mongoose.Types.ObjectId.isValid(value);
      if (!isValidMongoId) throw new BadRequestError('Invalid MongoDB id');

      const product = await RecordedProduct.findById(value);
      if (!product) throw new NotFoundError(`no product with id ${value}`);
    }),
  body('orderItems.*.orderedProducts.*.quantity')
    .notEmpty()
    .withMessage('quantity is required'),
  body('orderItems.*.shippingAdress1')
    .notEmpty()
    .withMessage('shippingAdress1 is required'),
  body('orderItems.*.shippingAdress2')
    .notEmpty()
    .withMessage('shippingAdress2 is required'),
  body('orderItems.*.city').notEmpty().withMessage('city is required'),
  body('orderItems.*.zipCode').notEmpty().withMessage('zip code is required'),
  body('orderItems.*.country').notEmpty().withMessage('country is required'),
  body('orderItems.*.phoneNumber')
    .notEmpty()
    .withMessage('phone number is required'),
  body('orderItems.*.seller')
    .notEmpty()
    .withMessage('seller is required')
    .custom(async (value, { req }) => {
      const isValidMongoId = mongoose.Types.ObjectId.isValid(value);
      if (!isValidMongoId) throw new BadRequestError('Invalid MongoDB id');

      const user = await User.findById(value);
      if (!user) throw new NotFoundError(`no user with id ${value}`);
      if (user.role !== 'seller')
        throw new UnauthorizedError(
          'not authorized to access this route, this user is not a seller'
        );
    }),
  body('orderItems.*.user')
    .notEmpty()
    .withMessage('user is required')
    .custom(async (value, { req }) => {
      const isValidMongoId = mongoose.Types.ObjectId.isValid(value);
      if (!isValidMongoId) throw new BadRequestError('Invalid MongoDB id');

      const user = await User.findById(value);
      if (!user) throw new NotFoundError(`no user with id ${value}`);
      if (user.role !== 'user')
        throw new UnauthorizedError(
          'not authorized to access this route, this user is not a user'
        );
    }),
]);

export const validateUpdateToShippingInput = withValidationErrors([
  body('deliveryStatus')
    .notEmpty()
    .withMessage('delivery status is required')
    .custom(async (value, { req }) => {
      if (value !== 'shipping') {
        throw new UnauthorizedError(
          'not authorized to access this route, this only able to change delivery status from pending to shipping'
        );
      }
      const orderItem = await OrderItem.findById(req.params.orderItemId);
      if (orderItem.deliveryStatus !== 'pending') {
        throw new UnauthorizedError(
          'not authorized to access this route, this only able to change delivery status from pending to shipping'
        );
      }
    }),
]);

export const validateUpdateToDeliveredInput = withValidationErrors([
  body('deliveryStatus')
    .notEmpty()
    .withMessage('delivery status is required')
    .custom(async (value, { req }) => {
      if (value !== 'delivered') {
        throw new UnauthorizedError(
          'not authorized to access this route, this only able to change delivery status from shipping to delivered'
        );
      }
      const orderItem = await OrderItem.findById(req.params.orderItemId);
      if (orderItem.deliveryStatus !== 'shipping') {
        throw new UnauthorizedError(
          'not authorized to access this route, this only able to change delivery status from shipping to delivered'
        );
      }
    }),
]);

export const validateUpdateToApprovedOrderItemInput = withValidationErrors([
  body('orderStatus')
    .notEmpty()
    .withMessage('order status is required')
    .custom(async (value, { req }) => {
      if (value !== 'approved') {
        throw new UnauthorizedError(
          'not authorized to access this route, this only able to change order status from ready to approve to approved'
        );
      }
      const orderItem = await OrderItem.findById(req.params.orderItemId);
      if (orderItem.orderStatus !== 'readyToApprove') {
        throw new UnauthorizedError(
          'not authorized to access this route, this only able to change order status from ready to approve to approved'
        );
      }
    }),
]);

export const validateUpdateToNotApprovedOrderItemInput = withValidationErrors([
  body('orderStatus')
    .notEmpty()
    .withMessage('order status is required')
    .custom(async (value, { req }) => {
      if (value !== 'notApproved') {
        throw new UnauthorizedError(
          'not authorized to access this route, this only able to change order status from ready to approve to not approved'
        );
      }
      const orderItem = await OrderItem.findById(req.params.orderItemId);
      if (orderItem.orderStatus !== 'readyToApprove') {
        throw new UnauthorizedError(
          'not authorized to access this route, this only able to change order status from ready to approve to not approved'
        );
      }
    }),
]);

export const validateUpdateToReturnedOrderItemInput = withValidationErrors([
  body('deliveryStatus')
    .notEmpty()
    .withMessage('delivery status is required')
    .custom(async (value, { req }) => {
      if (value !== 'returned') {
        throw new UnauthorizedError(
          'not authorized to access this route, this only able to change delivery status from returning to returned'
        );
      }
      const orderItem = await OrderItem.findById(req.params.orderItemId);
      console.log(orderItem.orderStatus);
      if (orderItem.orderStatus !== 'notApproved') {
        throw new UnauthorizedError(
          'not authorized to access this route, this only able to change delivery status from returning to returned'
        );
      }
      if (orderItem.deliveryStatus !== 'returning') {
        throw new UnauthorizedError(
          'not authorized to access this route, this only able to change delivery status from returning to returned'
        );
      }
    }),
]);

export const validateUpdateToApprovedInput = withValidationErrors([
  body('status')
    .notEmpty()
    .withMessage('status is required')
    .custom(async (value, { req }) => {
      if (value !== 'approved') {
        throw new UnauthorizedError(
          'not authorized to access this route, this only able to change status from processing to approved'
        );
      }
      const order = await Order.findById(req.params.orderId);

      const orderItemDeliveryStatusChecker = Promise.all(
        order.orderItems.map(async (orderItem) => {
          const receivedOrderItem = await OrderItem.findById(orderItem);
          return receivedOrderItem.deliveryStatus;
        })
      );
      const resolvedOrderItemDeliveryStatusChecker =
        await orderItemDeliveryStatusChecker;

      if (resolvedOrderItemDeliveryStatusChecker) {
        // let checkerResult = false;
        for (
          let i = 0;
          i < resolvedOrderItemDeliveryStatusChecker.length;
          i++
        ) {
          if (resolvedOrderItemDeliveryStatusChecker[i] !== 'delivered') {
            throw new UnauthorizedError(
              'not authorized to access this route, user not able to approved'
            );
          }
        }
      }

      // console.log(resolvedOrderItemDeliveryStatusChecker);

      // const resolvedOrder = Promise.resolve(order.orderItems);
      // console.log(resolvedOrder);
      // console.log(order.orderItems);
      // if (orderItem.deliveryStatus !== 'shipping') {
      //   throw new UnauthorizedError(
      //     'not authorized to access this route, this only able to change delivery status from shipping to delivered'
      //   );
      // }
    }),
]);

export const validateRecordedProductInput = withValidationErrors([
  body('originalId').custom(async (value, { req }) => {
    const isValidMongoId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidMongoId)
      throw new BadRequestError(
        'Invalid MongoDB id for collection in req.body productId'
      );

    const product = await Product.findById(value);
    if (!product)
      throw new NotFoundError(
        `no product with id ${value}, product not allowed to record`
      );

    const recordedProducts = await RecordedProduct.find({ originalId: value });

    console.log(recordedProducts);
    // console.log(value);

    // const recordedProductChecker = Promise.all(
    //   recordedProducts.filter(
    //     async (recordedProduct) => recordedProduct.originalId === value
    //   )
    // );
    // // if (recordedProduct.originalId === value) {
    // //   return true;
    // // }
    // // return false;
    // console.log(recordedProductChecker);
    // const resolvedRecordedProductChecker = await recordedProductChecker;
    // console.log(resolvedRecordedProductChecker);
    // if (resolvedRecordedProductChecker)
    //   throw new BadRequestError(
    //     'Product failed to record. Same product is already recorded'
    //   );
    if (recordedProducts.length !== 0)
      throw new BadRequestError(
        'Product failed to record. Same product is already recorded'
      );
  }),
  body('name').notEmpty().withMessage('name is required'),
  body('description').notEmpty().withMessage('description is required'),
  body('richDescription')
    .notEmpty()
    .withMessage('rich description is required'),
  body('brand').notEmpty().withMessage('brand is required'),
  body('price').notEmpty().withMessage('price is required'),
]);
