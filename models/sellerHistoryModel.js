import mongoose from 'mongoose';

const SellerHistorySchema = new mongoose.Schema({
  orderedProducts: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'UserHistoryItem',
      required: true,
    },
  ],
  shippingAdress1: {
    type: String,
  },
  shippingAdress2: {
    type: String,
  },
  city: {
    type: String,
  },
  zipCode: {
    type: String,
  },
  country: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  seller: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
  dateOrdered: {
    type: Date,
  },
  approvalDate: {
    type: Date,
    default: Date.now,
  },
  totalPrice: {
    type: Number,
  },
  deliveryStatus: {
    type: String,
    enum: ['delivered', 'canceled'],
  },
  orderStatus: {
    type: String,
    enum: ['approved', 'return'],
  },
});

export default mongoose.model('SellerHistory', SellerHistorySchema);
