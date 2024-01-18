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
  dateShipped: {
    type: Date,
    default: '',
  },
  dateDelivered: {
    type: Date,
    default: '',
  },
  dateSuccess: {
    type: Date,
    default: '',
  },
  dateReturning: {
    type: Date,
    default: '',
  },
  dateCanceled: {
    type: Date,
    default: '',
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  deliveryStatus: {
    type: String,
    enum: ['pending', 'shipping', 'delivered', 'returning', 'returned'],
    default: 'pending',
  },
  orderStatus: {
    type: String,
    enum: ['processing', 'readyToApprove', 'approved', 'notApproved'],
    default: 'processing',
  },
});

export default mongoose.model('OrderItem', OrderItemSchema);
