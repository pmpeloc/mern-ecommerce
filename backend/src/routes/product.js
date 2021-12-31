import { Router } from 'express';
import { getProducts, getProductById } from '../controllers/product.js';

const server = Router();

server.get('/', getProducts);
server.get('/:id', getProductById);

export default server;
