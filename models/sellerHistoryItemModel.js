import mongoose from 'mongoose';

const SellerHistoryItemSchema = new mongoose.Schema({
  recordedProduct: {
    type: mongoose.Types.ObjectId,
    ref: 'RecordedProduct',
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

export default mongoose.model('SellerHistoryItem', SellerHistoryItemSchema);
