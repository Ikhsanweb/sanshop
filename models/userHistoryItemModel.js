import mongoose from 'mongoose';

const UserHistoryItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

export default mongoose.model('UserHistoryItem', UserHistoryItemSchema);
