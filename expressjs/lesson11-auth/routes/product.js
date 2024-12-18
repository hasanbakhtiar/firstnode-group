import express from 'express';
import { product_add, product_all_delete, product_delete, product_edit, product_list, single_product } from '../controller/product.js';
import upload from '../middleware/uploadFile.js';
import auth from '../middleware/auth.js';
const router = express.Router();

router.get('/', product_list);

router.get('/:id', single_product);

router.post('/',upload.fields([{name:"coverImg",maxCount:1},{name:"images",maxCount:10}]), product_add);

router.put('/:id',upload.fields([{name:"coverImg",maxCount:1},{name:"images",maxCount:10}]),product_edit);

router.delete("/all",product_all_delete);

router.delete("/:id",product_delete);


export default router;