import express from 'express';
import Product from '../models/product.js';
const router = express.Router();

router.get('/', async(req,res)=>{
    const product = await Product.find();
    res.status(200).send(product);
});

router.post('/', async(req,res)=>{
    const product =  new Product(req.body);
    const result = await product.save();
    res.status(201).send(result);

})


export default router;