const server = require('express').Router();
const { getProducts, getProductById } = require('../controllers/product');

server.get('/', getProducts);
server.get('/:id', getProductById);

module.exports = server;
