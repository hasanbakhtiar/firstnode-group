import express from 'express';
import { category_add, category_list } from '../controller/category.js';
const router = express.Router();

router.get('/', category_list);
router.post('/', category_add);


export default router;