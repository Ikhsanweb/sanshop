import mongoose from 'mongoose';

const SellerHistoryItemSchema = new mongoose.Schema({
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

export default mongoose.model('SellerHistoryItem', SellerHistoryItemSchema);
