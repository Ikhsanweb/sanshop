import User from '../models/userModel.js';
import { StatusCodes } from 'http-status-codes';

export const getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.status(StatusCodes.OK).json({ users });
};

export const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  const userWithoutPassword = user.toJSON();
  delete userWithoutPassword.password;
  res.status(StatusCodes.OK).json({ user: userWithoutPassword });
};

export const updateUser = async (req, res) => {
  const newUser = { ...req.body };
  delete newUser.password;
  delete newUser.role;
  const updatedUser = await User.findByIdAndUpdate(req.user.userId, newUser);
  res.status(StatusCodes.OK).json({ msg: 'user is updated' });
};
