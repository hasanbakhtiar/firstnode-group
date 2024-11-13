import mongoose, { Schema } from "mongoose";

const categorySchema = Schema({
    row:{
        type:Number
    },
    title:{
        type:String
    }
});
const Category = mongoose.model("Category",categorySchema);
export default Category;