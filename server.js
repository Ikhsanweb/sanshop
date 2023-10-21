import 'express-async-errors';
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import morgan from 'morgan';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import Stripe from 'stripe';
import cloudinary from 'cloudinary';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// MIDDLEWARE
import errorHandlerMiddleware from './middlewares/errorHandlerMiddleware.js';

// ROUTER
import productRouter from './routes/productRouter.js';
import orderRouter from './routes/orderRouter.js';
import categoryRouter from './routes/categoryRouter.js';
import userRouter from './routes/userRoute.js';
import authRouter from './routes/authRouter.js';
import { authenticateUser } from './middlewares/authMiddleware.js';
// UPLOADS
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const __dirname = dirname(fileURLToPath(import.meta.url));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.static(path.resolve(__dirname, './client/dist')));

app.use(cookieParser());
app.use(express.json());
// ---------------------- testing purpose ----------------------
app.get('/', (req, res) => {
  res.send('Hello World');
});
app.post('/', (req, res) => {
  res.json({ message: 'Data received', data: req.body });
});
app.get('/api/v1/test', (req, res) => {
  res.json({ message: 'test route (second attemp)' });
});
// --------------------- testing purpose ---------------------

// ROUTER
app.use('/api/v1/products', authenticateUser, productRouter);
app.use('/api/v1/orders', authenticateUser, orderRouter);
app.use('/api/v1/categories', authenticateUser, categoryRouter);
app.use('/api/v1/users', authenticateUser, userRouter);
app.use('/api/v1/authentications', authRouter);

app.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/dist', 'index.html'));
});

app.use('*', (req, res) => {
  res.status(404).json({ message: 'not found' });
});

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on PORT ${port}....`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
