const express = require('express');
const { productAdd, productDelete } = require('../../controllers/product/product');
const upload = require('../../middlewares/uploadFile');
const { categoryAdd, categoryDel, categoryEdit } = require('../../controllers/product/category');
const router = express.Router();

router.post('/',categoryAdd);
router.put('/:id',categoryEdit);
router.delete('/:id',categoryDel);

module.exports = router;