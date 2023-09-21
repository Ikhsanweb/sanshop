import Product from '../models/productModel.js';
import { StatusCodes } from 'http-status-codes';

export const getAllProducts = async (req, res) => {
  const products = await Product.find({}).populate('category');
  const productCount = await Product.countDocuments();
  const featuredProducts = await Product.find({ isFeatured: true }).populate(
    'category'
  );
  res.status(StatusCodes.OK).json({ products, productCount, featuredProducts });
};

// export const getCount = async (req, res) => {
//   const productCounted = await Product.countDocuments((count) => count);
//   res.status(StatusCodes.OK).json({ productCount: productCounted });
// };

export const getSingleProduct = async (req, res) => {
  const product = await Product.findById(req.params.productId).populate(
    'category'
  );
  res.status(StatusCodes.OK).json({ product });
};

export const getAllSellerProducts = async (req, res) => {
  const sellerProducts = await Product.find({
    createdBy: req.user.userId,
  }).populate('category');
  res.status(StatusCodes.OK).json({ sellerProducts });
};

export const getSingleSellerProduct = async (req, res) => {
  const sellerProduct = await Product.findById(req.params.productId).populate(
    'category'
  );
  res.status(StatusCodes.OK).json({ sellerProduct });
};

export const createProduct = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const product = await Product.create(req.body);
  res.status(StatusCodes.CREATED).json({ product });
};

export const updateProduct = async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.productId,
    req.body,
    {
      new: true,
    }
  );
  console.log(updatedProduct);
  res
    .status(StatusCodes.OK)
    .json({ msg: 'product modified', product: updatedProduct });
};

export const deleteProduct = async (req, res) => {
  const removedProduct = await Product.findByIdAndDelete(req.params.productId);
  res
    .status(StatusCodes.OK)
    .json({ msg: 'product deleted', product: removedProduct });
};
