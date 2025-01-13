const express = require('express');
const { productAdd, productDelete } = require('../../controllers/product/product');
const upload = require('../../middlewares/uploadFile');
const router = express.Router();

router.post('/',upload.fields([{name:"coverImage",maxCount:1},{name:"images"}]),productAdd)
router.delete('/:id',productDelete);

module.exports = router;