import mongoose, { Schema } from "mongoose";

const productSchema = Schema({
    row:{
        type:Number,
        require:true,
    },
    title:{
        type:String,
        require:true,
    },
    price:{
        type:Number,
        require:true,
    },
    desc:{
        type:String,
        require:true,
    }
},{ timestamps: true });


const Product = mongoose.model("Product",productSchema);
export default Product;