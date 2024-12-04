import Joi from "joi";
import mongoose, { Schema } from "mongoose";

const categorySchema = Schema({
    row:{
        type:Number
    },
    title:{
        type:String
    },
    icon:{
        type:String
    }
});


export const categoryValidate = (category)=>{
    const schema = new Joi.object({
        row:Joi.number().label("Your error message in here"),
        title:Joi.string(),
        icon:Joi.string()
    })
    return schema.validate(category);
};

export const Category = mongoose.model("Category",categorySchema);