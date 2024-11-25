import Joi from "joi";
import mongoose, { Schema } from "mongoose";

const productSchema = Schema({
    row: {
        type: Number
    },
    coverImg: {
        type: String
    },
    images: {
        type: [String]
    },
    title: {
        type: String
    },
    price: {
        type: Number
    },
    discount: {
        type: Number
    },
    desc: {
        type: String
    },
    category: [{
        type: Schema.Types.ObjectId, ref: "Category"
    }],
    
}, { timestamps: true });


export const productValidate = (product) => {
    const schema = new Joi.object({
        row: Joi.number(),
        coverImg: Joi.string(),
        images: Joi.array().items(Joi.string()),
        title: Joi.string(),
        price: Joi.number(),
        discount: Joi.number(),
        desc: Joi.string(),
        category: Joi.array(),
    })
    return schema.validate(product);
};

export const Product = mongoose.model("Product", productSchema);

