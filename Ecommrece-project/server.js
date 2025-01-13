const express = require('express');
const app = express();
const cors = require('cors');
const connectdb = require('./config/connectdb');
require('dotenv').config()

// start middleware
app.use(cors());
app.use(express.json());
// end middleware

const surfaceRoute = require('./routers/client/surface');
app.use('/',surfaceRoute);



connectdb();
app.listen(process.env.PORT,()=>{
    console.log(`${process.env.PORT} port is running`);
    
});

