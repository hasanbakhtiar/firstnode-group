const express = require('express');
const app = express();
const cors = require('cors');
const connectdb = require('./config/connectdb');
require('dotenv').config();

// start middleware
app.use(cors());
app.use(express.json());
// end middleware

// clinet routes start
const surfaceRoute = require('./routers/client/surface');
app.use('/',surfaceRoute);
// clinet routes end


// admin routes start
const adProductRoute = require('./routers/admin/product');
const adCategoryRoute = require('./routers/admin/category');
const adSubcategoryRoute = require('./routers/admin/subcategory');

app.use('/ad/product',adProductRoute);
app.use('/ad/category',adCategoryRoute);
app.use('/ad/subcategory',adSubcategoryRoute);
// admin routes end





connectdb();
app.listen(process.env.PORT,()=>{
    console.log(`${process.env.PORT} port is running`);
    
});

