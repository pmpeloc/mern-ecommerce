const products = require('../data/products');

module.exports = {
  async getProducts(req, res) {
    res.json(products);
  },

  async getProductById(req, res) {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
  },
};
