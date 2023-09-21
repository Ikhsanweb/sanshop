import OrderedProduct from '../models/orderedProductModel.js';
import OrderItem from '../models/orderItemModel.js';
import Order from '../models/orderModel.js';
import { StatusCodes } from 'http-status-codes';

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

      const receivedOrderItem = await OrderItem.create({
        orderedProducts: resolvedOrderedItemIds,
        shippingAdress1: orderItem.shippingAdress1,
        shippingAdress2: orderItem.shippingAdress2,
        city: orderItem.city,
        zipCode: orderItem.zipCode,
        country: orderItem.country,
        phoneNumber: orderItem.phoneNumber,
        seller: orderItem.seller,
        user: orderItem.user,
      });
      return receivedOrderItem._id;
    })
  );

  const receivedOrderItemIds = await orderItemIds;
  const order = Order.create({
    orderItems: receivedOrderItemIds,
    user: req.user.userId,
  });
  const createOrder = Promise.resolve(order);
  const resolvedOrder = await createOrder;

  res.status(StatusCodes.CREATED).json({ resolvedOrder });
};

export const userGetOrder = async (req, res) => {
  const userOrder = await Order.find({ user: req.user.userId });
  res.status(StatusCodes.OK).json({ userOrder });
};

export const userGetAllOrderItem = async (req, res) => {
  const userOrderItems = await OrderItem.find({ user: req.user.userId });
  res.status(StatusCodes.OK).json({ userOrderItems });
};

export const userGetSingleOrderItem = async (req, res) => {
  const userOrderItem = await OrderItem.findById(req.params.orderItemId);
  res.status(StatusCodes.OK).json({ userOrderItem });
};

export const sellerGetAllOrderItem = async (req, res) => {
  const sellerOrderItems = await OrderItem.find({ seller: req.user.userId });
  res.status(StatusCodes.OK).json({ sellerOrderItems });
};

export const sellerGetSingleOrderItems = async (req, res) => {
  const sellerOrderItem = await OrderItem.findById(req.params.orderItemId);
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
  res
    .status(StatusCodes.OK)
    .json({ msg: 'order item modified', orderItem: updatedOrderItem });
};

export const sellerPatchToDelivered = async (req, res) => {
  const updatedOrderItem = await OrderItem.findByIdAndUpdate(
    req.params.orderItemId,
    { deliveryStatus: req.body.deliveryStatus },
    {
      new: true,
    }
  );
  res
    .status(StatusCodes.OK)
    .json({ msg: 'order item modified', orderItem: updatedOrderItem });
};

export const userPatchToApproved = async (req, res) => {
  res.send('user patch to approved');
};

export const userPushOrderItemToEachHistory = async (req, res) => {
  res.send('user push order item to each history');
};

export const userDeleteOrderCompletely = async (req, res) => {
  res.send('user delete order completely');
};

export const userGetHistory = async (req, res) => {
  res.send('user get history');
};

export const sellerGetHistory = async (req, res) => {
  res.send('seller get history');
};
