import stripe from 'stripe';
import dotenv from 'dotenv';
dotenv.config();
import OrderedProduct from '../models/orderedProductModel.js';
import OrderItem from '../models/orderItemModel.js';
import Order from '../models/orderModel.js';
import UserHistoryItem from '../models/userHistoryItemModel.js';
import UserHistory from '../models/userHistoryModel.js';
import SellerHistoryItem from '../models/sellerHistoryItemModel.js';
import SellerHistory from '../models/sellerHistoryModel.js';
import { StatusCodes } from 'http-status-codes';

const stripeInstance = stripe(process.env.STRIPE_SECRET_KEY);

export const userCreateOrder = async (req, res) => {
  const { orderItems } = req.body;

  const orderItemIds = Promise.all(
    orderItems.map(async (orderItem) => {
      const orderedItemIds = Promise.all(
        orderItem.orderedProducts.map(async (orderedProduct) => {
          const receivedOrderedProduct = await OrderedProduct.create({
            product: orderedProduct.product,
            quantity: orderedProduct.quantity,
          });
          return receivedOrderedProduct._id;
        })
      );
      const resolvedOrderedItemIds = await orderedItemIds;

      const totalPrice = await Promise.all(
        resolvedOrderedItemIds.map(async (orderedProductId) => {
          const receivedPrice = await OrderedProduct.findById(
            orderedProductId
          ).populate('product', 'price');
          const receeivedTotalPrice =
            receivedPrice.product.price * receivedPrice.quantity;
          return receeivedTotalPrice;
        })
      );

      const calculatedTotalPrice = totalPrice.reduce((a, b) => a + b, 0);

      const receivedOrderItem = await OrderItem.create({
        orderedProducts: resolvedOrderedItemIds,
        shippingAdress1: orderItem.shippingAdress1,
        shippingAdress2: orderItem.shippingAdress2,
        city: orderItem.city,
        zipCode: orderItem.zipCode,
        country: orderItem.country,
        phoneNumber: orderItem.phoneNumber,
        seller: orderItem.seller,
        user: req.user.userId,
        totalPrice: calculatedTotalPrice,
      });
      return receivedOrderItem._id;
    })
  );

  const receivedOrderItemIds = await orderItemIds;

  const totalPrice = await Promise.all(
    receivedOrderItemIds.map(async (orderItemId) => {
      const receivedPrice = await OrderItem.findById(orderItemId);
      const receivedTotalPrice = receivedPrice.totalPrice;
      return receivedTotalPrice;
    })
  );

  const calculatedTotalPrice = totalPrice.reduce((a, b) => a + b, 0);

  const paymentIntent = await stripeInstance.paymentIntents.create({
    amount: calculatedTotalPrice * 100,
    currency: 'usd',
    payment_method_types: ['card'],
  });

  const receivedPaymentIntent = await paymentIntent;

  console.log(receivedPaymentIntent);

  const order = Order.create({
    orderItems: receivedOrderItemIds,
    wholeTotalPrice: calculatedTotalPrice,
    stripePaymentIntentId: receivedPaymentIntent.client_secret,
    user: req.user.userId,
  });
  const createOrder = Promise.resolve(order);
  const resolvedOrder = await createOrder;

  res.status(StatusCodes.CREATED).json({ resolvedOrder });
};

export const userGetOrders = async (req, res) => {
  const userOrders = await Order.find({ user: req.user.userId })
    .populate({
      path: 'orderItems',
      populate: {
        path: 'orderedProducts',
        populate: {
          path: 'product',
        },
      },
    })
    .populate({
      path: 'orderItems',
      populate: { path: 'seller', select: 'fullName _id' },
    });
  res.status(StatusCodes.OK).json({ userOrders });
};

export const userGetOrder = async (req, res) => {
  const userOrder = await Order.findById(req.params.orderId)
    .populate({
      path: 'orderItems',
      populate: {
        path: 'orderedProducts',
        populate: {
          path: 'product',
        },
      },
    })
    .populate({
      path: 'orderItems',
      populate: { path: 'seller', select: 'fullName _id' },
    });
  res.status(StatusCodes.OK).json({ userOrder });
};

export const userGetAllOrderItem = async (req, res) => {
  const userOrderItems = await OrderItem.find({ user: req.user.userId })
    .populate({
      path: 'orderedProducts',
      populate: {
        path: 'product',
      },
    })
    .populate({
      path: 'user',
      select: 'fullName _id',
    })
    .populate({
      path: 'seller',
      select: 'fullName _id',
    });
  res.status(StatusCodes.OK).json({ userOrderItems });
};

export const userGetSingleOrderItem = async (req, res) => {
  const userOrderItem = await OrderItem.findById(req.params.orderItemId)
    .populate({
      path: 'orderedProducts',
      populate: {
        path: 'product',
      },
    })
    .populate({
      path: 'user',
      select: 'fullName _id',
    })
    .populate({
      path: 'seller',
      select: 'fullName _id',
    });
  res.status(StatusCodes.OK).json({ userOrderItem });
};

export const sellerGetAllOrderItem = async (req, res) => {
  const sellerOrderItems = await OrderItem.find({ seller: req.user.userId })
    .populate({
      path: 'orderedProducts',
      populate: {
        path: 'product',
      },
    })
    .populate({
      path: 'user',
      select: 'fullName _id',
    });
  res.status(StatusCodes.OK).json({ sellerOrderItems });
};

export const sellerGetSingleOrderItems = async (req, res) => {
  const sellerOrderItem = await OrderItem.findById(req.params.orderItemId)
    .populate({
      path: 'orderedProducts',
      populate: {
        path: 'product',
      },
    })
    .populate({
      path: 'user',
      select: 'fullName _id',
    });
  res.status(StatusCodes.OK).json({ sellerOrderItem });
};

export const sellerPatchToShipping = async (req, res) => {
  const updatedOrderItem = await OrderItem.findByIdAndUpdate(
    req.params.orderItemId,
    { deliveryStatus: req.body.deliveryStatus },
    {
      new: true,
    }
  );
  res.status(StatusCodes.OK).json({
    msg: 'order item status changed to shipping',
    orderItem: updatedOrderItem,
  });
};

export const sellerPatchToDelivered = async (req, res) => {
  const updatedOrderItem = await OrderItem.findByIdAndUpdate(
    req.params.orderItemId,
    {
      deliveryStatus: req.body.deliveryStatus,
      orderStatus: 'readyToApprove',
    },
    {
      new: true,
    }
  );
  res.status(StatusCodes.OK).json({
    msg: 'order item status changed to delivered',
    orderItem: updatedOrderItem,
  });
};

export const userPatchToApproved = async (req, res) => {
  const updatedOrder = await OrderItem.findByIdAndUpdate(
    req.params.orderItemId,
    { orderStatus: req.body.orderStatus },
    {
      new: true,
    }
  );

  const orderItemToPush = await OrderItem.findById(
    req.params.orderItemId
  ).populate('orderedProducts');
  const awaitedOrderItemToPush = Promise.resolve(orderItemToPush);
  const resolvedOrderItemToPush = await awaitedOrderItemToPush;

  const takingUserHistoryItemIds = Promise.all(
    resolvedOrderItemToPush.orderedProducts.map(async (orderedProduct) => {
      const receivedOrderHistoryItem = await UserHistoryItem.create({
        product: orderedProduct.product,
        quantity: orderedProduct.quantity,
      });
      return receivedOrderHistoryItem._id;
    })
  );

  const resolvedUserHistoryItemIds = await takingUserHistoryItemIds;

  const takingSellerHistoryItemIds = Promise.all(
    resolvedOrderItemToPush.orderedProducts.map(async (orderedProduct) => {
      const receivedOrderHistoryItem = await SellerHistoryItem.create({
        product: orderedProduct.product,
        quantity: orderedProduct.quantity,
      });
      return receivedOrderHistoryItem._id;
    })
  );

  const resolvedSellerHistoryItemIds = await takingSellerHistoryItemIds;

  const pushToUserHistory = await UserHistory.create({
    orderedProducts: resolvedUserHistoryItemIds,
    shippingAdress1: orderItemToPush.shippingAdress1,
    shippingAdress2: orderItemToPush.shippingAdress2,
    city: orderItemToPush.city,
    zipCode: orderItemToPush.zipCode,
    country: orderItemToPush.country,
    phoneNumber: orderItemToPush.phoneNumber,
    seller: orderItemToPush.seller,
    user: orderItemToPush.user,
    dateOrdered: orderItemToPush.dateOrdered,
    totalPrice: orderItemToPush.totalPrice,
    deliveryStatus: orderItemToPush.deliveryStatus,
    orderStatus: orderItemToPush.orderStatus,
  });

  const afterPushToUserHistory = Promise.resolve(pushToUserHistory);
  const resolvedUserHistory = await afterPushToUserHistory;

  const pushToSellerHistory = await SellerHistory.create({
    orderedProducts: resolvedSellerHistoryItemIds,
    shippingAdress1: orderItemToPush.shippingAdress1,
    shippingAdress2: orderItemToPush.shippingAdress2,
    city: orderItemToPush.city,
    zipCode: orderItemToPush.zipCode,
    country: orderItemToPush.country,
    phoneNumber: orderItemToPush.phoneNumber,
    seller: orderItemToPush.seller,
    user: orderItemToPush.user,
    dateOrdered: orderItemToPush.dateOrdered,
    totalPrice: orderItemToPush.totalPrice,
    deliveryStatus: orderItemToPush.deliveryStatus,
    orderStatus: orderItemToPush.orderStatus,
  });

  const afterPushToSellerHistory = Promise.resolve(pushToSellerHistory);
  const resolvedSellerHistory = await afterPushToSellerHistory;

  const orderItemToDelete = await OrderItem.findById(req.params.orderItemId);
  const awaitedOrderItemToDelete = Promise.resolve(orderItemToDelete);
  const resolvedOrderItemToDelete = await awaitedOrderItemToDelete;

  await Promise.all(
    resolvedOrderItemToDelete.orderedProducts.map(async (orderedProductId) => {
      await OrderedProduct.findByIdAndRemove(orderedProductId);
    })
  );

  const removedOrderItem = await OrderItem.findByIdAndDelete(
    req.params.orderItemId
  );

  const afterRemovedOrderItem = Promise.resolve(removedOrderItem);
  const resolvedRemovedOrderItem = await afterRemovedOrderItem;

  res.status(StatusCodes.OK).json({
    msg: 'order status changed to approved',
    data: {
      updatedOrder,
      resolvedUserHistory,
      resolvedSellerHistory,
      resolvedRemovedOrderItem,
    },
  });
};

export const userPatchToNotApproved = async (req, res) => {
  const updatedOrder = await OrderItem.findByIdAndUpdate(
    req.params.orderItemId,
    {
      deliveryStatus: 'returning',
      orderStatus: req.body.orderStatus,
    },
    {
      new: true,
    }
  );
  res.status(StatusCodes.OK).json({
    updatedOrder,
  });
};

export const sellerPatchToReturned = async (req, res) => {
  const updatedOrder = await OrderItem.findByIdAndUpdate(
    req.params.orderItemId,
    { deliveryStatus: req.body.deliveryStatus },
    {
      new: true,
    }
  );

  const orderItemToPush = await OrderItem.findById(
    req.params.orderItemId
  ).populate('orderedProducts');
  const awaitedOrderItemToPush = Promise.resolve(orderItemToPush);
  const resolvedOrderItemToPush = await awaitedOrderItemToPush;

  const takingUserHistoryItemIds = Promise.all(
    resolvedOrderItemToPush.orderedProducts.map(async (orderedProduct) => {
      const receivedOrderHistoryItem = await UserHistoryItem.create({
        product: orderedProduct.product,
        quantity: orderedProduct.quantity,
      });
      return receivedOrderHistoryItem._id;
    })
  );

  const resolvedUserHistoryItemIds = await takingUserHistoryItemIds;

  const takingSellerHistoryItemIds = Promise.all(
    resolvedOrderItemToPush.orderedProducts.map(async (orderedProduct) => {
      const receivedOrderHistoryItem = await SellerHistoryItem.create({
        product: orderedProduct.product,
        quantity: orderedProduct.quantity,
      });
      return receivedOrderHistoryItem._id;
    })
  );

  const resolvedSellerHistoryItemIds = await takingSellerHistoryItemIds;

  const pushToUserHistory = await UserHistory.create({
    orderedProducts: resolvedUserHistoryItemIds,
    shippingAdress1: orderItemToPush.shippingAdress1,
    shippingAdress2: orderItemToPush.shippingAdress2,
    city: orderItemToPush.city,
    zipCode: orderItemToPush.zipCode,
    country: orderItemToPush.country,
    phoneNumber: orderItemToPush.phoneNumber,
    seller: orderItemToPush.seller,
    user: orderItemToPush.user,
    dateOrdered: orderItemToPush.dateOrdered,
    totalPrice: orderItemToPush.totalPrice,
    deliveryStatus: 'canceled',
    orderStatus: 'return',
  });

  const afterPushToUserHistory = Promise.resolve(pushToUserHistory);
  const resolvedUserHistory = await afterPushToUserHistory;

  const pushToSellerHistory = await SellerHistory.create({
    orderedProducts: resolvedSellerHistoryItemIds,
    shippingAdress1: orderItemToPush.shippingAdress1,
    shippingAdress2: orderItemToPush.shippingAdress2,
    city: orderItemToPush.city,
    zipCode: orderItemToPush.zipCode,
    country: orderItemToPush.country,
    phoneNumber: orderItemToPush.phoneNumber,
    seller: orderItemToPush.seller,
    user: orderItemToPush.user,
    dateOrdered: orderItemToPush.dateOrdered,
    totalPrice: orderItemToPush.totalPrice,
    deliveryStatus: 'canceled',
    orderStatus: 'return',
  });

  const afterPushToSellerHistory = Promise.resolve(pushToSellerHistory);
  const resolvedSellerHistory = await afterPushToSellerHistory;

  const orderItemToDelete = await OrderItem.findById(req.params.orderItemId);
  const awaitedOrderItemToDelete = Promise.resolve(orderItemToDelete);
  const resolvedOrderItemToDelete = await awaitedOrderItemToDelete;

  await Promise.all(
    resolvedOrderItemToDelete.orderedProducts.map(async (orderedProductId) => {
      await OrderedProduct.findByIdAndRemove(orderedProductId);
    })
  );

  const removedOrderItem = await OrderItem.findByIdAndDelete(
    req.params.orderItemId
  );
  const afterRemovedOrderItem = Promise.resolve(removedOrderItem);
  const resolvedRemovedOrderItem = await afterRemovedOrderItem;

  res.status(StatusCodes.OK).json({
    msg: 'deliver status changed to returned',
    data: {
      updatedOrder,
      resolvedUserHistory,
      resolvedSellerHistory,
      resolvedRemovedOrderItem,
    },
  });
};

export const userGetHistories = async (req, res) => {
  const userHistories = await UserHistory.find({ user: req.user.userId })
    .populate({
      path: 'orderedProducts',
      populate: {
        path: 'product',
      },
    })
    .populate({
      path: 'user',
      select: 'fullName _id',
    })
    .populate({
      path: 'seller',
      select: 'fullName _id',
    });
  res.status(StatusCodes.OK).json({ userHistories });
};
export const userGetHistory = async (req, res) => {
  const userHistory = await UserHistory.findById(req.params.userHistoryId)
    .populate({
      path: 'orderedProducts',
      populate: {
        path: 'product',
      },
    })
    .populate({
      path: 'user',
      select: 'fullName _id',
    })
    .populate({
      path: 'seller',
      select: 'fullName _id',
    });
  res.status(StatusCodes.OK).json({ userHistory });
};

export const sellerGetHistories = async (req, res) => {
  const sellerHistories = await SellerHistory.find({ seller: req.user.userId })
    .populate({
      path: 'orderedProducts',
      populate: {
        path: 'product',
      },
    })
    .populate({
      path: 'user',
      select: 'fullName _id',
    })
    .populate({
      path: 'seller',
      select: 'fullName _id',
    });
  res.status(StatusCodes.OK).json({ sellerHistories });
};

export const sellerGetHistory = async (req, res) => {
  const sellerHistory = await SellerHistory.findById(req.params.sellerHistoryId)
    .populate({
      path: 'orderedProducts',
      populate: {
        path: 'product',
      },
    })
    .populate({
      path: 'user',
      select: 'fullName _id',
    })
    .populate({
      path: 'seller',
      select: 'fullName _id',
    });
  res.status(StatusCodes.OK).json({ sellerHistory });
};

export const paymentIntent = async (req, res) => {
  const { amount } = req.body;
  res.send('asdghkshadkjashdjkh');
};
