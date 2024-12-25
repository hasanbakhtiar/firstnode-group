import Joi from "joi";
import mongoose, { Schema } from "mongoose";

const basketSchema = Schema({
    basketId:String,
    user: {type: Schema.Types.ObjectId, ref: "User"},
    products:[
        {
            product: {type: Schema.Types.ObjectId, ref: "Product"},
            quantity:Number
        }
    ],
    totalPrice:Number

},{ timestamps: true });


export const basketValidate = (basket)=>{
    const schema = new Joi.object({
        basketId:Joi.string(),
        products:Joi.array(),
        totalPrice:Joi.number()
    })
    return schema.validate(basket);
};

export const Basket = mongoose.model("Basket",basketSchema);