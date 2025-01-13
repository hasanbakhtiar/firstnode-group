const Joi = require("Joi");
const {default:mongoose, Schema} = require('mongoose');
const orderSchema = Schema({
    orderId:String,
    user: {type: Schema.Types.ObjectId, ref: "User"},
    products:[
        {
            product: {type: Schema.Types.ObjectId, ref: "Product"},
            quantity:Number
        }
    ],
    totalPrice:Number,
    status:{
        default:"pending",
        enum:["completed","pending","cancel"]
    }

},{ timestamps: true });


const orderValidate = (order)=>{
    const schema = new Joi.object({
        orderId:Joi.string(),
        products:Joi.array(),
        totalPrice:Joi.number(),
        status:Joi.string()
    })
    return schema.validate(order);
};

const Order = mongoose.model("Order",orderSchema);
module.exports = {Order,orderValidate};
