const Joi = require("Joi");
const {default:mongoose, Schema} = require('mongoose');
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


const basketValidate = (basket)=>{
    const schema = new Joi.object({
        basketId:Joi.string(),
        products:Joi.array(),
        totalPrice:Joi.number()
    })
    return schema.validate(basket);
};

const Basket = mongoose.model("Basket",basketSchema);
module.exports = {Basket,basketValidate};
