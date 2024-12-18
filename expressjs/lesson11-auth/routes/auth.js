import express from 'express';
import { userAuth } from '../controller/user.js';
const router = express.Router();

router.post('/singin',userAuth);

export default router;