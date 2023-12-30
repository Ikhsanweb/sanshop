import mongoose from 'mongoose';

const UserHistoryItemSchema = new mongoose.Schema({
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

export default mongoose.model('UserHistoryItem', UserHistoryItemSchema);
