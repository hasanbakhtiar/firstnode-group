import express from 'express';
import  {products}  from './data/product.js';
import cors from 'cors';
const app = express();
app.use(cors());


app.get('/',(req,res)=>{
    res.status(201).send('Hello World');
});

app.get('/product',(req,res)=>{
    res.status(200).json(products);
});




app.listen("3001",()=>{
    console.log(`Server  listening on port 3001`);
})