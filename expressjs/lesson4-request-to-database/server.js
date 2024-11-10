import express from 'express';
import cors from 'cors';
import  connectdb  from './config/connect.js';

// =======================================================
const app = express();
app.use(cors());
app.use(express.json());

// =======================================================

app.get('/',(req,res)=>{
    res.status(201).send('Hello World');
});

// =======================================================

import productRouter  from './routes/product.js' 
app.use('/product',productRouter);

// =======================================================

connectdb();

app.listen("3001",()=>{
    console.log(`Server  listening on port 3001`);
})