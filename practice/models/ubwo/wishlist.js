import Joi from "joi";
import mongoose, { Schema } from "mongoose";

const wishlistSchema = Schema({
    wishlistId:String,
    user: {type: Schema.Types.ObjectId, ref: "User"},
    product: {type: Schema.Types.ObjectId, ref: "Product"},

},{ timestamps: true });


export const wishlistValidate = (wishlist)=>{
    const schema = new Joi.object({
        wishlistId:Joi.string(),
        product:Joi.string(),
    })
    return schema.validate(wishlist);
};

export const Wishlist = mongoose.model("Wishlist",wishlistSchema);