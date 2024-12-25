import Joi from "joi";
import mongoose, { Schema } from "mongoose";

const categorySchema = Schema({
    row:Number,
    title:String
},{ timestamps: true });


export const categoryValidate = (category)=>{
    const schema = new Joi.object({
        row:Joi.number(),
        title:Joi.string(),
    })
    return schema.validate(category);
};

export const Category = mongoose.model("Category",categorySchema);