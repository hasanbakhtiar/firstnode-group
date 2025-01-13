const mongoose = require('mongoose');
const connectdb = async()=>{
    try {
        // Connecting with MongoDB Driver
        await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@ecommerce-cluster.lbzkp.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.DB_CLUSTER}`);

        console.log("mongodb connect is successfully!");
        
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = connectdb;