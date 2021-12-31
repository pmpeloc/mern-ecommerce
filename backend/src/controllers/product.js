import products from '../data/products.js';

export function getProducts(req, res) {
  return res.json(products);
}

export function getProductById(req, res) {
  const product = products.find((p) => p._id === req.params.id);
  return res.json(product);
}
