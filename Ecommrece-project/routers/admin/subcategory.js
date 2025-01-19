const express = require('express');
const { subcategoryAdd, subcategoryEdit, subcategoryDel } = require('../../controllers/product/subcategory');
const router = express.Router();

router.post('/',subcategoryAdd);
router.put('/:id',subcategoryEdit);
router.delete('/:id',subcategoryDel);

module.exports = router;