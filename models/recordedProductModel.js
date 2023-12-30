import mongoose from 'mongoose';

const RecordedProductSchema = new mongoose.Schema({
  originalId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  richDescription: {
    type: String,
    default: '',
  },
  image: {
    type: String,
  },
  imagePublicId: {
    type: String,
  },
  images: [
    {
      type: String,
    },
  ],
  brand: {
    type: String,
    default: '',
  },
  price: {
    type: Number,
    required: true,
  },
  countInStock: {
    type: Number,
  },
  rating: {
    type: Number,
    default: 0,
  },
  numReview: {
    type: Number,
    default: 0,
  },
  dateCreated: {
    type: String,
    required: true,
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

export default mongoose.model('RecordedProduct', RecordedProductSchema);
