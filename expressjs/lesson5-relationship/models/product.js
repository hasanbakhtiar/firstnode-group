import mongoose, { Schema } from "mongoose";

const productSchema = Schema({
    row:{
        type:Number,
        unique:true
    },
    title:{
        type:String
    },
    price:{
        type:Number
    },
    desc:{
        type:String
    },
    category:{
        type:Schema.Types.ObjectId, ref:"Category"
        
    }
},{ timestamps: true });


const Product = mongoose.model("Product",productSchema);
export default Product;