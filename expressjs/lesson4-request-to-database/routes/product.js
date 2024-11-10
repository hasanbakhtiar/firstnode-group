import express from 'express';
import { product_add, product_delete, product_edit, product_list, single_product } from '../controller/product.js';
const router = express.Router();

router.get('/', product_list);

router.get('/:id', single_product);

router.post('/', product_add);

router.put('/:id',product_edit);

router.delete("/:id",product_delete);

export default router;