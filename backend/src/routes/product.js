import { Router } from 'express';
import {
  getProducts,
  getProductById,
} from '../controllers/productController.js';

const server = Router();

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
server.get('/', getProducts);

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
server.get('/:id', getProductById);

export default server;
