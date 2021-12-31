const { Router } = require('express');
const router = Router();
// import all routes
const productRouter = require('./product');

router.use('/products', productRouter);

module.exports = router;
