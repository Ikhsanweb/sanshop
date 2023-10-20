import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    default: '',
  },
  city: {
    type: String,
    default: '',
  },
  zipCode: {
    type: String,
    default: '',
  },
  country: {
    type: String,
    default: '',
  },
  role: {
    type: String,
    enum: ['user', 'admin', 'seller'],
    default: 'user',
  },
  avatar: {
    type: String,
  },
  avatarPublicId: {
    type: String,
  },
});

export default mongoose.model('User', UserSchema);
