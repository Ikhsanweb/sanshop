import mongoose from 'mongoose';

const OrderItemSchema = new mongoose.Schema({
  orderedProducts: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'OrderedProduct',
      required: true,
    },
  ],
  shippingAdress1: {
    type: String,
    required: true,
  },
  shippingAdress2: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  seller: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
  dateOrdered: {
    type: Date,
    default: Date.now,
  },
  totalPrice: {
    type: Number,
  },
  deliveryStatus: {
    type: String,
    enum: ['pending', 'shipping', 'delivered'],
    default: 'pending',
  },
});

export default mongoose.model('OrderItem', OrderItemSchema);
