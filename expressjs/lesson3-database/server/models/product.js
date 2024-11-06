import mongoose, { Schema } from "mongoose";

const productSchema = Schema({
    row:Number,
    title:String,
    price:Number,
    desc:String
});


const Product = mongoose.model("Product",productSchema);
export default Product;