const Joi = require("Joi");
const {default:mongoose, Schema} = require('mongoose');

const categorySchema = Schema({
    row:Number,
    title:String
},{ timestamps: true });


const categoryValidate = (category)=>{
    const schema = new Joi.object({
        row:Joi.number(),
        title:Joi.string(),
    })
    return schema.validate(category);
};

const Category = mongoose.model("Category",categorySchema);
module.exports = {Category,categoryValidate};