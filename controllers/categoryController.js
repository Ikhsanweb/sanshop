import Category from '../models/categoryModel.js';
import { StatusCodes } from 'http-status-codes';

export const getAllCategory = async (req, res) => {
  const categories = await Category.find({});
  res.status(StatusCodes.OK).json({ categories });
};

export const createCategory = async (req, res) => {
  const category = await Category.create(req.body);
  res.status(StatusCodes.CREATED).json({ category });
};

export const getSingleCategory = async (req, res) => {
  const { categoryId } = req.params;
  const category = await Category.findById(categoryId);
  res.status(StatusCodes.OK).json({ category });
};

export const updateCategory = async (req, res) => {
  const updatedCategory = await Category.findByIdAndUpdate(
    req.params.categoryId,
    req.body,
    {
      new: true,
    }
  );

  res
    .status(StatusCodes.OK)
    .json({ message: 'Category is Updated', category: updateCategory });
};

export const deleteCategory = async (req, res) => {
  const removedCategory = await Category.findByIdAndDelete(
    req.params.categoryId
  );
  res
    .status(StatusCodes.OK)
    .json({ msg: 'job deleted', category: removedCategory });
};
