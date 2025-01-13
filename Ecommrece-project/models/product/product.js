const Joi = require('joi');
const {default:mongoose, Schema} = require('mongoose');

const productSchema = Schema({
    row: Number,
    coverImg: String,
    images: [String],
    title: String,
    price: Number,
    discount: Number,
    desc: String,
    active:{
        type:Boolean,
        default:true
    },
    subcategory: {type: Schema.Types.ObjectId, ref: "SubCategory"}


}, { timestamps: true });


const productValidate = (product) => {
    const schema = new Joi.object({
        row: Joi.number(),
        coverImg: Joi.string(),
        images: Joi.array().items(Joi.string()),
        title: Joi.string(),
        price: Joi.number(),
        discount: Joi.number(),
        desc: Joi.string(),
        active:Joi.boolean(),
        category: Joi.string(),
    })
    return schema.validate(product);
};

const Product = mongoose.model("Product", productSchema);
module.exports = {Product,productValidate};

