const express = require('express');
const { productList } = require('../../controllers/product/product');
const router = express.Router();

router.get('/product',productList);


module.exports = router;