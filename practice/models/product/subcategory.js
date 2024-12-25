import Joi from "joi";
import mongoose, { Schema } from "mongoose";

const subCategorySchema = Schema({
    row:{
        type:Number
    },
    title:{
        type:String
    },
    category: {type: Schema.Types.ObjectId, ref: "Category"}
},{ timestamps: true });


export const subCategoryValidate = (category)=>{
    const schema = new Joi.object({
        row:Joi.number().label("Your error message in here"),
        title:Joi.string(),
        category:Joi.string(),
    })
    return schema.validate(category);
};

export const SubCategory = mongoose.model("SubCategory",subCategorySchema);