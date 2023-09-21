import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  orderItems: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'OrderItem',
      required: true,
    },
  ],
  wholeTotalPrice: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
});

export default mongoose.model('Order', OrderSchema);
