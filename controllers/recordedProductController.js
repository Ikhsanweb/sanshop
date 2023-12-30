import RecordedProduct from '../models/recordedProductModel.js';
import { StatusCodes } from 'http-status-codes';

export const getRecordedProduct = async (req, res) => {
  const recordedProducts = await RecordedProduct.find({}).populate(
    'createdBy',
    'fullName phoneNumber'
  );

  res.status(StatusCodes.OK).json({ recordedProducts });
};

export const createRecordedProduct = async (req, res) => {
  const newRecordedProduct = { ...req.body };

  const recordedProduct = await RecordedProduct.create(newRecordedProduct);

  console.log(recordedProduct);

  res.status(StatusCodes.CREATED).json({ recordedProduct });
};
