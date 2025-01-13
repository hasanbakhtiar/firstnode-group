const Joi = require("Joi");
const {default:mongoose, Schema} = require('mongoose');

const subCategorySchema = Schema({
    row:{
        type:Number
    },
    title:{
        type:String
    },
    category: {type: Schema.Types.ObjectId, ref: "Category"}
},{ timestamps: true });


const subCategoryValidate = (category)=>{
    const schema = new Joi.object({
        row:Joi.number().label("Your error message in here"),
        title:Joi.string(),
        category:Joi.string(),
    })
    return schema.validate(category);
};

const SubCategory = mongoose.model("SubCategory",subCategorySchema);

module.exports = {SubCategory,subCategoryValidate};
