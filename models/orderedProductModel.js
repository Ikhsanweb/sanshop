import mongoose from 'mongoose';

const orderedProductSchema = new mongoose.Schema({
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

export default mongoose.model('OrderedProduct', orderedProductSchema);
