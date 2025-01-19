const express = require('express');
const {  productAllList, productListById, productListByPagination } = require('../../controllers/product/product');
const { categoryList, categoryListById } = require('../../controllers/product/category');
const { subcategoryListById, subcategoryList } = require('../../controllers/product/subcategory');
const router = express.Router();

router.get('/product',productAllList);
router.get('/product/:id',productListById);
router.get('/productpag',productListByPagination);

router.get('/subcategory',subcategoryList);
router.get('/subcategory/:id',subcategoryListById);
router.get('/category',categoryList);
router.get('/category/:id',categoryListById);




module.exports = router;