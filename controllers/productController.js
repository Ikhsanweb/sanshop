import Product from '../models/productModel.js';
import { StatusCodes } from 'http-status-codes';
import cloudinary from 'cloudinary';
import { promises as fs } from 'fs';

export const getAllProducts = async (req, res) => {
  // const { search, orderByDate, orderByPrice, sort } = req.query;
  // const featuredProducts = await Product.find({ isFeatured: true })
  //   .populate('category')
  //   .populate('createdBy', 'fullName phoneNumber');

  // const queryObject = {};
  // if (search) {
  //   queryObject.$or = [
  //     { name: { $regex: search, $options: 'i' } },
  //     { brand: { $regex: search, $options: 'i' } },
  //   ];
  // }

  // const sortOptions = {
  //   newest: '-dateCreated',
  //   oldest: 'dateCreated',
  //   cheapest: '-price',
  //   mostExpensive: 'price',
  // };

  // const sortKey = sortOptions[sort] || sortOptions.newest;

  // const products = await Product.find(queryObject)
  //   .sort(sortKey)
  //   .populate('category')
  //   .populate('createdBy', 'fullName phoneNumber');

  const products = await Product.find({})
    .populate('category')
    .populate('createdBy', 'fullName phoneNumber');

  const featuredProducts = await Product.find({ isFeatured: true })
    .populate('category')
    .populate('createdBy', 'fullName phoneNumber');

  res.status(StatusCodes.OK).json({ products, featuredProducts });
};

export const getSearchedProduct = async (req, res) => {
  const { search, sorter } = req.query;

  const queryObject = {};
  if (search) {
    queryObject.$or = [
      { name: { $regex: search, $options: 'i' } },
      { brand: { $regex: search, $options: 'i' } },
    ];
  }

  const sortOptions = {
    ascending: 'name',
    descending: '-name',
    mostExpensive: 'price',
    cheapest: '-price',
    newest: '-dateCreated',
    oldest: 'dateCreated',
  };

  const sortKey = sortOptions[sorter] || sortOptions.newest;

  const products = await Product.find(queryObject)
    .populate('category')
    .populate('createdBy', 'fullName phoneNumber')
    .sort(sortKey);

  res.status(StatusCodes.OK).json({ products });
};

export const getSingleProduct = async (req, res) => {
  const product = await Product.findById(req.params.productId)
    .populate('category')
    .populate('createdBy', 'fullName phoneNumber');
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
  const newProduct = { ...req.body };

  console.log(newProduct);

  if (req.file) {
    const response = await cloudinary.v2.uploader.upload(req.file.path);
    await fs.unlink(req.file.path);

    newProduct.image = response.secure_url;
    newProduct.imagePublicId = response.public_id;
  }
  console.log(newProduct);
  const product = await Product.create(newProduct);
  console.log(product);
  // if (req.file && product.imagePublicId) {
  //   await cloudinary.v2.uploader.destroy(product.imagePublicId);
  // }
  // console.log(product);

  res.status(StatusCodes.CREATED).json({ product });
};

export const updateProduct = async (req, res) => {
  const newProduct = { ...req.body };

  console.log(newProduct);

  if (req.file) {
    const response = await cloudinary.v2.uploader.upload(req.file.path);
    await fs.unlink(req.file.path);

    newProduct.image = response.secure_url;
    newProduct.imagePublicId = response.public_id;
  }

  console.log(newProduct);

  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.productId,
    newProduct
    // {
    //   new: true,
    // }
  );
  console.log(updatedProduct);

  if (req.file && updatedProduct.imagePublicId) {
    await cloudinary.v2.uploader.destroy(updatedProduct.imagePublicId);
  }
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
