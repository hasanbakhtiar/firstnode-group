const Joi = require("Joi");
const {default:mongoose, Schema} = require('mongoose');

const wishlistSchema = Schema({
    wishlistId:String,
    user: {type: Schema.Types.ObjectId, ref: "User"},
    product: {type: Schema.Types.ObjectId, ref: "Product"},

},{ timestamps: true });


const wishlistValidate = (wishlist)=>{
    const schema = new Joi.object({
        wishlistId:Joi.string(),
        product:Joi.string(),
    })
    return schema.validate(wishlist);
};

const Wishlist = mongoose.model("Wishlist",wishlistSchema);
module.exports = {Wishlist,wishlistValidate};
