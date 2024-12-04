import express from 'express';
import { category_add, category_delete, category_edit, category_list } from '../controller/category.js';
import upload from '../middleware/uploadFile.js';

const router = express.Router();

router.get('/',category_list);
router.post('/',upload.single("icon"), category_add);
router.put('/:id',upload.single("icon"), category_edit);
router.delete('/:id', category_delete);


export default router;