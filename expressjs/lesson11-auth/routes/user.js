import express from 'express';
import { userAdd, userDelete, userEdit, userList } from '../controller/user.js';
const router = express.Router();

router.get('/',userList);
router.post('/',userAdd);
router.put('/:id',userEdit);
router.delete('/:id',userDelete);

export default router;