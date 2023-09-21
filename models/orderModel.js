import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  orderItems: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'OrderItem',
      required: true,
    },
  ],
  status: {
    type: String,
    enum: ['processing', 'approved'],
    default: 'processing',
  },
  allTotalPrice: {
    type: Number,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
});

export default mongoose.model('Order', OrderSchema);
